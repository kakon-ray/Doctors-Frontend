import React from "react";
import Swal from "sweetalert2";

const DoctorRow = ({ doctor, refetch }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to Delete This Doctor?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Close",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fast-taiga-21201.herokuapp.com/doctor/${doctor.email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Doctor Delete successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <tr key={doctor._id} className="text-center">
      <td>
        <img src={doctor.img} style={{ width: "50px" }} alt="" />
      </td>
      <td>{doctor.name}</td>
      <td>{doctor.email}</td>
      <td>{doctor.specialty}</td>

      <td>
        <button class="btn bg-accent text-white btn-xs" onClick={handleDelete}>
          Remove Doctor
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
