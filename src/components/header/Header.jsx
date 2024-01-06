import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContectWrapper from '../contentWrapper/ContectWrapper'
import { FaSearch } from 'react-icons/fa'; 
import { RiMovie2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


import './style.css'

const Header = () => {
  const [show, setShow]=useState(true)
  const [lastScrollY, setLastScrollY]=useState(0)
  const [mobileMenu, setMobileMenu]=useState(false)
  const [query, setQuery]=useState("")
  const [showSearch, setShowSearch]=useState(false)
  const navigate=useNavigate()
  const location=useLocation()

  const openSearch=()=>{
    setMobileMenu(false)
    setShowSearch(true)
  }
  const openMobileMenu=()=>{
    setMobileMenu(true)
    setShowSearch(false)
  } 

  const  searchQueryHandler=(event)=>{
    if (event.key === "Enter" || query.length > 0)
    {
      navigate(`/search/:${query}`);
    }
 }


 const controlNavbar=()=>{
  if(window.scrollY > 45)
  {
     if(window.scrollY >= lastScrollY)
     { 
      setShow(true)
     }
     
     setLastScrollY(window.scrollY)
  }
}
 useEffect(()=>{
    window.addEventListener("scroll", controlNavbar);
    return ()=>{
      window.removeEventListener("scroll", controlNavbar);
    }
 },[lastScrollY])
 
const navigationHandler=(type)=>{
  if(type==="movie")
  {
    navigate('/explore/movie');
  }
  else
  {
    navigate('/explore/tv')
  }
  setMobileMenu(false)
}


  return (
    <>
    {
      show===true?<header className='header'>
      <ContectWrapper>
         <div className='logo'>
          <RiMovie2Line className='brand'/> MovieOTG
         </div>
         <ul className={`${mobileMenu?'mobilemenuItem':'none'} menuItem`}>
          <li className="items" onClick={()=>navigationHandler('movie')}>Movies</li>
          <li className="items" onClick={()=>navigationHandler('tv')}>TV Shows</li>
          <li className="items none">
             <FaSearch/>
          </li>
         </ul>
         <div className='mobileMenu'>
           <FaSearch onClick={openSearch}/>
           {mobileMenu?(<IoMdClose onClick={()=>setMobileMenu(false)}/>):(<CiMenuKebab onClick={openMobileMenu}/>)}
         </div>
      </ContectWrapper> 
      {showSearch?<div className='heroBannerContent'>
           <div className="searchInput">
            <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder='Search for a movie or tv show...' />
            <div className='cross-button'><IoMdClose className='cross' onClick={()=>setShowSearch(false)}/></div>
           </div>
        </div>:<></>}
    </header>:<></>
    }
    </>
  )
}

export default Header
