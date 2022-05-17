import { format } from "date-fns";
import React from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";

const Modal = ({ modalData, selected, setModalData, refetch }) => {
  const [user, loading, error] = useAuthState(auth);

  const handleAppointment = (e) => {
    e.preventDefault();
    const slots = e.target.slot.value;

    const phone = e.target.phone.value;

    const appointmentValue = {
      slots,
      name: user?.displayName,
      email: user?.email,
      phone,
      tretmentId: modalData._id,
      date: format(selected, "PP"),
      tretmentName: modalData.name,
    };

    console.log(appointmentValue);

    fetch("https://fast-taiga-21201.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Appinted Completed",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "You do not appointed in this time",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    refetch();
    // if setModalData null the modal is close
    setModalData(null);
  };
  return (
    <div>
      {/* modal */}
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="card-body">
            <h1 className="text-lg font-bold pb-6">Name:{modalData?.name}</h1>
            <form action="" onSubmit={handleAppointment}>
              <div class="form-control mb-2">
                <input
                  name="name"
                  type="text"
                  value={user?.displayName || ""}
                  disabled
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-2">
                <input
                  name="email"
                  type="text"
                  disabled
                  value={user?.email || ""}
                  class="input input-bordered"
                />
              </div>

              <div class="form-control mb-2">
                <input
                  type="text"
                  value={format(selected, "PP")}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-2">
                <select name="slot" class="select input-bordered w-full">
                  <option disabled selected>
                    {modalData.slots[0]}
                  </option>
                  {modalData.slots.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              </div>

              <div class="form-control mb-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <button class="btn btn-accent" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
