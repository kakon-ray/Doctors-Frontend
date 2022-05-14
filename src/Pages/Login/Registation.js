/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import validator from "validator";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import img from "../../assets/images/chair.png";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";

const Registation = () => {
  const [currentUser] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  if (user) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Registation Success",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div
      className="min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-90">
        <div class="flex justify-center">
          <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-1">
            <h1 className="text-center text-accent font-bold text-3xl mb-0 pt-6">
              Registation
            </h1>
            <div class="card-body  pb-4 pt-5">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                </div>

                <div class="form-control mt-3">
                  <button
                    class="btn bg-accent text-white font-bold"
                    type="submit"
                  >
                    Create Account
                  </button>
                  <p className="text-center pt-4">
                    Allready have a account?{" "}
                    <Link to="/login">
                      <span className="text-primary">Please login</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
