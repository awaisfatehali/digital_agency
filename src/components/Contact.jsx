import React from "react";
import hero1 from "../assets/hero1.jpg";
import Navbar from "./Navbar.jsx";
import QuestionComponent from "./QuestionComponent.jsx";
import Footer from "./Footer.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
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
            <h1 className="text-white text-5xl font-black">Contact Us</h1>
            <h3 className="text-white font-bold">
              Contact for Premium Business Services
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue. Aliquam
              ornare hendrerit augue.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-start gap-10 bg-gray-300 px-6 lg:px-16 py-24">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-8">Request Free Consultation</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Form */}
            <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="border px-4 py-3 rounded-md outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-3 rounded-md outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="border px-4 py-3 rounded-md outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 transition w-1/2 text-white font-semibold py-3 rounded-md"
              >
                Submit
              </button>
            </form>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 min-h-[350px] flex justify-center items-center">
              <h1 className="text-xl font-medium text-gray-600">
                Maps API k paise ni he
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6  ">
          <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
          <div className="bg-white p-8 rounded-lg shadow-md h-[380px] lg:w-[350px]">
            <h1 className="text-lg font-bold mb-6">Reach Us</h1>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-blue-500" />
              <span className="font-semibold"></span> 123 Main St, City, State
              12345
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-blue-500" />
              <span className="font-semibold"></span> info@example.com
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneVolume className="text-blue-500" />
              <span className="font-semibold"></span> (123) 456-7890
            </div>
            <div className="flex items-center gap-2">
              <FaMobile className="text-blue-500" />
              <span className="font-semibold"></span> (123) 456-7890
            </div>

            <h1 className="text-lg font-bold my-7">Call Us Toll Free</h1>
            <h1 className="text-3xl font-black text-blue-900">1-800-123-4567</h1>
          </div>
        </div>
      </section>
      <QuestionComponent />
      <Footer />
    </>
  );
};

export default Contact;
