import React, { useEffect, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { BiSelection } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { server } from "../../server";
import { SERVICE_ICONS } from "./Service_icon";

const HelpSection = () => {
  const [HelpData, setHelpData] = useState([]);
  const HelpData1 = [
    {
      icon: <TfiWrite className="text-4xl text-blue-900" />,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
    {
      icon: <BiSelection className="text-4xl text-blue-900" />,
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
    {
      icon: <FaRegPaperPlane className="text-4xl text-blue-900" />,
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-blue-900" />,
      title: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
    {
      icon: <FaRegCreditCard className="text-4xl text-blue-900" />,
      title: "E-commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
    {
      icon: <CgProfile className="text-4xl text-blue-900" />,
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    },
  ];
  const getallservices = async () => {
    try {
      const response = await axios.get(`${server}/services/all_services`);
      setHelpData(response.data.services);
    } catch (error) {
      setHelpData(HelpData1);
    }
  };
  useEffect(() => {
    getallservices();
  }, []);

  return (
    <section className=" py-24 flex flex-col justify-between items-center gap-10">
      {/* Heading */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          How Can We Help You?
        </h1>

        <h3 className="text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
          et justo. Praesent mattis commodo augue.
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6">
        {HelpData.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-gray-50 w-[350px] h-[350px] rounded-lg shadow-2xl hover:shadow-md transition"
          >
            {(() => {
              const icon =
                SERVICE_ICONS.find((ic) => ic.id === item.iconId) ||
                SERVICE_ICONS.find((ic) => ic.id === "code");
              return (
                <div className="text-blue-900 [&_svg]:w-8 [&_svg]:h-8">
                  {icon.svg("#1e3a8a")}
                </div>
              );
            })()}

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {item.serviceName}
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
