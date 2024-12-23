import React from "react";
import { best_doctor } from "../data/best_doctors";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const BestDoctors: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen p-4 w-full bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-primary mb-4">
          India&apos;s Finest Doctors
        </h1>
        <p className="text-sm text-text-light max-w-2xl">
          At UNCOVER, we bring you India&apos;s finest Doctors hailing from some
          of the top institutions like AIIMS, Manipal, Max, etc., so you know
          you are always in the safest hands.
        </p>
      </div>
      {/* Image scroll */}
      <div className="flex items-center justify-evenly w-full p-4">
        {best_doctor.map((curr, i) => (
          <div className="flex flex-col items-center justify-center gap-10">
            <img
              src={curr.image}
              alt={curr.name}
              className="w-[20rem] rounded-[5rem] "
            />
            <div className="flex flex-col justify-center items-left w-[20rem]">
              <h1 className="text-lg font-semibold text-text-light">
                {curr.name}
              </h1>
              <p className="text-heading-light-section_heading">{curr.bio}</p>
              <h1 className="text-gray-500">Experience: {curr.experience}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll button */}
      <div className="flex items-center justify-center gap-10">
        <button className="button">
          <span>
            {" "}
            <FaLongArrowAltLeft />
          </span>
        </button>
        <button className="button">
          <span>
            {" "}
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BestDoctors;
