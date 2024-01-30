import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/carousel/Carousel'
import ContectWrapper from '../../components/contentWrapper/ContectWrapper'
import CarouselShimmer from '../../components/carousel/CarouselShimmer'
import NotFound from '../../components/popup/NotFound'

const SearchResult = () => {
  const {query}=useParams()
  const {data, loading, error}=useFetch(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`)
  return (
    <div className='pt-20'>
       <ContectWrapper>
          <h1 className='text-white font-extrabold mb-3'>Your Search Result</h1>
          {data?.results?.length!==0?<Carousel data={data?.results} loading={loading}/>:<NotFound/>}
       </ContectWrapper>
    </div>
  )
}

export default SearchResult
