import { doctorsData } from '@/data/appointment_data';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const AppointmentSection = () => {
  const [filters, setFilters] = useState<{
    country: string;
    state: string;
    speciality: string;
    sortBy: string;
  }>({
    country: '',
    state: '',
    speciality: '',
    sortBy: '',
  });

  const [searchText, setSearchText] = useState<string>('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredDoctors = doctorsData
    .filter((doctor) => {
      const matchesTextSearch =
        searchText === '' ||
        Object.values(doctor).join(' ').toLowerCase().includes(searchText);

      return (
        matchesTextSearch &&
        (filters.country === '' || doctor.country === filters.country) &&
        (filters.state === '' || doctor.state === filters.state) &&
        (filters.speciality === '' || doctor.speciality === filters.speciality)
      );
    })
    .sort((a, b) => {
      if (filters.sortBy === 'popularity') {
        return b.popularity - a.popularity;
      } else if (filters.sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (filters.sortBy === 'experience') {
        return b.experience - a.experience;
      }
      return 0;
    });

  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      {/* Header Section */}
      <div className='mt-20 w-full max-w-7xl px-4 md:px-8'>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
          <h1 className='text-text-light font-semibold text-2xl'>
            Top Doctors in Your Area
          </h1>
          <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
            <div className='flex bg-gray-200 p-2 rounded-lg w-full sm:w-auto items-center gap-2'>
              <input
                placeholder='Explore doctors by name or speciality'
                type='text'
                value={searchText}
                onChange={handleSearchChange}
                className='bg-transparent outline-none p-2 w-full sm:w-[20rem] rounded-lg'
              />
              <button className='bg-bacground-light text-2xl p-2 rounded-lg text-white'>
                <BiSearch />
              </button>
            </div>
            <div className='flex items-center space-x-2'>
              <label
                htmlFor='sortBy'
                className='text-text-light text-md font-medium'>
                Sort By:
              </label>
              <select
                id='sortBy'
                name='sortBy'
                value={filters.sortBy}
                onChange={handleFilterChange}
                className='px-3 py-2 border rounded-md text-gray-500 text-md focus:outline-none focus:ring-2 focus:ring-text-light'>
                <option value=''>Select</option>
                <option value='popularity'>Popularity</option>
                <option value='rating'>Rating</option>
                <option value='experience'>Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2 text-gray-500'>
              Country
            </label>
            <select
              name='country'
              value={filters.country}
              onChange={handleFilterChange}
              className='w-full px-3 py-2 border border-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'>
              <option value=''>Select Country</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
              <option value='UAE'>UAE</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2 text-gray-500'>
              State
            </label>
            <select
              name='state'
              value={filters.state}
              onChange={handleFilterChange}
              className='w-full px-3 py-2 border border-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'>
              <option value=''>Select State</option>
              <option value='Delhi'>Delhi</option>
              <option value='California'>California</option>
              <option value='Maharashtra'>Maharashtra</option>
              <option value='London'>London</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Dubai'>Dubai</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2 text-gray-500'>
              Speciality
            </label>
            <select
              name='speciality'
              value={filters.speciality}
              onChange={handleFilterChange}
              className='w-full px-3 py-2 border border-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'>
              <option value=''>Select Speciality</option>
              <option value='Cardiologist'>Cardiologist</option>
              <option value='Neurologist'>Neurologist</option>
              <option value='Orthopedic Surgeon'>Orthopedic Surgeon</option>
              <option value='Dermatologist'>Dermatologist</option>
              <option value='Gynecologist'>Gynecologist</option>
              <option value='Pediatrician'>Pediatrician</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className='flex flex-col lg:flex-row w-full max-w-7xl px-4 md:px-8 gap-8 mt-10'>
        {/* Doctors List Section */}
        <div className='w-full'>
          <h1 className='text-2xl text-bacground-light font-semibold mb-6'>
            Top Doctors
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className='bg-white border border-text-light p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className='rounded-full w-24 h-24 object-cover mb-4'
                />
                <h2 className='text-lg font-semibold'>{doctor.name}</h2>
                <p className='text-sm text-bacground-light'>
                  {doctor.speciality}
                </p>
                <p className='text-sm text-bacground-light'>
                  {doctor.degree}, {doctor.experience} years experience
                </p>
                <p className='text-sm text-bacground-light'>
                  Rating: {doctor.rating} / 10
                </p>
                <p className='text-sm text-bacground-light'>
                  Popularity: {doctor.popularity} / 100
                </p>
                <p className='text-sm text-bacground-light'>
                  {doctor.state}, {doctor.country}
                </p>
                <button className='mt-4 px-4 py-2 bg-text-light text-white rounded-md hover:bg-text-light'>
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
