import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import ContactUs from "./ContactUs";
import DentalCare from "./DentalCare";
import Footer from "./Footer";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <main>
      <Banner />
      <Contact />
      <OurServices />
      <DentalCare />
      <Appointment />
      <Testimonial />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
