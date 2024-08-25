import React from 'react';
import character from '../assets/character.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>  
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Get to Know Me</h2>
          <p className='py-2 text-gray-600'>
            Born and raised in the bustling city of New York, my journey into the world of technology began at a young age. My love for computers started with building and repairing them, which eventually led me to pursue a Bachelor's degree in Computer Animation. During my studies, I discovered my true passion for software engineering.
          </p>
          <p className='py-2 text-gray-600'>
            With a background in hospitality and management, I bring a unique perspective to software development, utilizing my diverse experiences to create innovative and effective solutions. My dedication to software engineering is matched by my enthusiasm for learning and growing in the field, constantly striving to use my skills to the best of my ability. When I'm not coding, you can find me staying active outdoors, playing sports, or spending quality time with my loved ones. My multifaceted background and interests not only fuel my creativity but also drive me to excel in every project I undertake.
          </p>
          <a href='#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my latest projects!</p>
          </a>
        </div>
        <div className='w-full h-auto m-auto  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src={character} alt='character' />
        </div>
      </div>
    </div>
  );
}

export default About;
