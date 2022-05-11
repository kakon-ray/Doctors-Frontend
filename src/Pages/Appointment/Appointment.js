import React from "react";
import Footer from "../Shared/Navbar/Footer";
import AppointmentBanner from "./AppointmentBanner";
import "./Appointment.css";
import AppointmentTime from "./AppointmentTime";

const Appointment = () => {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <div>
      <AppointmentBanner selected={selected} setSelected={setSelected} />
      <AppointmentTime selected={selected} />
      <Footer />
    </div>
  );
};

export default Appointment;
