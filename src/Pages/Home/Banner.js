import React from "react";
import img from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero min-h-screen bg-white bg-opacity-90">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-12">
          <img
            src={img}
            className="rounded-lg shadow-2xl object-contain lg:max-w-lg max-h-auto"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
