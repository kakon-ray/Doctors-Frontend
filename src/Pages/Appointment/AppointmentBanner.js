import React from "react";
import img from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero min-h-screen bg-white bg-opacity-90">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24 ">
          <img
            src={img}
            className="rounded-lg shadow-2xl object-contain lg:max-w-lg max-h-auto"
            alt=""
          />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
