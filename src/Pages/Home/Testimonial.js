import React from "react";
import img from "../../assets/images/people1.png";
import TestmonialCard from "./Shared/TestmonialCard";

const Testimonial = () => {
  return (
    <div>
      <div className="mb-12 mx-6">
        <div className="text-center py-6 pt-10">
          <p className="text-sm font-bold text-secondary">Testimonial</p>
          <h1 className="text-2xl">What Our Patients Says</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-12">
          <TestmonialCard
            img={img}
            name="Winson Herry"
            address="California"
            desc="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          />
          <TestmonialCard
            img={img}
            name="Winson Herry"
            address="California"
            desc="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          />
          <TestmonialCard
            img={img}
            name="Winson Herry"
            address="California"
            desc="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
