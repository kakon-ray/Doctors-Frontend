import React from "react";
import ContactCard from "./Shared/ContactCard";
import icon1 from "../../assets/icons/clock.svg";
import icon2 from "../../assets/icons/marker.svg";
import icon3 from "../../assets/icons/phone.svg";

const Contact = () => {
  return (
    <>
      <div class="hero">
        <div className="mx-6 pb-12">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <ContactCard
              title="Opening Hours"
              bgColor="bg-gradient-to-r from-secondary to-primary"
              description="Lorem Ipsum is simply dummy text of the pri"
              icon={icon1}
            />
            <ContactCard
              title="Visit our location"
              bgColor="bg-accent"
              description="Brooklyn, NY 10036, United States"
              icon={icon2}
            />
            <ContactCard
              title="Contact us now"
              description="+000 123 456789"
              bgColor="bg-gradient-to-r from-secondary to-primary"
              icon={icon3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
