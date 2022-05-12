import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointmentTimeCard from "./Shared/AppointmentTimeCard";
import Modal from "./Shared/Modal";

const AppointmentTime = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mx-12">
        <h1 className="text-center text-primary font-bold text-2xl pb-12">
          Available Appointments on {format(selected, "PP")}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          {services.map((item) => {
            return (
              <AppointmentTimeCard service={item} setModalData={setModalData} />
            );
          })}
        </div>

        {modalData && (
          <Modal
            selected={selected}
            modalData={modalData}
            setModalData={setModalData}
          ></Modal>
        )}
      </div>
    </div>
  );
};

export default AppointmentTime;
