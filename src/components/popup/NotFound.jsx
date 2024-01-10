import React from 'react'
import { MdSmsFailed } from "react-icons/md";


const NotFound = () => {
  return (
    <div className='h-[80vh] w-full bg-stone-800 flex justify-center items-center text-white text-5xl font-semibold'>
       <div>
          <MdSmsFailed className='text-[20rem]'/>
          <h1 className='text-center'>Not Found!</h1>
       </div>
    </div>
  )
}

export default NotFound
