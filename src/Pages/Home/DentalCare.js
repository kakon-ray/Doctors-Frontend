import React from "react";
import img from "../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <section className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:mx-28">
        <div className="lg:ml-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
            Get Started
          </button>
        </div>
        <img
          src={img}
          className="rounded-lg shadow-2xl object-contain lg:max-w-sm max-h-auto"
          alt=""
        />
      </div>
    </section>
  );
};

export default DentalCare;
