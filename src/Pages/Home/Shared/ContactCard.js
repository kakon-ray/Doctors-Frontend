import React from "react";

const ContactCard = ({ bgColor, title, description, icon }) => {
  return (
    <div
      className={`hero-content flex-col py-8 lg:flex-row ${bgColor} rounded-lg`}
    >
      <img src={icon} alt="" />
      <div>
        <h1 class="text-xl font-bold text-white">{title}</h1>
        <p class="py-2 text-yellow-50">{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
