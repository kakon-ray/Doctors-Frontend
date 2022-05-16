import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/myappointment?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  return (
    <div>
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
            {appointment.map((item) => {
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
    </div>
  );
};

export default MyAppointment;
