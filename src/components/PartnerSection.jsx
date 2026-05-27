import React from "react";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.jpg";

const PartnerSection = () => {
  return (
    <section className="bg-white py-10 md:pb-32 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-lg md:text-4xl font-bold text-gray-800">
          Our Customers
        </h1>
        <h3 className="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          <br />
          Suspendisse et justo. Praesent mattis commodo augue.
        </h3>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between md:justify-between gap-10 ">
        <img src={partner1} alt="partner1" className="w-[300px]" />
        <img src={partner2} alt="partner2" className="w-[300px]" />
        <img src={partner3} alt="partner3" className="w-[300px]" />
        <img src={partner4} alt="partner4" className="w-[300px]" />
      </div>
    </section>
  );
};

export default PartnerSection;
