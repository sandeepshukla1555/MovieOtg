import React, { useRef } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContectWrapper from '../contentWrapper/ContectWrapper';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import userIcon from '../../assets/images/user.png'



const Carousel = ({data, loading}) => {
    const carouseContainer=useRef();
    const {url}=useSelector((state)=>state.home)
    const navigate=useNavigate()
    const navigation=(dir)=>{

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
                return (
                    <div key={item.id} onClick={()=>{}} className="carouselItem">
                      <div className="posterBlock">
                        <img src={posterUrl}/>
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
