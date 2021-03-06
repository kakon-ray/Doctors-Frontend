import React from "react";

const TestmonialCard = ({ img, desc, name, address }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl py-6">
        <div className="card-body">
          <p className="px-6">{desc}</p>
        </div>

        <div className="flex justify-center gap-6">
          <img src={img} alt="Shoes" className="w-16 h-16" />
          <div>
            <h1 className="font-bold">{name}</h1>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard;
