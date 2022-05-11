import React from "react";
import img from "../../assets/images/chair.png";
import doctor from "../../assets/images/doctor-small.png";
const Appointment = () => {
  return (
    <section className="mt-28 mb-16">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="bg-black bg-opacity-70">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-28 mx-6">
            <div className="relative">
              <div className="absolute bottom-0 ">
                <img
                  src={doctor}
                  className="object-contain lg:max-w-lg max-h-auto sm:hidden lg:block"
                  alt=""
                />
              </div>
            </div>
            <div className="py-12 text-white">
              <h3 className="text-2xl font-bold text-secondary uppercase">
                Appointment
              </h3>
              <h1 className="py-3 text-4xl font-bold">
                Make an appointment Today
              </h1>
              <p className="py-b">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="btn mt-6 btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
