import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen flex flex-col items-center justify-center text-center'>
      <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center pt-50'> 
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something </p>
          <h1>Hi I'm <span className='text-[#5651e5]'>Adonis</span></h1>
          <h1 className='py-4 text-gray-700'>Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            A dedicated software engineer with a strong passion for crafting cutting-edge, scalable solutions to challenging technical problems. I excel in fast-paced, team-oriented settings, leveraging my adept problem-solving abilities, clear communication, and leadership experience to achieve impactful results. My diverse background in project management and user experience design offers a unique viewpoint, allowing me to deliver creative and effective software solutions that drive organizational success.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/adoniscasado/' target='__blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/nebstech' target='__blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='https://github.com/nebstech' target='__blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Hero;
