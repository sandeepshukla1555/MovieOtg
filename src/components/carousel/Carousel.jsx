import React, { useRef, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContectWrapper from '../contentWrapper/ContectWrapper';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import CardOverview from '../popup/CardOverview';
import CarouselShimmer from './CarouselShimmer';

const Carousel = ({data, loading}) => {
    const carouseContainer=useRef();
    const {url}=useSelector((state)=>state.home)
    const navigate=useNavigate()
    const navigation=(dir)=>{

    }

  const [show, setShow]=useState(0)
  const showData=(ids)=>
  {
    setShow(ids)
  }

  const average=(average)=>{
      const toAverage=Math.floor(average/2);
      var averageStar=[];
      for(let i=1; i<=toAverage; i++)
      {
        averageStar.push(i)
      }
      return averageStar;
    }

    
  return (
    <div className='carousel'>
      <ContectWrapper>
        <CiCircleChevLeft className='arrow carouseLeft'
        onClick={()=>navigation("left")}/>
        <CiCircleChevRight className='arrow carouseRight'
        onClick={()=>navigation("right")}/>
      </ContectWrapper>
      {!loading ?<div className='carouselItems'>
        {
            data?.map((item)=>{
                const posterUrl=item.poster_path?url.poster+item.poster_path:false;
                const banner=item.backdrop_path?url.poster+item.backdrop_path: 'false';
                console.log(posterUrl)
                return (
                    <div key={item.id} onClick={()=>{}} className="carouselItem">
                      {show===item.id ?<div style={{backgroundImage:`url(${banner})`}} className="fixed top-0 left-0 h-screen w-full z-50 bg-no-repeat bg-cover bg-center">
                          <CardOverview 
                           backdrop_path={item.backdrop_path}
                           overview={item.overview} 
                           popularity={item.popularity} 
                           media_type={item.media_type}
                           original_language={item.original_language}
                           poster_path={posterUrl}
                           release_date={item.release_date} 
                           title={item.title} 
                           vote_count={item.vote_count}
                           average={average}
                           vote_average={item.vote_average}
                           setShow={setShow}/>
                      </div>:<></>}
                      <div className="posterBlock">
                        {/* <img src={posterUrl} onLoad={item.handleLoad}/> */}
                        {posterUrl!==false?<ProgressiveImg src={posterUrl} placeholderSrc={posterUrl} height="283"/>:<div type="button" className="w-40 h-56">
                          <div className='animate-spin h-20 w-20 mx-auto border-t-8 border-x border-x-transparent border-b border-b-transparent border-t-rose-600 rounded-full mt-8'></div>
                        </div>}
                        <div className='carouselInfo'>
                          <span className='carouselSubTitle'>{item.title}</span>
                          <span className='averageBox'><span className='averText'>Avr:- <span className='averRate'>5</span></span><span className='carouselStar'>{average(item.vote_average).map((item)=><span className='avrageStart'><IoStarSharp key={item*2}/></span>)}</span></span>
                        </div>
                        <button onClick={()=>showData(item.id)} className=''>Know More</button>
                      </div>
                    </div>
                )
            })
        }
      </div>
      :<CarouselShimmer/>
        
      }
    </div>
  )
  
}



export default Carousel


const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  return (
    <img
      {...{ src: placeholderSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};
