import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='flex flex-col px-4 py-5 bg-sky-900'>
       <div className='text-center mb-4'>
        <h1 className='text-white text-5xl mb-2'>MovieOTG</h1>
        <p className='text-sm text-white font-normal'>This is free movie and tv show platform for watch and enjoy.</p>
       </div>
       <div className='flex flex-col md:flex-row md:justify-around gap-4'>
         <div>
          <h3 className='text-lg font-medium text-sky-400 mb-1'>Context</h3>
          <ul className='text-sm'>
           <li className='text-zinc-300'>Tv</li>
           <li className='text-zinc-300'>Movie</li>
          </ul>
         </div>

         <div>
          <h3 className='text-lg font-medium text-sky-400 mb-1'>Developer Info</h3>
          <ul className='text-sm'>
           <li className='text-zinc-300'>Tv</li>
           <li className='text-zinc-300'>Movie</li>
          </ul>
         </div>

         <div>
          <h3 className='text-lg font-medium text-sky-400 mb-1'>Developer Contact</h3>
          <ul className='text-sm'>
           <li className='text-zinc-300'><span className='underline underline-offset-4'>Gamil:</span> sandeepshukla1555@gmail.com</li>
           <li className='text-zinc-300'><span className='underline underline-offset-4'>Mobile:</span> 6394801126</li>
          </ul>
         </div>
       </div>
       <div className="border-t border-sky-800 mt-5 py-3 text-center">
         <p className='text-sm font-semibold text-sky-500'>All content reserved @copyright Sandeep Shukla</p>
       </div>
    </div>
  )
}

export default Footer
