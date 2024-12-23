import gen from "../assets/Health-Icons/doctor_female.svg";
import gyn from "../assets/Health-Icons/female_reproductive_system.svg";
import der from "../assets/Health-Icons/coughing_alt.svg";
import med from "../assets/Health-Icons/medicines.svg";
import ped from "../assets/Health-Icons/baby_0203m.svg";
import ort from "../assets/Health-Icons/joints.svg";
import ent from "../assets/Health-Icons/nurse (1).svg";
import car from "../assets/Health-Icons/heart_organ.svg";

export interface SpecialistItem {
    id: number;
    name: string;
    icon: string;
}

export const exploreButtonPath =
    "M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z";

const specialistArr: SpecialistItem[] = [
    {
        id: 1,
        name: "General Physician",
        icon: gen,
    },
    {
        id: 2,
        name: "Gynaecologist",
        icon: gyn,
    },
    {
        id: 3,
        name: "Dermatologist",
        icon: der,
    },
    {
        id: 4,
        name: "Internal Medicine",
        icon: med,
    },
    {
        id: 5,
        name: "Pediatrician",
        icon: ped,
    },
    {
        id: 6,
        name: "Orthopedician",
        icon: ort,
    },
    {
        id: 7,
        name: "Otolaryngology",
        icon: ent,
    },
    {
        id: 8,
        name: "Cardiologist",
        icon: car,
    },
];

export default specialistArr;
