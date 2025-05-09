import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { toggleTheme } from '../features/theme/themeSlice';
import { Link } from 'react-scroll';
import sidebarImg from '../assets/menu.png'

export const Appbar = () => {
    const dispatch = useDispatch();
    const modeLogo = useSelector((state: RootState) => state.theme.modeLogo);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const [isOpen, setIsOpen] = useState(false);

    const handler = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between">
            <div className="flex p-10 font-bold text-lg">
                <Link to='hero' smooth={true} duration={2000} className='cursor-pointer flex p-10 font-bold text-lg"'>Soft Sell</Link>
            </div>
            <div className="md:hidden flex items-center p-10">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={sidebarImg} alt="menu" className="h-6 w-6" />
                </button>
            </div>

            <div className="hidden md:flex justify-evenly items-center p-10 space-x-7">
                <Link to='working' smooth={true} duration={1500} className='cursor-pointer'>How it works?</Link>
                <Link to='testimonials' smooth={true} duration={1500} className='cursor-pointer'>Customer Testimonials</Link>
                <Link to='why choose us' smooth={true} duration={1500} className='cursor-pointer'>Why choose us</Link>
                <Link to='contact' smooth={true} duration={1500} className='cursor-pointer'>Contact</Link>
                <img src={modeLogo} className='h-7 w-7 cursor-pointer' onClick={handler}/>
            </div>

            {isOpen && (
                <div
                    className={`fixed top-0 right-0 h-full w-64 z-50 p-10 flex flex-col space-y-6 md:hidden transition-colors duration-300 ${
                    darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
                    }`}
                >
                    <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
                    <img src="https://img.icons8.com/ios-filled/24/multiply.png" alt="close" />
                    </button>
                    <Link onClick={() => setIsOpen(false)} to='working' smooth={true} duration={1500} className='cursor-pointer'>How it works?</Link>
                    <Link onClick={() => setIsOpen(false)} to='testimonials' smooth={true} duration={1500} className='cursor-pointer'>Customer Testimonials</Link>
                    <Link onClick={() => setIsOpen(false)} to='why choose us' smooth={true} duration={1500} className='cursor-pointer'>Why choose us</Link>
                    <Link onClick={() => setIsOpen(false)} to='contact' smooth={true} duration={1500} className='cursor-pointer'>Contact</Link>
                    <img src={modeLogo} className='h-7 w-7 cursor-pointer' onClick={handler} />
                </div>
                )}
        </div>
    );
};
