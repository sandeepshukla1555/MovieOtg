import React, { useRef, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContectWrapper from '../contentWrapper/ContectWrapper';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import userIcon from '../../assets/images/user.png'
import { IoStarSharp } from "react-icons/io5";
import CardOverview from '../popup/CardOverview';

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
                const posterUrl=item.poster_path?url.poster+item.poster_path: userIcon;
                const banner=item.backdrop_path?url.poster+item.backdrop_path: userIcon;
                console.log(item)
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
                           average={average}
                           vote_count={item.vote_count}
                           setShow={setShow}/>
                      </div>:<></>}
                      <div className="posterBlock">
                        <img src={posterUrl}/>
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
      :<span>Loading...</span>
        
      }
    </div>
  )
}

export default Carousel
