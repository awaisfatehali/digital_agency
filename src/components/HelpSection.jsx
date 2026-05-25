import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { BiSelection } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const HelpSection = () => {
    const HelpData = [
    {
      icon: <TfiWrite className="text-4xl text-blue-900" />,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      icon: <BiSelection className="text-4xl text-blue-900" />,
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      icon: <FaRegPaperPlane className="text-4xl text-blue-900" />,
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-blue-900" />,
      title: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      icon: <FaRegCreditCard className="text-4xl text-blue-900" />,
      title: "E-commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
    {
      icon: <CgProfile className="text-4xl text-blue-900" />,
      title: "Help and Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.",
    },
  ];
  return (
     <section className="bg-gray-200 md:px-32 py-32 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-lg md:text-4xl font-bold text-gray-800">
            How Can We Help You?
          </h1>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse et justo. <br />
            Praesent mattis commodo augue.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-10 ">
          {HelpData.map((item, index) => {
            return (
              <div className="p-10 bg-gray-50  w-[350px]">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default HelpSection