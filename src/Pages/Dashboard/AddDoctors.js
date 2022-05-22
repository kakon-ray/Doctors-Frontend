import React from "react";
import { useForm } from "react-hook-form";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../Shared/Loading";

const queryClient = new QueryClient();
const imageStoregeKey = "e944521e2747c552bc19a4c67af741d6";

const AddDoctors = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // use React query and fetch data
  const { isLoading, error, data, refetch } = useQuery(["services"], () =>
    fetch(`https://fast-taiga-21201.herokuapp.com/services`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    console.log(data);
    // upload image
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoregeKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          fetch("https://fast-taiga-21201.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((doctoradd) => {
              if (doctoradd.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Doctor add successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              } else {
                Swal.fire({
                  position: "top-center",
                  icon: "error",
                  title: "Faild to add the doctor",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  /**
   * 3 ways to store images
   * 1. Third party storage //Free open public storage is ok for Practice project
   * 2. Your own storage in your own server (file system)
   * 3. Database: Mongodb
   *
   * YUP: to validate file: Search: Yup file validation for react hook form
   */

  return (
    <div>
      <div className="mx-32 p-24 pt-12 card bg-base-100 shadow-xl">
        <h1 className="text-center text-4xl pb-6">Add Doctors</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label class="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>

          <div class="form-control">
            <label class="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
          </div>

          <div class="form-control">
            <label class="label"></label>
            <select
              {...register("specialty")}
              class="select w-full input-bordered"
            >
              {data.map((item) => {
                return (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div class="form-control">
            <label class="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
              {errors.image?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
            <input
              type="file"
              class="input input-bordered"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is Required",
                },
              })}
            />
          </div>

          <div class="form-control mt-3">
            <button class="btn bg-accent text-white font-bold" type="submit">
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
