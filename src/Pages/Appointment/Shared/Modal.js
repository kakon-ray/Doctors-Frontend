import { format } from "date-fns";
import React from "react";

const Modal = ({ modalData, selected }) => {
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
            <div class="form-control">
              <input
                type="text"
                placeholder={format(selected, "PP")}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder={modalData.slots[0]}
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
  );
};

export default Modal;
