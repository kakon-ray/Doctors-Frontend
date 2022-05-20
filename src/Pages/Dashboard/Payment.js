import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/appointment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{data.tretmentName}</h2>
          <p>{data.name}</p>
          <p>{data.date}</p>
          <p>Please Pay for ${data.price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
