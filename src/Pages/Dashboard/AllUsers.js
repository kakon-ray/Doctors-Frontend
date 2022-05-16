import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "../Shared/Loading";

const queryClient = new QueryClient();

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: alluser,
    refetch,
  } = useQuery("allusers", () =>
    fetch(`http://localhost:5000/allusers`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(alluser);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alluser?.map((item) => {
            return (
              <tr key={item._id} className="text-center">
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
