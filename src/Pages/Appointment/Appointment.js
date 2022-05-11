import React from "react";
import Footer from "../Shared/Navbar/Footer";
import AppointmentBanner from "./AppointmentBanner";
import "./Appointment.css";
import AppointmentTime from "./AppointmentTime";

const Appointment = () => {
  return (
    <div>
      <AppointmentBanner />
      <AppointmentTime />
      <Footer />
    </div>
  );
};

export default Appointment;
