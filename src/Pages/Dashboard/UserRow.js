import React from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Make Admin",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <tr key={user._id} className="text-center">
      <td>{user.email}</td>
      <td>
        {!user.roll && (
          <button
            class="btn bg-accent text-white btn-xs mx-2"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
        <button class="btn bg-accent text-white btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
