import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";
import UserRow from "./UserRow";

const queryClient = new QueryClient();
const ManageDoctor = () => {
  const {
    isLoading,
    error,
    data: allDoctor,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctor`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(allDoctor);

  return (
    <div>
      <div class="overflow-x-scroll">
        <table class="table w-full">
          <thead>
            <tr className="text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Manage User</th>
            </tr>
          </thead>
          <tbody>
            {allDoctor?.map((doctor) => {
              return (
                <DoctorRow doctor={doctor} key={doctor._id} refetch={refetch} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
