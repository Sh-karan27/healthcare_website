import { motion } from 'framer-motion';
import { ImagesSlider } from '../ui/images-slider';
import { hero_section_arr } from '../../data/hero_section';
import { BsBank2 } from 'react-icons/bs';
import { GiRibbonMedal } from 'react-icons/gi';
import { FaUserDoctor } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';

export function ImagesSliderDemo() {
  return (
    <ImagesSlider
      className='h-[75vh] sm:h-[60vh] md:h-[70vh]'
      images={hero_section_arr.map((item) => item.image)}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        }}
        className='z-50 flex flex-col justify-center items-center w-full h-full relative gap-5 px-4 sm:px-8'
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))',
        }}>
        {/* Heading Section */}
        <div className='flex flex-col items-center justify-center gap-5'>
          <motion.p className='font-bold text-2xl sm:text-3xl md:text-5xl text-center text-white'>
            Consult Top Celebrated Doctors
            <br /> with meddo
          </motion.p>
          {/* Info Section */}
          <div className='flex flex-wrap gap-4 text-lg sm:text-xl font-semibold text-white justify-center'>
            <div className='flex items-center gap-1'>
              <BsBank2 className='text-lg sm:text-xl text-bacground-light' />
              <span>From the Best Hospitals and Colleges</span>
            </div>
            <span className='hidden sm:block'>|</span>
            <div className='flex items-center gap-1'>
              <GiRibbonMedal className='text-lg sm:text-xl text-bacground-light' />
              <span>4.8+ Rating</span>
            </div>
            <span className='hidden sm:block'>|</span>
            <div className='flex items-center gap-1'>
              <FaUserDoctor className='text-lg sm:text-xl text-bacground-light' />
              <span>Available online and in-clinic</span>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className='flex flex-col items-center justify-center gap-6 mt-10 w-full'>
          {/* Single Input Search */}
          <div className='flex items-center justify-center bg-white p-2 rounded-lg w-full sm:w-auto gap-2'>
            <input
              type='text'
              placeholder='Explore doctor by name or speciality'
              className='outline-none w-full sm:w-[27rem] p-2 text-gray-400 font-semibold'
            />
            <button className='bg-bacground-light p-2 rounded-md'>
              <FiSearch className='text-white text-lg' />
            </button>
          </div>
          {/* Double Input Search */}
          <div className='hidden sm:flex flex-row items-center justify-center bg-white p-2 rounded-lg gap-2 w-full sm:w-auto'>
            <input
              type='text'
              placeholder='City'
              className='outline-none w-full sm:w-[7rem] p-2 text-center border-r-2  text-gray-400 font-semibold'
            />
            <input
              type='text'
              placeholder='Explore doctor by name or speciality'
              className='outline-none w-full sm:w-[20rem] p-2 text-gray-400 font-semibold'
            />
            <button className='bg-bacground-light p-2 rounded-full'>
              <FiSearch className='text-white text-lg' />
            </button>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
