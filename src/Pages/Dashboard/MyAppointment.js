import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(
      `https://fast-taiga-21201.herokuapp.com/myappointment?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigation("/");
        }
        return res.json();
      })
      .then((data) => setAppointment(data));
  }, []);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Email</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {appointment?.map((item) => {
            return (
              <tr key={item._id} className="text-center">
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.slots}</td>
                <td>{item.email}</td>
                <td>
                  {item.price && !item.paid && (
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button class="btn btn-xs">Pay</button>
                    </Link>
                  )}
                  {item.price && item.paid && (
                    <div>
                      <p class="text-success font-bold">Paid</p>
                      <p class="text-success text-xm">
                        Transaction Id: {item.transactionId}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
