import { useState } from "react";
import Navbar from "./Navbar";
import hero1 from "../assets/hero1.jpg";
import { FaCaretRight } from "react-icons/fa";
import hero2 from "../assets/hero2.jpg";
import Footer from "./Footer";
import QuestionComponent from "./QuestionComponent.jsx";
import Layout from "./Layout";

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
      {/* ================= HERO (FULL WIDTH) ================= */}
      <section
        className="relative bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="relative z-10">
          <Navbar />
          <Layout>
            <div className="flex flex-col items-center justify-center gap-6 py-40">
              <h1 className="text-white text-5xl md:text-7xl font-black">
                About
              </h1>

              <h3 className="text-white text-xl md:text-2xl font-bold">
                Welcome to the Digital Agency
              </h3>

              <p className="text-white text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Suspendisse et justo. Praesent mattis commodo augue.
              </p>
            </div>
          </Layout>
        </div>
      </section>

      {/* ================= ABOUT CARDS ================= */}
      <section className="relative z-20 -mt-24">
        <Layout>
          <div className="flex flex-wrap justify-center gap-8">
            {/* CARD 1 */}
            <div className="bg-white w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
              <div className="bg-blue-900 h-2 w-10"></div>
              <h1 className="text-3xl font-black text-blue-950">Who Are We</h1>
              <p className="text-gray-700">
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Etiam
                erat lectus, finibus eget commodo quis.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
              <div className="bg-blue-900 h-2 w-10"></div>
              <h1 className="text-3xl font-black text-blue-950">Our Mission</h1>
              <p className="text-gray-700">
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Etiam
                erat lectus, finibus eget commodo quis.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white w-full md:w-[30%] p-8 flex flex-col gap-6 shadow-xl rounded-lg">
              <div className="bg-blue-900 h-2 w-10"></div>
              <h1 className="text-3xl font-black text-blue-950">What We Do</h1>

              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <FaCaretRight className="text-blue-950" />
                  UI UX Design
                </li>
                <li className="flex items-center gap-3">
                  <FaCaretRight className="text-blue-950" />
                  Web Development
                </li>
                <li className="flex items-center gap-3">
                  <FaCaretRight className="text-blue-950" />
                  Marketing
                </li>
                <li className="flex items-center gap-3">
                  <FaCaretRight className="text-blue-950" />
                  Social Media
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="bg-gray-200 py-24 mt-24">
        <Layout>
          <h1 className="text-4xl md:text-6xl font-black text-center text-blue-950 mb-16">
            Our 6-D Process
          </h1>

          <div className="flex flex-wrap justify-center">
            <ProcessCard />
          </div>
        </Layout>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-300 py-16">
        <Layout>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src={hero2}
              alt="Why Choose Us"
              className="w-full lg:w-1/2 h-[420px] object-cover rounded-lg"
            />

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-3">Why Choose Us?</h2>

              <div className="bg-white shadow-sm">
                {data.map((item, index) => (
                  <div key={index} className="border-b last:border-b-0">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between px-5 py-4 text-left"
                    >
                      <span>{item}</span>
                      <span>{openIndex === index ? "−" : "+"}</span>
                    </button>

                    {openIndex === index && (
                      <div className="px-5 pb-4 text-gray-500 text-sm">
                        Sed fringilla mauris sit amet nibh. Donec sodales
                        sagittis magna.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      </section>

      {/* ================= NUMBERS SECTION ================= */}
      <section className="bg-gray-300 py-16">
        <Layout>
          <div className="grid grid-cols-2 md:grid-cols-5 text-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-blue-950">87</h1>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-950">150</h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-950">28</h1>
              <p>Accolades</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-950">56K+</h1>
              <p>Lines of Code</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-950">12+</h1>
              <p>Years Experience</p>
            </div>
          </div>
        </Layout>
      </section>

      {/* ================= FAQ + FOOTER ================= */}
      <Layout>
        <QuestionComponent />
      </Layout>
      <Footer />
    </>
  );
}

export default About;
