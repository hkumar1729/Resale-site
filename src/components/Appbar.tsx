import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { toggleTheme } from '../features/theme/themeSlice';

import { Link } from 'react-scroll'
export const Appbar = () => {
    const dispatch = useDispatch();
    const modeLogo = useSelector((state: RootState) => state.theme.modeLogo);
    const handler = () => {
        dispatch(toggleTheme());
      };
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between">
            <div className="flex p-10 font-bold text-lg">
                <Link to='hero' smooth={true} duration={2000} className='cursor-pointer flex p-10 font-bold text-lg"'>Soft Sell</Link>
            </div>
            <div className="flex justify-evenly items-center p-10 space-x-7">
                <div>
                    <Link to='working' smooth={true} duration={1500} className='cursor-pointer'>How it works?</Link>
                </div>
                <div>
                    <Link to='testimonials' smooth={true} duration={1500} className='cursor-pointer'>Customer Testimonials</Link>
                </div>
                <div>
                    <Link to='why choose us' smooth={true} duration={1500} className='cursor-pointer'>Why choose us</Link>
                </div>
                <div>
                    <Link to='contact' smooth={true} duration={1500} className='cursor-pointer'>Contact</Link>
                </div>
                <img src={modeLogo} className='h-7 w-7 cursor-pointer' onClick={handler}/>
            </div>
        </div>
    );
};
