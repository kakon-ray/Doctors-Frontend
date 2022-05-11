/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "./Modal";

const AppointmentTimeCard = ({ service, setModalData }) => {
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body  items-center place-content-stretch text-center">
          <div>
            <h2 class="text-2xl text-secondary font-bold">{service.name}</h2>
            <p className="text-sm">{service.slots[0]}</p>

            <p>{service.slots.length + "slots abable"}</p>

            {service.slots.length === 0 ? (
              <p className="text-red-600">No slots found</p>
            ) : (
              ""
            )}
          </div>

          <div class="card-actions">
            <label
              disabled={service.slots.length === 0}
              for="appointment-modal"
              onClick={() => setModalData(service)}
              className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTimeCard;
