import doctor1 from "../assets/doctor1.avif";
import doctor2 from "../assets/doctor2.avif";
import doctor3 from "../assets/doctor3.avif";

export const best_doctor: {
  name: string;
  experience: number;
  bio: string;
  image: string;
  degree: string;
}[] = [
  {
    name: "Dr Richa Chaudhary",
    experience: 7,
    bio: "Renowned dermatologist, trusted for complex skin repair and hairloss solutions",
    image: doctor1,
    degree: " MBBS, MD - Dermatologist",
  },
  {
    name: "Dr Naren Prakash",
    experience: 13,
    bio: " Expert in advanced acne care, skin rejuvenation, and hair transplants.",
    image: doctor2,
    degree: "MBBS, MD - Dermatologist",
  },
  {
    name: "Dr Iftekhar",
    experience: 9,
    bio: " Experienced dermatologist from AIIMS, specializing in advanced acne, pigmentation, and hair loss.",
    image: doctor3,
    degree: " MBBS, MD - Dermatologist",
  },
];
