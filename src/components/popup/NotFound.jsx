import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import NotMatch from './NotMatch.json'


const NotFound = () => {
  return (
    <div className='h-[80vh] w-full bg-black flex justify-center items-center text-white text-5xl font-semibold'>
       <div id='notfounded'>
          <Player src={NotMatch} className="player" loop
  autoplay/>
       </div>
    </div>
  )
}

export default NotFound
