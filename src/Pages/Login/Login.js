/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import img from "../../assets/images/chair.png";

const Login = () => {

  const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

const handleLogin = (e) => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value

console.log(email,password)

signInWithEmailAndPassword(email,password)

e.target.reset()

}

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
    <div className="min-h-screen bg-base-200" style={{
        backgroundImage: `url(${img})`,
      }}>
     <div className="min-h-screen bg-black bg-opacity-90">
        <div class="flex justify-center pt-8  ">
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center text-accent font-bold text-3xl mb-0 pt-6 ">
            Login
          </h1>
          <div class="card-body pt-0 pb-4">
            <form action="" onSubmit={handleLogin}>
                        <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Login;
