import { BsPeople } from "react-icons/bs";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaBriefcase, FaCarSide, FaNotesMedical, FaPerson, FaPills } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";

export const menuItems = [
  {
    key: "home",
    label: "Home",
    icon: <FaHome size={20} className="text-text-light" />,
  },
  {
    key: "appointments",
    label: "Appointments",
    icon: <FaCalendarAlt size={20} className="text-text-light" />,
  },
  {
    key: "pharmacy",
    label: "Pharmacy",
    icon: <FaPills size={20} className="text-text-light" />,
  },
  {
    key: "patients",
    label: "Patients",
    icon: <FaPerson size={20} className="text-text-light" />,
  },
  {
    key: "blogs",
    label: "Blogs",
    icon: <FaNotesMedical size={20} className="text-text-light" />,
  },
];


export const dashboardInfoData = [
  {
    color: "bg-red-400",
    icon: BsPeople,
    label: "Total Patient",
    value: "2.0040",
  },
  {
    color: "bg-orange-500",
    icon: GoGraph,
    label: "Avg. Cost",
    value: "2.600",
  },
  {
    color: "bg-yellow-500",
    icon: IoPersonSharp,
    label: "Staff Member",
    value: "150",
  },
  {
    color: "bg-blue-500",
    icon: FaBriefcase,
    label: "Total Appointments",
    value: "255",
  },
  {
    color: "bg-green-500",
    icon: FaCarSide,
    label: "Total Vehicles",
    value: "50",
  },
];