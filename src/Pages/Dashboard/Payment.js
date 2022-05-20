import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

/**
 * 1. install stripe react stripe js
 * 2. open stripe account on stripe website
 * 3. get publishable key pk___
 * 4. Create Elements wrapper using publishable key
 * 5. Create Checkout Form using Card element, useStripe, useElements
 * 6. get card elements info(credit card info)
 * 7. get credit card info/error + display card error (if any)
 * ----------------
 * 9. get client secret from backend via payment intent post api
 * 10. store client secret on the client side
 * 11. Create card payment confirmation
 * 12. once payment is confirmed save payment information to the server
 * 13. display transaction id
 * pement getway completed
 */

const Payment = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery("doctors", () =>
    fetch(`https://fast-taiga-21201.herokuapp.com/appointment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const stripePromise = loadStripe(
    "pk_test_51L1Q4WAIzqv6QO7WbF65f9XiKcZCgtmjJKOV0xZ2FiSu9E0SUzSv4Oww4ypuScqtuG0xEw38Rm3izV86U3GzCpA700fOuyGypr"
  );

  return (
    <div className="flex">
      <div class="card w-96 bg-base-100 shadow-xl m-6">
        <div class="card-body">
          <h2 class="card-title">{data?.tretmentName}</h2>
          <p>{data?.name}</p>
          <p>{data?.date}</p>
          <p>Please Pay for ${data?.price}</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl m-6">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
