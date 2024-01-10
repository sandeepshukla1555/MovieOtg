import React from 'react'
import ContectWrapper from '../../../components/contentWrapper/ContectWrapper'
import '../style.css'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {
    const [endPoint, setEndPoint]=useState('day')
    
    const {data, loading}=useFetch(`/trending/movie/${endPoint}`);
    
    const onTabChange=(tab)=>{
        setEndPoint(tab==='Day'?"day":"week");
    }
    console.log(":-",data)
  return (
    <div className='carouselSection'>
      <ContectWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
     </ContectWrapper>
     <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
 