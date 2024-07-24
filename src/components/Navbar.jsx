import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 w-full bg-customGray text-black ${navOpen ? 'shadow-lg' : 'shadow-none'} transition-shadow duration-300`}>
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div className="text-xl font-thin">
                        <a href="#home" className="flex items-center">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nO2VO07DQBRFT0OJ9wHUZAd8OihALkgTswhKu2QPRoImLCFRFoEocPaR1CCBRrojjaznsfGny2ksvc+949F7NhwYmSPgE1gyEafAL1BNZXAtg9VQoRmQGPFHGZS1eKKeThQSeTVyuXLuGfKmeNFV/Bu4MfIvyrs3CblVT9TEi/8ADw01G9VcGLm7wOS5j7hjq7oTbEyTLLiWlDh71VoD4EkDk+w/Bonqdi2HCA0WPvgUXNG8ofFMNV8R8ftAvD5prSZXyq/7iFtj6kbPWjI3qvQZ07ZFyyOn67xonnPguBYrG5YM1bqeQWxkcMlEVDJwn+xJeAc+9NM5wGj8AX65WM7pRZ29AAAAAElFTkSuQmCC"
                                alt="Logo"
                                className="w-8 h-10"
                            />
                        </a>
                    </div>

                    <div className="block lg:hidden">
                        <button onClick={toggleNav} className="text-2xl">
                            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>

                    <ul className={`lg:flex lg:space-x-6 lg:items-center lg:space-y-0 space-y-4 absolute lg:relative top-16 left-0 right-0 w-full bg-gray-800 lg:bg-transparent lg:top-0 transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <li><a href="#home" className="block py-2 px-4 transition-colors" onClick={() => setNavOpen(false)}>Home</a></li>
                        <li><a href="#about" className="block py-2 px-4 transition-colors" onClick={() => setNavOpen(false)}>About</a></li>
                        <li><a href="#skills" className="block py-2 px-4 transition-colors" onClick={() => setNavOpen(false)}>Skills</a></li>
                        <li><a href="#projects" className="block py-2 px-4 transition-colors" onClick={() => setNavOpen(false)}>Projects</a></li>
                        <li><a href="#contact" className="block py-2 px-4 transition-colors" onClick={() => setNavOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Contact Icons */}
            <div className="fixed top-16 left-0 right-0 flex justify-center py-2 bg-transparent">
                <div className="flex space-x-4 text-black">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><FaLinkedinIn size={20} /></a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><FaGithub size={20} /></a>
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><AiOutlineMail size={20} /></a>
                    <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><BsFillPersonLinesFill size={20} /></a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
