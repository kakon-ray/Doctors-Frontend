import React from "react";
import img from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse container mx-auto px-12">
          <img
            src={img}
            class="rounded-lg shadow-2xl object-contain lg:max-w-lg max-h-auto"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
