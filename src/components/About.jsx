import { useState } from "react";
import Navbar from "./Navbar";
import hero1 from "../assets/hero1.jpg";
import { FaCaretRight } from "react-icons/fa";
import hero2 from "../assets/hero2.jpg";
import Footer from "./Footer";
import QuestionComponent from "./QuestionComponent.jsx";

function About() {
  const data = [
    "Best Quality Designs",
    "24x7 Live Support",
    "Result Oriented Projects",
    "Award Winning Support Team",
    "Best ROI Techniques",
    "Experienced Professionals",
  ];
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ProcessCard = () => {
    return ProcessDetail.map((item) => (
      <div
        key={item.id}
        className="w-full sm:w-[45%] lg:w-[28%] m-4 p-8 flex flex-col gap-6 rounded-lg"
      >
        <h1 className="text-gray-300 font-black text-9xl">0{item.id}.</h1>
        <h1 className="text-blue-950 font-black text-2xl relative -top-16">
          {item.title}
        </h1>

        <p className="text-black text-lg leading-relaxed">{item.description}</p>
      </div>
    ));
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col items-center justify-center gap-6 px-6 py-40">
            <h1 className="text-white text-5xl md:text-7xl font-black">
              About
            </h1>

            <h3 className="text-white text-xl md:text-2xl font-bold">
              Welcome to the Digital Agency
            </h3>

            <p className="text-white text-center text-base md:text-lg max-w-3xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue.
              <br />
              Aliquam ornare hendrerit augue.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CARDS */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {/* CARD 1 */}
          <div className="bg-white min-h-[420px] w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
            <div className="bg-blue-900 h-2 w-9"></div>

            <h1 className="text-blue-950 font-black text-4xl">Who Are We</h1>

            <p className="text-black text-lg leading-relaxed">
              Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam
              erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam
              quis vulputate orci, ac accumsan quam. Morbi fringilla congue
              libero.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white min-h-[420px] w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
            <div className="bg-blue-900 h-2 w-9"></div>

            <h1 className="text-blue-950 font-black text-4xl">Our Mission</h1>

            <p className="text-black text-lg leading-relaxed">
              Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam
              erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam
              quis vulputate orci, ac accumsan quam. Morbi fringilla congue
              libero.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white min-h-[420px] w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
            <div className="bg-blue-900 h-2 w-9"></div>

            <h1 className="text-blue-950 font-black text-4xl">What We Do</h1>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-blue-950">
                  <FaCaretRight />
                </span>
                UI UX Design
              </li>

              <li className="flex items-center gap-3 text-lg">
                <span className="text-blue-950">
                  <FaCaretRight />
                </span>
                Website Development
              </li>

              <li className="flex items-center gap-3 text-lg">
                <span className="text-blue-950">
                  <FaCaretRight />
                </span>
                Marketing
              </li>

              <li className="flex items-center gap-3 text-lg">
                <span className="text-blue-950">
                  <FaCaretRight />
                </span>
                Social Media
              </li>

              <li className="flex items-center gap-3 text-lg">
                <span className="text-blue-950">
                  <FaCaretRight />
                </span>
                eCommerce Store
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gray-200 w-full py-24 px-6 mt-24">
        <h1 className="text-4xl md:text-6xl font-black text-center text-blue-950 mb-16">
          Our 6-D Process
        </h1>

        <div className="flex flex-wrap justify-center">
          <ProcessCard />
        </div>
      </section>
      {/* <section className="flex flex-col md:flex-row w-0-full md:w-[80%] mx-auto items-center  pt-24 bg-gray-200 md:bg-white">
    <div className="md:w-1/2
     "><img src={hero2} alt="hero2" className="w-full h-auto be-cover " /></div>
    <div className="md:w-1/2 bg-gray-200">Why Chose Us!?</div>
      </section> */}
      <section className="w-full bg-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={hero2}
              alt="Why Choose Us"
              className="w-full h-[420px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>

            {/* Accordion */}
            <div className="bg-white shadow-sm">
              {data.map((item, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-200"
                  >
                    <span className="text-gray-800 font-medium">{item}</span>

                    <span className="text-xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-4 text-gray-500 text-sm">
                      Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis
                      Magna. Sed Consequat, Leo Eget Bibendum, Sodales, Augue
                      Velit Cursus Nunc, Quis Gravida Magna Mi A Libero.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-evenly md:items-center w-full py-16 px-10 md:px-44 bg-gray-300">
        <div className="flex flex-col justify-center items-start ">
          <h2 className="text-black font-bold text-2xl">Some Numbers</h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consec tetur adipis.
          </p>
        </div>
        <h1 className="text-sm font-bold text-blue-950">
          <span className="text-4xl">87</span>
        </h1>
        <h3 className="text-sm font-bold">Satisfied Clients</h3>
        <h1 className="text-xl font-bold text-blue-950">
          <span className="text-4xl">150</span>
        </h1>
        <h3 className="text-sm font-bold">Project Completed</h3>{" "}
        <h1 className="text-xl font-bold text-blue-950">
          <span className="text-4xl">28</span>
        </h1>
        <h3 className="text-sm font-bold">Accolades Earned</h3>
        <h1 className="text-xl font-bold text-blue-950">
          <span className="text-4xl">150</span>
        </h1>
        <h3 className="text-sm font-bold">Project Completed</h3>
        <h1 className="text-xl font-bold text-blue-950">
          <span className="text-4xl">56K+</span>
        </h1>
        <h3 className="text-sm font-bold">Lines of Code</h3>
      </section>
      <QuestionComponent />
      <Footer />
    </>
  );
}

export default About;
