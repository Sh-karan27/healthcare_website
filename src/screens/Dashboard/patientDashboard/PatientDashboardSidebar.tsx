import React, { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaPills,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSearch, BiBarChartAlt2 } from "react-icons/bi";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gray-100 shadow-md  ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      {/* Header */}
      <div className="mt-20 flex items-center justify-between px-4 py-4 bg-text-light text-white">
        <div className={`flex items-center ${!isOpen && "hidden"}`}>
          <BiBarChartAlt2 size={28} className="mr-2" />
          <span className="text-lg font-bold">e-pulse</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none text-xl"
        >
          {isOpen ? <BsFillArrowLeftSquareFill /> : "☰"}
        </button>
      </div>

      {/* Search Bar */}
      <div
        className={`flex items-center px-4 py-2 bg-gray-200 ${
          !isOpen && "hidden"
        }`}
      >
        <BiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Menu Items */}
      <ul className="flex-grow px-4 space-y-2">
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaHome size={20} className="text-text-light" />
          {isOpen && <span>Home</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaCalendarAlt size={20} className="text-text-light" />
          {isOpen && <span>Appointments</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaUserDoctor size={20} className="text-text-light" />
          {isOpen && <span>Doctors</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaPerson size={20} className="text-text-light" />
          {isOpen && <span>Patients</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaPills size={20} className="text-text-light" />
          {isOpen && <span>Parmacy</span>}
        </li>
        <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
          <FaNotesMedical size={20} className="text-text-light" />
          {isOpen && <span>Blogs</span>}
        </li>
      </ul>

      {/* Footer */}
      <div className="px-4 py-2 border-t">
        <ul className="space-y-2">
          <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
            <FaCogs size={20} className="text-text-light" />
            {isOpen && <span>Settings</span>}
          </li>
          <li className="flex items-center space-x-4 p-2 rounded-md cursor-pointer hover:bg-blue-100">
            <FaSignOutAlt size={20} className="text-text-light" />
            {isOpen && <span>Logout</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
