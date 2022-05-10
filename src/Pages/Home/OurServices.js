import React from "react";
import OurServicesCard from "./Shared/OurServicesCard";
import img1 from "../../assets/images/cavity.png";
import img2 from "../../assets/images/fluoride.png";
import img3 from "../../assets/images/whitening.png";

const OurServices = () => {
  return (
    <section className="my-12 mx-6">
      <div className="text-center py-6 pt-10">
        <p className="text-xl font-bold text-secondary">OUR SERVICES</p>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-12">
        <OurServicesCard
          img={img1}
          title="Fluoride Treatment"
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <OurServicesCard
          img={img2}
          title="Cavity Filling"
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <OurServicesCard
          img={img3}
          title="Teeth Whitening"
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
      </div>
    </section>
  );
};

export default OurServices;
