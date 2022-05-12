/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import validator from "validator";

const Registation = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPsswordError] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleRegistaion = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    const isOk = mediumRegex.test(password);

    if (!validator.isEmail(email)) {
      setEmailError("Please Enter Valid Email Address");
      return;
    } else {
      setEmailError("");
    }

    if (password !== confirmPassword) {
      setPsswordError("Two password does not match");
      return;
    } else {
      setPsswordError("");
    }

    if (!isOk) {
      setPsswordError("Password must a-z,0-9 and 6 char longer");
      return;
    } else {
      setPsswordError(false);
    }

    console.log(email, password, confirmPassword);
  };

  return (
    <div className="min-h-screen bg-base-200 ">
      <div class="flex justify-center">
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-2">
          <h1 className="text-center text-accent font-bold text-3xl mb-0 pt-6">
            Registation
          </h1>
          <div class="card-body  pb-4 pt-5">
            <form action="" onSubmit={handleRegistaion}>
              <div class="form-control">
                <label class="label">
                  {!emailError ? (
                    <span class="label-text">Email</span>
                  ) : (
                    <span className="text-red-600">{emailError}</span>
                  )}
                </label>
                <input
                  type="text"
                  ref={emailRef}
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                {passwordError}
                <label class="label">
                  {!passwordError ? (
                    <span class="label-text">Password</span>
                  ) : (
                    <span className="text-red text-sm">{passwordError}</span>
                  )}
                </label>
                <input
                  type="text"
                  ref={passwordRef}
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  ref={confirmPasswordRef}
                  placeholder="Confirm Password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-3">
                <button
                  class="btn bg-accent text-white font-bold"
                  type="submit"
                >
                  Registation
                </button>
                <p className="text-center pt-4">
                  Allready have a account{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-primary">Please Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Registation;
