import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/carousel/Carousel'
import ContectWrapper from '../../components/contentWrapper/ContectWrapper'

const SearchResult = () => {
  const {query}=useParams()
  const {data, loading}=useFetch(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`)
  console.log(data)
  return (
    <div className='pt-20'>
       <ContectWrapper>
          <h1 className='text-white font-extrabold mb-5'>Your Search Result</h1>
          <Carousel data={data?.results} loading={loading}/>
       </ContectWrapper>
    </div>
  )
}

export default SearchResult
