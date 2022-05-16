import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointmentTimeCard from "./Shared/AppointmentTimeCard";
import Modal from "./Shared/Modal";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "./../Shared/Loading";

const queryClient = new QueryClient();

const AppointmentTime = ({ selected }) => {
  const [modalData, setModalData] = useState(null);

  console.log(format(selected, "PP"));
  // use React query and fetch data
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["abailable", format(selected, "PP")], () =>
    fetch(
      `http://localhost:5000/abailable?date=${format(selected, "PP")}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="mx-12">
        <h1 className="text-center text-primary font-bold text-2xl pb-12">
          Available Appointments on {format(selected, "PP")}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          {services?.map((item) => {
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
            refetch={refetch}
          ></Modal>
        )}
      </div>
    </div>
  );
};

export default AppointmentTime;
