import { useState } from "react";
import Navbar from "./components/Navbar";
import hero1 from "./assets/hero1.jpg";
import { FaCaretRight } from "react-icons/fa";
import About from "./components/About";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx"

function App() {
  const [ProcessDetail] = useState([
    {
      id: 1,
      title: "Discover",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      id: 2,
      title: "Define",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      id: 3,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      id: 4,
      title: "Develop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      id: 5,
      title: "Deploy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      id: 6,
      title: "Deliver",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
  ]);

  const ProcessCard = () => {
    return ProcessDetail.map((item) => (
      <div
        key={item.id}
        className="bg-white w-full sm:w-[45%] lg:w-[28%] m-4 p-8 flex flex-col gap-6 shadow-lg rounded-lg"
      >
        <div className="bg-blue-900 h-2 w-9"></div>

        <h1 className="text-blue-950 font-black text-4xl">
          {item.title}
        </h1>

        <p className="text-black text-lg leading-relaxed">
          {item.description}
        </p>
      </div>
    ));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;