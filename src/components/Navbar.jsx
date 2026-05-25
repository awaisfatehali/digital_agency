import React from "react";
import Logo from "../assets/site-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex w-full h-20 items-center py-4 md:px-[160px] text-white relative z-50">
      <div className="w-1/3 flex justify-start items-center">
        <img src={Logo} alt="logo" className="w-48 ml-4" />
      </div>

      <div className="hidden md:flex w-2/3 justify-end items-center gap-6">
        <div className="flex justify-end items-center gap-8 text-white">
          <Link to="/" className="text-lg">
            Home
          </Link>
          <Link to="/about" className="text-lg">
            About
          </Link>
          <Link to="/services" className="text-lg">
            Services
          </Link>
          <Link to="/contact" className="text-lg">
            Contact
          </Link>
        </div>
        <button className="bg-blue-800 hover:bg-gray-200 hover:text-blue-800 text-lg px-6 py-3 rounded-md">
          Request Quote
        </button>
      </div>

      <div className="md:hidden ml-auto mr-4">
        <button onClick={toggleMenu} className="flex flex-col gap-1.5">
          {isMenuOpen ? (
            <span className="text-2xl leading-none">✕</span>
          ) : (
            <>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-blue-950 flex flex-col items-center gap-6 py-4 md:hidden z-50">
          <Link to="/" className="text-lg">
            Home
          </Link>
          <Link to="/about" className="text-lg">
            About
          </Link>
          <Link to="/services" className="text-lg">
            Services
          </Link>
          <Link to="/contact" className="text-lg">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
