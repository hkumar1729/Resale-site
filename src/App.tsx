
import './App.css'
import { Appbar } from './components/Appbar'
import Contact from './components/ContactForm'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyChooseUS from './components/WhyChooseUs'
import { useSelector } from 'react-redux';
import { type RootState } from './app/store';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return <div className={`${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white shadow-md transition-colors duration-300' }`}> 
    <Appbar/>
    <HeroSection/>
    <HowItWorks/>
    <WhyChooseUS/>
    <Testimonials/>
    <Contact/>
  </div>
    
}

export default App
