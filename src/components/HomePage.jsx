import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hero1 from "../assets/hero1.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.jpg";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import testimonial from "../assets/testimonial.jpg";

import { LiaPaintBrushSolid } from "react-icons/lia";

import QuestionComponent from "./QuestionComponent";
import HelpSection from "./HelpSection";
import PartnerSection from "./PartnerSection";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <>
      {/* ================= HERO (FULL WIDTH) ================= */}
      <section
        className="relative bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* Navbar (full width) */}
        <Navbar />

        {/* Fixed Customize Button */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-l-[5px] z-50">
          <LiaPaintBrushSolid className="text-lg md:text-4xl text-blue-800" />
          <h1 className="text-lg md:text-2xl font-bold text-gray-800">
            Customize
          </h1>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center gap-6 py-36 px-6 md:px-44">
          <h3 className="text-white text-center md:text-left text-xl md:text-2xl font-bold">
            Fastest And Most Lightweight WP Theme
          </h3>

          <h2 className="text-white text-3xl md:text-6xl font-bold">
            Create Amazing <br />
            Business Websites
          </h2>

          <p className="text-gray-200 text-center md:text-left text-base md:text-sm max-w-3xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
            et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit
            augue.
          </p>

          <button className="bg-blue-800 text-white hover:bg-gray-200 hover:text-blue-800 text-lg px-12 py-3 rounded-md">
            Book A Meeting
          </button>
        </div>
      </section>

      {/* ================= CONTAINED SECTIONS ================= */}
      <Layout className="bg-gray-200">
        {/* Help Section */}
        <HelpSection />

        {/* Portfolio */}
        <section className="bg-white pt-10 md:py-32 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-lg md:text-4xl font-bold text-gray-800">
              Portfolio
            </h1>
            <h3 className="text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <br />
              Suspendisse et justo. Praesent mattis commodo augue.
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <img src={p1} alt="portfolio1" className="w-[295px]" />
            <img src={p2} alt="portfolio2" className="w-[295px]" />
            <img src={p3} alt="portfolio3" className="w-[295px]" />
            <img src={p4} alt="portfolio4" className="w-[295px]" />
          </div>

          <button className="bg-blue-800 text-white rounded-md mt-10 py-2 px-6">
            Explore more
          </button>
        </section>

        {/* Partner Section */}
        <PartnerSection />

        {/* Review Section */}
        <section className="flex flex-col justify-center items-center bg-gray-200 py-32 gap-6">
          <h1 className="text-lg md:text-2xl font-bold">
            "Amazing Designs and Quality Work!"
          </h1>

          <p className="px-10 text-center md:px-64">
            Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,
            tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
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

        {/* Team */}
        <section className="bg-white py-10 md:py-32 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-lg md:text-5xl font-bold text-gray-800">
              Meet Our Leadership
            </h1>
            <h3 className="text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <br />
              Suspendisse et justo. Praesent mattis commodo augue.
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="text-center">
              <img src={team1} alt="team" className="w-[400px]" />
              <h2 className="font-bold mt-5">Joanne Williams</h2>
              <p>Founder</p>
            </div>

            <div className="text-center">
              <img src={team2} alt="team" className="w-[400px]" />
              <h2 className="font-bold mt-5">Fred Buster</h2>
              <p>Director OPS</p>
            </div>

            <div className="text-center">
              <img src={team3} alt="team" className="w-[400px]" />
              <h2 className="font-bold mt-5">Lisa Hoffman</h2>
              <p>Director HR</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <QuestionComponent />
      </Layout>

      {/* ================= FOOTER (FULL WIDTH) ================= */}
      <Footer />
    </>
  );
};

export default HomePage;