/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "../../assets/images/bg.png";
const Footer = () => {
  return (
    <section>
      <div className="mt-28 mb-16">
        <div
          class="hero"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <footer class="footer p-10 justify-items-center  text-neutral-content text-center">
            <div className="text-center">
              <span class="footer-title">Services</span>
              <a class="link link-hover">Branding</a>
              <a class="link link-hover">Design</a>
              <a class="link link-hover">Marketing</a>
              <a class="link link-hover">Advertisement</a>
            </div>
            <div className="text-center">
              <span class="footer-title">Company</span>
              <a class="link link-hover">About us</a>
              <a class="link link-hover">Contact</a>
              <a class="link link-hover">Jobs</a>
              <a class="link link-hover">Press kit</a>
            </div>
            <div className="text-center">
              <span class="footer-title">Legal</span>
              <a class="link link-hover">Terms of use</a>
              <a class="link link-hover">Privacy policy</a>
              <a class="link link-hover">Cookie policy</a>
            </div>
          </footer>
        </div>
      </div>
      <p className="text-center pb-4">Copyright 2022 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
