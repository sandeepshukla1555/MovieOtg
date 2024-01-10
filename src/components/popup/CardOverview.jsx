import React from 'react'
import './style.css'
import { MdCancel } from "react-icons/md";


const CardOverview = ({backdrop_path, overview, popularity, media_type, original_language, poster_path, release_date, title, average, vote_count, setShow}) => {
  return (
    <div className='backdrop relative h-full w-full flex justify-center items-center'>
      <div className='w-[32rem] h-[23rem] bg-white rounded-lg overflow-hidden relative flex'>
        <MdCancel onClick={()=>setShow(0)} className='absolute top-4 right-4 text-stone-800 font-extrabold bg-gray-300 rounded-full hover:opacity-95 w-6 h-6 p-0.2'/>
        <div className='min-w-[11.5rem]'>
           <img src={poster_path} className='w-full h-[23rem] ml-0 mr-auto' />
        </div>
        <div className='flex-grow mt-9 pl-4'>
            <h4 className='text-base font-normal mb-5'>{title}</h4>
            <div className='text-[12px] flex items-start justify-start gap-4'>
                <div className='flex flex-col items-start justify-start'>
                        <th>Release Data</th>
                        <th>Average</th>
                        <th>Popularty</th>
                        <th>Total Vote</th>
                        <th>Media Type</th>
                </div>
                <div className='flex flex-col items-start justify-start'>
                        <td>{release_date}</td>
                        <td>{average}</td>
                        <td>{popularity}</td>
                        <td>{vote_count}</td>
                        <td>{media_type}</td>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CardOverview
