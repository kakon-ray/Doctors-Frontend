import { format } from "date-fns";
import React from "react";

const Modal = ({ modalData, selected, setModalData }) => {
  const handleAppointment = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const appointmentValue = { slot, name, email, phone };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentValue),
    }).then((res) => {
      console.log("success", appointmentValue);
      alert("users added successfully!!!");
    });

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
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-2">
                <input
                  name="email"
                  type="text"
                  placeholder="Enter Your Email"
                  class="input input-bordered"
                />
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
