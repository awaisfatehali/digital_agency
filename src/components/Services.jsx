import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hero1 from "../assets/hero1.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import testimonial from "../assets/testimonial.jpg";
import QuestionComponent from "./QuestionComponent";
import HelpSection from "./HelpSection";
import PartnerSection from "./PartnerSection";

const services = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center w-full h-[70%]"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="text-center py-20 md:px-[450px] gap-6 flex flex-col items-center">
            <h1 className="text-white text-5xl font-black">Services</h1>
            <h3 className="text-white font-bold">
              We provide a wide range of Services
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue. Aliquam
              ornare hendrerit augue.
            </p>
          </div>
        </div>
      </section>

      {/* Help and Support Section */}
      <HelpSection />

      {/* Portfolio Section */}

      {/* Partner Section */}
      <PartnerSection />

      {/* Review Section */}
      <section className="flex flex-col pt-10 justify-center items-center bg-gray-200 md:px-44 py-32 gap-6">
        <h1 className="text-lg md:text-2xl font-bold">
          "Amazing Designs and Quality Work!"
        </h1>
        <p className=" px-10 text-center md:px-64">
          Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,
          tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
          Morbi fringilla congue libero, ac malesuada vulputate pharetra.
        </p>
        <div className="flex flex-col items-center">
          <img
            src={testimonial}
            alt="testimonial"
            className="w-[50px] rounded-full"
          />
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-gray-600">CEO, Company Inc.</p>
        </div>
      </section>
      <QuestionComponent />
      <Footer />
    </>
  );
};

export default services;
