import React from 'react'
import developer from './developer.png';
import { FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const AboutDeveloper = () => {
  return (
   <div className='h-screen px-4'>
    <div className='flex flex-col items-center pt-20 w-36'>
       <img src={developer} className='h-24 rounded-full' style={{'filter': 'grayscale(0.6)'}}/>
       <h3 className='text-stone-700 font-medium text-base mt-2'>Sandeep Shukla</h3>
    </div>
    <h2 className='text-bold text-2xl underline underline-offset-4 text-white mt-4 mb-2'>About Developer</h2>
    <p className='text-base text-normal text-stone-500'>Hi... <br/>i am a UI developer in <span className='text-rose-600'>Airtel Digital Limited</span> working plateform at</p>
    <ul className='text-base text-white list-disc ml-4 mb-4'>
        <li><a href='https://wynk.in/music.in' className='text-base text-blue-800 underline underline-offset-4 cursor-pointer'>Wynk.in</a></li>
        <li><a href='https://studio.wynk.in/' className='text-base text-blue-800 underline underline-offset-4 cursor-pointer'>Wynk.studio.in</a></li>
    </ul>
    <h2 className='text-bold text-2xl underline underline-offset-4 text-white mt-4 mb-2'>Exprience</h2>
    <p className='text-base text-normal text-stone-500'>I have total 4 years of exprience in software developement industry as a (front-end developr)</p>
    <h2 className='text-bold text-2xl underline underline-offset-4 text-white mt-4 mb-2'>Contact</h2>
    <ul className='text-base text-white list-disc mb-4'>
        <li className='text-base cursor-pointer flex items-center'><FaWhatsapp className='text-lg text-emerald-500 mr-2'/> 6394801126</li>
        <li className='text-base cursor-pointer flex items-center'><MdMail className='text-lg text-red-500 mr-2'/>sandeepshukla1555@gmail.com</li>
    </ul>
   </div>
  )
}

export default AboutDeveloper
