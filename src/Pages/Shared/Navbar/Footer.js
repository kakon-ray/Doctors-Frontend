/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <section>
      <div className="mt-28 mb-16">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <footer className="footer p-10 justify-items-center  text-neutral-content text-center">
            <div className="text-center">
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="text-center">
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className="text-center">
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </footer>
        </div>
      </div>
      <p className="text-center pb-4">Copyright 2022 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
