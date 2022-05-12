/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div class="flex justify-center my-6">
        <div class="card flex-shrink-0 w-full max-w-lg mt-12 shadow-2xl bg-base-100">
          <h1 className="text-center text-accent font-bold text-3xl mb-0 pt-6 ">
            Login
          </h1>
          <div class="card-body pt-0 pb-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-3">
              <button class="btn bg-accent text-white font-bold">Login</button>
              <p className="text-center pt-4">
                New to Doctors Portal?{" "}
                <Link to="/registaion">
                  <span className="text-primary">Create new account</span>
                </Link>
              </p>
            </div>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
