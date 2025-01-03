import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';
import Dashboard from './screens/Dashboard';
import ContactUs from './screens/ContactUs';
import BookingTest from './screens/BookingTest';
import Error from './screens/Error';
import Footer from './components/Footer';
import BookAppointment from './screens/BookAppointment';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/appointment' element={<BookAppointment />} />
            <Route path='/test' element={<BookingTest />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
