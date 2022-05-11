/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AppointmentTimeCard = ({ title, space, space2 }) => {
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="text-2xl text-secondary font-bold">{title}</h2>
          <p className="text-sm">{space}</p>
          <p className="text-sm">{space2}</p>
          <div class="card-actions">
            <label
              for="my-modal-3"
              className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold"
            >
              Book Appointment
            </label>
          </div>
        </div>
        {/* modal */}

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div class="card-body">
              <h1 className="text-lg font-bold py-4">Cavity Protection</h1>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <button class="btn btn-accent">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTimeCard;
