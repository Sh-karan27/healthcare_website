import AppointmentSection from '../components/AppointmentSection';
import AppSection from '../components/AppSection';

const BookAppointment = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-evenly'>
      <AppointmentSection />
      <AppSection />
    </div>
  );
};

export default BookAppointment;
