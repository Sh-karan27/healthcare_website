import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
const Footer = () => {
  return (
    // d8f3dc
    <footer className='bg-white text-[#2d6a4f] p-10 '>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo and Tagline */}
        <div>
          <div className='flex items-center space-x-3'>
            <div className='bg-[#52b788] text-white p-3 rounded-full'>
              <span className='font-bold text-xl'>e</span>
            </div>
            <h2 className='font-heading text-lg font-bold'>elehealth</h2>
          </div>
          <p className='mt-2 text-sm'>
            Your trusted partner in healthcare solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-heading text-lg font-semibold text-[#74c69d]'>
            Quick Links
          </h3>
          <ul className='mt-4 space-y-2'>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Annual Checkup
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Top Insurances */}
        <div>
          <h3 className='font-heading text-lg font-semibold text-[#74c69d]'>
            Top Insurances
          </h3>
          <ul className='mt-4 space-y-2'>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Aetna
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Health Plan
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Blue Shield
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#95d5b2]'>
                Health Net
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='font-heading text-lg font-semibold text-[#74c69d]'>
            Follow Us
          </h3>
          <div className='flex space-x-4 mt-4'>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-[#52b788] text-[#white rounded-full hover:bg-[#74c69d]'>
              <FaFacebook className='text-white' />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-[#52b788] text-[#white rounded-full hover:bg-[#74c69d]'>
              <FaWhatsapp className='text-white' />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-[#52b788] text-[#white rounded-full hover:bg-[#74c69d]'>
              <FaLinkedin className='text-white' />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-[#52b788] text-[#white rounded-full hover:bg-[#74c69d]'>
              <FaInstagram className='text-white' />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-sm text-[#95d5b2]'>
        © 2024 elehealth. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
