import { useState } from "react";
import patientsData from "@/data/doctor_patients";
import { LuSearch } from "react-icons/lu";
import { TbArrowsSort } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import DoctorPatientDetails from "./DoctorPatientDetails";

const DoctorPatient = () => {
    const [selectedPatient, setSelectedPatient] = useState(patientsData[0]);

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
    };

    return (
        <div className="w-full h-screen lg:px-8 py-3">
            <h1 className="text-lg text-gray-800 font-bold px-2">Hi, Doctor</h1>
            <div className="flex justify-between items-center p-2">
                <h1 className="text-gray-800 font-bold text-2xl">Patients</h1>
                <button className="text-sm font-medium bg-green-900 text-white px-4 py-2 rounded-full">
                    + <span>Add New Patient</span>
                </button>
            </div>

            <div className="flex flex-col gap-2 p-2 rounded-xl bg-white">
                {/* Search bar */}
                <div className="flex items-center gap-2 p-1 rounded-full">
                    <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm bg-gray-200 flex-1">
                        <LuSearch className="text-gray-800 text-xl" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="flex-1 outline-none px-2 text-gray-800 placeholder-gray-600 bg-transparent"
                        />
                    </div>
                    {/* Filter button */}
                    <button className="flex gap-1 px-2 py-2 justify-center items-center rounded-full bg-gray-500 text-white font-medium hover:bg-gray-600">
                        <IoFilterSharp />
                        <span>Filter</span>
                    </button>

                    {/* Sort button */}
                    <button className="flex gap-1 px-2 py-2 justify-center items-center rounded-full bg-gray-500 text-white font-medium hover:bg-gray-600">
                        <TbArrowsSort />
                        <span>Sort by</span>
                    </button>
                </div>

                {/* Patient data component */}
                <div className="flex justify-between">
                    {/* Patient List */}
                    <div className="flex flex-col overflow-y-scroll gap-2 px-2 py-3 lg:w-[40%] h-[70vh] bg-white rounded-lg scrollbar-hide fancy-scrollbar">
                        {patientsData.map((patient) => (
                            <div
                                key={patient.id}
                                className="flex justify-between items-center rounded-full border border-gray-400 p-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => handlePatientClick(patient)}
                            >
                                <div className="flex justify-between items-center gap-3">
                                    <img
                                        src={patient.pic}
                                        alt={patient.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col items-start">
                                        <h2 className="font-bold">
                                            {patient.name.length > 6
                                                ? `${patient.name.slice(0, 6)}..`
                                                : patient.name}
                                        </h2>
                                        <h2 className="font-medium text-gray-600 text-xs">
                                            {patient.disease.length > 10
                                                ? `${patient.disease.slice(0, 10)}..`
                                                : patient.disease}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex gap-1 rounded-full justify-between items-center px-3 py-1 bg-text-dark max-w-max">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    <p className="text-sm min-w-[70px] text-center">
                                        {patient.form}
                                    </p>
                                </div>

                                <p className="text-gray-600">{patient.date}</p>

                                <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
                                    <IoIosArrowForward className="text-xl text-gray-700 font-bold" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Patient Details */}
                    <div className="hidden lg:block">
                        <DoctorPatientDetails patient={selectedPatient} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPatient;
