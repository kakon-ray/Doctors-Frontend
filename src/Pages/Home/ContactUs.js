/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "../../assets/images/chair.png";

const ContactUs = () => {
  return (
    <section>
      <div className="relative">
        <div className="mt-10 mb-16">
          <div className="w-100">
            <img
              src={img}
              alt=""
              style={{ width: "100%", height: "600px" }}
              className="w-100"
            />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
            <div class="hero-content flex-col lg:flex-row-reverse left-0 absolute top-0 left-0 right-0 bottom-0">
              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="text-center pt-4">
                  <h4 className="text-xl font-bold text-secondary uppercase py-2">
                    Contact
                  </h4>
                  <p className="text-3xl">Stay connected with us</p>
                </div>
                <div class="card-body">
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
                  <div class="form-control ">
                    <button class="btn mt-4 btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
