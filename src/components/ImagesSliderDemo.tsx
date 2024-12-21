import { motion } from 'framer-motion';
import { ImagesSlider } from './ui/images-slider'; // Assuming ImagesSlider is a custom component for image sliding functionality
import { hero_section_arr } from '../data/hero_section'; // Assuming hero_section_arr provides image data
import { BsBank2 } from 'react-icons/bs';
import { GiRibbonMedal } from 'react-icons/gi';
import { FaUserDoctor } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { HeroVectorOne } from '../data/hero_section';
import { HeroVectorTwo } from '../data/hero_section';

export function ImagesSliderDemo() {
  return (
    <ImagesSlider
      className='h-[37rem]' // Adjust height as needed
      images={hero_section_arr.map((item) => item.image)} // Assuming image URLs are in hero_section_arr
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80, // Adjust y-axis for desired initial position
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }, // Adjust transition duration for animation speed
        }}
        className='z-50 flex  justify-evenly items-center w-full h-full relative gap-5 ' // Adjust padding for content spacing
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))',
        }} // Add background gradient for a darkened effect
      >
        <img src={HeroVectorOne} alt='' className='w-[20rem] mt-40 ' />

        <div className='flex flex-col items-center justify-center   gap-5'>
          <motion.p className='font-bold text-2xl md:text-5xl text-center text-white'>
            Consult Top Celebrated Doctors
            <br /> with meddo
          </motion.p>
          <div className='flex flex-col items-center mt-8'>
            {' '}
            {/* Adjust spacing between title and icons */}
            <div className='flex gap-4 text-xl font-semibold text-white'>
              <div className='flex items-center gap-1'>
                <BsBank2 className='text-xl text-primary' />
                From the Best Hospitals and Colleges
              </div>
              <span>|</span>
              <div className='flex items-center gap-1'>
                <GiRibbonMedal className='text-xl text-primary' />
                4.8+ Rating
              </div>
              <span>|</span>
              <div className='flex items-center gap-1'>
                <FaUserDoctor className='text-xl text-primary' />
                Available online and in-clinic
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center p-4 gap-1 mt-10  '>
            <div className='flex  items-center justify-center bg-white p-3  rounded-lg mr-40  '>
              <input
                type='text'
                placeholder='Explore doctor by name or speciality'
                className='outline-none w-[27rem] p-2 text-gray-400 font-semibold'
              />
              <button className='bg-primary p-2 rounded-md'>
                <FiSearch className='text-white text-lg' />
              </button>
            </div>
            <div className='flex  items-center justify-center bg-white p-3  rounded-lg   '>
              <input
                type='select'
                placeholder='Gurgaon'
                className='outline-none w-[7rem] p-2 border-r text-gray-400 font-semibold'
              />
              <input
                type='text'
                placeholder='Explore doctor by name or speciality'
                className='outline-none w-[20rem] p-2 text-gray-400 font-semibold'
              />
              <button className='bg-primary p-2 rounded-full'>
                <FiSearch className='text-white text-lg' />
              </button>
            </div>
          </div>
        </div>

        <img src={HeroVectorTwo} alt='' className='w-[20rem] mb-40 ' />
      </motion.div>
    </ImagesSlider>
  );
}
