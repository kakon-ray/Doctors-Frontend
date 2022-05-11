import React from "react";
import AppointmentTimeCard from "./Shared/AppointmentTimeCard";

const AppointmentTime = () => {
  return (
    <div>
      <div className="mx-12">
        <h1 className="text-center text-primary font-bold text-lg pb-12">
          Available Appointments on April 30, 2022
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
          <AppointmentTimeCard
            title="Teeth Orthodontics"
            space="8:00 AM - 9:00 AM"
            space2="10 SPACES AVAILABLE"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentTime;
