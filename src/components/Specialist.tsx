import React from "react";
import specialistArr, { exploreButtonPath } from "../data/speciality_section";
import { IoIosArrowForward } from "react-icons/io";

const Specialist: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-auto flex-col gap-12 py-6 px-8">
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-4xl font-bold">We cover 20+ Specialities</h1>
                <p className="text-lg opacity-50">Explore by speciality or concern</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
                {specialistArr.map((speciality) => (
                    <div
                        className="flex justify-between items-center min-w-[340px] sm:min-w-[480px] lg:min-w-[560px] p-4 border px-8 rounded-full bg-text-light hover:bg-blue-100 text-white text-xl font-semibold hover:text-heading-light-normal_heading cursor-pointer"
                        key={speciality.id}
                    >
                        <div className="flex justify-center items-center gap-6">
                            <div className="rounded-full flex justify-center items-center w-16">
                                <img src={speciality.icon} alt={speciality.name} />
                            </div>
                            <h1>{speciality.name}</h1>
                        </div>
                        <div>
                            <IoIosArrowForward className="text-xl" />
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg lg:text-xl xl:text-xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 lg:px-6 lg:py-3 xl:px-6 xl:py-3 overflow-hidden border-2 rounded-full group -mt-4"
            >
                Explore
                <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d={exploreButtonPath}
                        className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default Specialist;