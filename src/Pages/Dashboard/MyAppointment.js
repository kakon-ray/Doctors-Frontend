import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myappointment?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
