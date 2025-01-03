// import React from 'react';
// import HeartImage from '../assets/Heart3D.png';

// const Cardiac = () => {
//   return (
//     <div className='min-h-screen w-full flex flex-col items-center justify-evenly bg-gradient-to-l from-text-light to-white p-8'>
//       <h1 className='text-6xl font-extrabold text-heading-light-section_heading drop-shadow-md'>
//         A Heart Full of Health
//       </h1>
//       <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-8'>
//         <div className='lg:w-1/2 w-full flex flex-col items-start justify-center p-6 space-y-6'>
//           <h2 className='text-4xl lg:text-5xl font-bold text-heading-light-normal_heading leading-tight'>
//             Cardiac Check-Up: Care for Your Heart
//           </h2>
//           <p className='text-lg lg:text-xl text-text-light leading-relaxed'>
//             Your heart is your body’s most vital organ—ensure it’s in top shape
//             with a comprehensive cardiac check-up. We provide advanced
//             diagnostic tools and expert care to help you keep your heart
//             healthy. Take charge of your heart health today and lead a life full
//             of vitality!
//           </p>
//           <div className='space-y-6'>
//             <h3 className='text-2xl font-semibold text-heading-light-section_heading'>
//               Why Your Heart Deserves the Best:
//             </h3>
//             <ul className='list-disc list-inside text-text-light space-y-3'>
//               <li>
//                 <strong>Advanced Diagnostics:</strong> Early detection for
//                 long-term cardiac health.
//               </li>
//               <li>
//                 <strong>Expert Care:</strong> Personalized plans for your
//                 heart’s well-being.
//               </li>
//               <li>
//                 <strong>Prevention Focused:</strong> Keep your heart strong with
//                 proactive care.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className='lg:w-1/2 w-full flex flex-col items-center justify-center p-6'>
//           <div className='relative w-full max-w-md'>
//             <img
//               className='w-full rounded-full  '
//               src={HeartImage}
//               alt='3D Heart'
//             />
//             <div className='absolute inset-0 rounded-full  '></div>
//           </div>
//           <div className='mt-8 text-center space-y-3'>
//             <h3 className='text-2xl lg:text-3xl font-medium text-white'>
//               “Your heart is for pumping blood, not to love someone.”
//             </h3>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cardiac;

import React from 'react';
import HeartImage from '../assets/Heart3D.png';

const Cardiac = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-evenly bg-gradient-to-r from-text-light to-white p-8'>
      <h1 className='text-6xl font-extrabold text-heading-light-section_heading drop-shadow-md'>
        A Heart Full of Health
      </h1>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full flex flex-col items-start justify-center p-6 space-y-6'>
          <h2 className='text-4xl lg:text-5xl font-bold text-heading-light-normal_heading leading-tight'>
            Cardiac Check-Up: Care for Your Heart
          </h2>
          <p className='text-lg lg:text-xl text-text-light leading-relaxed'>
            Your heart is your body’s most vital organ—ensure it’s in top shape
            with a comprehensive cardiac check-up. We provide advanced
            diagnostic tools and expert care to help you keep your heart
            healthy. Take charge of your heart health today and lead a life full
            of vitality!
          </p>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-heading-light-section_heading'>
              Why Your Heart Deserves the Best:
            </h3>
            <ul className='list-disc list-inside text-text-light space-y-3'>
              <li>
                <strong>Advanced Diagnostics:</strong> Early detection for
                long-term cardiac health.
              </li>
              <li>
                <strong>Expert Care:</strong> Personalized plans for your
                heart’s well-being.
              </li>
              <li>
                <strong>Prevention Focused:</strong> Keep your heart strong with
                proactive care.
              </li>
            </ul>
          </div>
        </div>

        <div className='lg:w-1/2 w-full flex flex-col items-center justify-center p-6'>
          <div className='relative w-full max-w-md'>
            <img
              className='w-3/4 rounded-full animate-heartbeat'
              src={HeartImage}
              alt='3D Heart'
            />
          </div>
          <div className='mt-8 text-center space-y-3'>
            <h3 className='text-2xl lg:text-3xl font-medium text-white'>
              “LOVE!?, Your only job is pumping blood.”
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardiac;
