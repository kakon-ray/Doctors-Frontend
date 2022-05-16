import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const queryClient = new QueryClient();

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: alluser,
    refetch,
  } = useQuery("allusers", () =>
    fetch(`http://localhost:5000/allusers`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div class="overflow-x-scroll">
      <table class="table w-full">
        <thead>
          <tr className="text-center">
            <th>Email</th>
            <th>Manage User</th>
          </tr>
        </thead>
        <tbody>
          {alluser?.map((user) => {
            return <UserRow user={user} refetch={refetch} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
