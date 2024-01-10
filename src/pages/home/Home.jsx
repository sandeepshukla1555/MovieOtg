import React from 'react'
import './style.css'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home
