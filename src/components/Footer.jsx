// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {Link} from 'react-router-dom'
import Logo from "../assets/site-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#24285B] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src={Logo} alt="logo" className="w-48" />
          </div>

          <p className="text-lg leading-[42px] text-gray-200 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Social Icons */}
          <div className="flex gap-8 mt-10 text-lg text-gray-200">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaGoogle className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Company</h3>

          <ul className="space-y-4 text-lg text-gray-200">
            <li className="hover:text-white cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Business</h3>

          <ul className="space-y-4 text-lg text-gray-200">
            <li className="hover:text-white cursor-pointer">Project</li>
            <li className="hover:text-white cursor-pointer">Our Team</li>
            <li className="hover:text-white cursor-pointer">Facts</li>
            <li className="hover:text-white cursor-pointer">Customers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

          <ul className="space-y-4 text-lg text-gray-200 leading-10">
            <li>Rt. 66, Downtown, Washington, DC</li>
            <li>info@example.com</li>
            <li>1-800-1234-567</li>
            <li>+001 987-654-3210</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500"></div>

      {/* Bottom */}
      <div className="text-center p-10 text-lg text-gray-200">
        Copyright © 2026 Digital Agency | Powered by Digital Agency
      </div>
    </footer>
  );
};

export default Footer;