import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        {/* ---------- Left Section ---------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Our medical appointment booking website allows patients to schedule
            doctor visits quickly and conveniently. Users can browse available
            doctors, view specialties, check consultation times, and book
            appointments online. The system sends instant confirmations and
            reminders, helping patients manage their healthcare more
            efficiently. For clinics and hospitals, the platform streamlines
            scheduling, reduces missed appointments, and improves overall
            patient experience.
          </p>
        </div>
        {/* ---------- Center Section ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------- Right Section ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+84 0987556556</li>
            <li>bookingcare@gmail.com</li>
          </ul>
        </div>
        {/* ---------- Copyright Text ---------- */}
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 20024@ Prescripto - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
