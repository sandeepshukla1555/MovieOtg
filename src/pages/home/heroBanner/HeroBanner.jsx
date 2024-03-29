import React from 'react'  
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'
import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContectWrapper from '../../../components/contentWrapper/ContectWrapper'

const HeroBanner = () => {
  const [background, setBackground]=useState("");
  const [query, setQuery]=useState("")
  const  navigate=useNavigate()
  const {url}=useSelector(state=>state.home)
  const {data, loading}=useFetch('/movie/upcoming')

  useEffect(()=>{
     const bg=url.backdrop + data?.results?.[Math.floor(Math.random() * 19)]?.backdrop_path;
     setBackground(bg)
     console.log("Backdrop Image URL: ", bg, "------", url.backdrop + data)
  },[data])
 
  const  searchQueryHandler=(event)=>{
     if (event.key === "Enter" || query.length > 0)
     {
       navigate(`/search/:${query}`);
     }
  }

    
  return (
    <div className="heroBanner">
      {!loading && <div className="backdroup-img">
         <Img src={background}/>
      </div>}
      <div className="opacity-layer">
        
      </div>
      <ContectWrapper>
        <div className="heroBannerContent">
           <span className="title">Welcome</span>
           <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
           <div className="searchInput">
            <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder='Search for a movie or tv show...' />
            <button onClick={searchQueryHandler}>Search</button>
           </div>
        </div>
      </ContectWrapper>
    </div>
  )
}

export default HeroBanner
