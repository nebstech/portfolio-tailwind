import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={`fixed w-full h-20 ${shadow ? 'shadow-xl bg-[#ecf0f2]' : ''} z-[100]`}>
            <div className='flex justify-between items-center w-full h-full m-2 px-2 2xl:px-16'>
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nO2VO07DQBRFT0OJ9wHUZAd8OihALkgTswhKu2QPRoImLCFRFoEocPaR1CCBRrojjaznsfGny2ksvc+949F7NhwYmSPgE1gyEafAL1BNZXAtg9VQoRmQGPFHGZS1eKKeThQSeTVyuXLuGfKmeNFV/Bu4MfIvyrs3CblVT9TEi/8ADw01G9VcGLm7wOS5j7hjq7oTbEyTLLiWlDh71VoD4EkDk+w/Bonqdi2HCA0WPvgUXNG8ofFMNV8R8ftAvD5prSZXyq/7iFtj6kbPWjI3qvQZ07ZFyyOn67xonnPguBYrG5YM1bqeQWxkcMlEVDJwn+xJeAc+9NM5wGj8AX65WM7pRZ29AAAAAElFTkSuQmCC" alt="Logo" width='30' height='40' />
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href='#home'>Home</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={`${nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}`}>
                <div className={`${nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}`}>
                    <div className='flex w-full items-center justify-between'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nO2VO07DQBRFT0OJ9wHUZAd8OihALkgTswhKu2QPRoImLCFRFoEocPaR1CCBRrojjaznsfGny2ksvc+949F7NhwYmSPgE1gyEafAL1BNZXAtg9VQoRmQGPFHGZS1eKKeThQSeTVyuXLuGfKmeNFV/Bu4MfIvyrs3CblVT9TEi/8ADw01G9VcGLm7wOS5j7hjq7oTbEyTLLiWlDh71VoD4EkDk+w/Bonqdi2HCA0WPvgUXNG8ofFMNV8R8ftAvD5prSZXyq/7iFtj6kbPWjI3qvQZ07ZFyyOn67xonnPguBYrG5YM1bqeQWxkcMlEVDJwn+xJeAc+9NM5wGj8AX65WM7pRZ29AAAAAElFTkSuQmCC" width='17' height='35' alt='Logo' />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something together!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <li className='py-4 text-sm'>
                                <a href='#home' onClick={() => setNav(false)}>Home</a>
                            </li>
                            <li className='py-4 text-sm'>
                                <a href='#about' onClick={() => setNav(false)}>About</a>
                            </li>
                            <li className='py-4 text-sm'>
                                <a href='#skills' onClick={() => setNav(false)}>Skills</a>
                            </li>
                            <li className='py-4 text-sm'>
                                <a href='#projects' onClick={() => setNav(false)}>Projects</a>
                            </li>
                            <li className='py-4 text-sm'>
                                <a href='#contact' onClick={() => setNav(false)}>Contact</a>
                            </li>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href="https://www.linkedin.com/in/gabrielcruz2023/" target="_blank" rel="noopener noreferrer">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href="https://github.com/Gabrielcruz1" target="_blank" rel="noopener noreferrer">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="https://docs.google.com/document/d/1O3_h_3UQ4KjyUHWRO4osxnLjsUUd9uSdzwyp3t1nDo4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
