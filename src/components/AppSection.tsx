import { FC } from "react";
import { FaCheckCircle, FaCloudDownloadAlt } from "react-icons/fa";
import mobile from "../assets/mobile.png";
import "./AppSection.css";

const AppSection: FC = () => {
    return (
        <div className="w-full flex sm:flex-col flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-between items-center bg-white px-8 md:px-28 lg:px-28 xl:px-28 py-16 mx-auto">
        {/* 1st component */}
        <div className="relative flex justify-center items-center min-w-96 min-h-96 md:min-w-[30rem] md:min-h-[30rem] px-4 py-4">
            {/* background circle */}
            <div className="bg-green-200 h-72 w-72 rounded-full"></div>

            {/* mobile image */}
            <div className="absolute top-0 left-0">
            <img src={mobile} alt="Mobile" />

            {/* notifications */}
            <div className="absolute top-40 sm:top-52 left-12 sm:left-0 md:left-0 lg:left-0 xl:left-0 2xl:left-0 flex w-44 justify-center items-center bg-emerald-500 p-2 rounded-lg gap-2 animate-left-right-left">
                <FaCheckCircle className="text-white text-[32px]" />
                <p className="text-[12px] font-medium text-white leading-relaxed">
                Most distinguished & celebrated doctors
                </p>
            </div>

            <div className="absolute top-16 sm:top-20 right-12 sm:-right-3 md:-right-3 lg:-right-3 xl:-right-3 2xl:-right-3 flex w-48 justify-center items-center bg-red-500 p-2 rounded-lg gap-2 animate-left-right-right">
                <FaCheckCircle className="text-white text-[36px]" />
                <p className="text-[12px] font-medium text-white leading-relaxed">
                Get 100% cashback on every appointment booking
                </p>
            </div>

            <div className="absolute bottom-16 sm:bottom-20 right-20 sm:right-5 md:right-5 lg:right-5 xl:right-5 2xl:right-5 flex w-40 justify-center items-center bg-orange-500 p-2 rounded-lg gap-2 animate-left-right-right">
                <FaCheckCircle className="text-white text-[26px]" />
                <p className="text-[12px] font-medium text-white leading-relaxed">
                Your health at your fingertips
                </p>
            </div>
            </div>
        </div>

        {/* 2nd component */}
        <div className="w-full xl:w-[45%] px-2 xl:px-8 2xl:px-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 font-semibold text-center xl:text-start">
                Experience one stop care by Meddo Health App
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium text-heading-light-normal_heading text-center xl:text-start">
                Best Doctor appointment app
            </h2>
            </div>

            <div className="flex flex-col gap-3 pl-1">
            <div className="flex flex-col gap-1 items-center xl:items-stretch text-center xl:text-start">
                <p className="text-gray-700 text-xl font-medium text-center xl:text-start">Health Records</p>
                <div className="w-24 h-1 bg-heading-light-normal_heading"></div>
                <p className="text-gray-500 text-[16px]">
                Your Family health bank, anytime access
                </p>
            </div>
            <div className="flex flex-col gap-1 items-center xl:items-stretch text-center xl:text-start">
                <p className="text-gray-700 text-xl font-medium">
                Appointment Records
                </p>
                <div className="w-24 h-1 bg-heading-light-normal_heading"></div>
                <p className="text-gray-500 text-[16px]">
                From the best at your convenience
                </p>
            </div>
            <div className="flex flex-col gap-1 items-center xl:items-stretch text-center xl:text-start">
                <p className="text-gray-700 text-xl font-medium">
                Medicine Reminders
                </p>
                <div className="w-24 h-1 bg-heading-light-normal_heading"></div>
                <p className="text-gray-500 text-[16px]">
                For the best Doctor-Patient interactions
                </p>
            </div>
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden max-w-md justify-center mx-auto xl:mx-0">
            <input
                type="tel"
                placeholder="Enter mobile number"
                className="flex-1 px-1 py-2 sm:px-4 sm:py-2 outline-none text-gray-700 font-medium"
            />
            <button className="bg-gray-500 text-white px-1 py-2 sm:px-4 sm:py-2 hover:bg-gray-600 focus:outline-none">
                Get SMS
            </button>
            </div>

            <div className="flex justify-center items-center py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full gap-4 text-lg sm:text-xl cursor-pointer mx-auto xl:mx-0">
            <button>Download App Now</button>
            <FaCloudDownloadAlt className="text-xl font-bold" />
            </div>
        </div>
        </div>
    );
};

export default AppSection;
