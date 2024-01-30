import React from 'react'
import './style.css'
import { MdCancel } from "react-icons/md";
import { IoStarSharp } from 'react-icons/io5';


const CardOverview = ({backdrop_path, overview, popularity, media_type, original_language, poster_path, release_date, title, average, vote_average, vote_count, setShow}) => {
  return (
    <div className='backdrop relative h-full w-full flex justify-center items-center'>
      <div className='w-[32rem] h-[23rem] bg-[#ecececd4] rounded-lg overflow-hidden relative flex'>
        <MdCancel onClick={()=>setShow(0)} className='absolute top-4 right-4 text-stone-800 font-extrabold bg-gray-300 rounded-full hover:text-red-600 hover:bg-gray-700 w-6 h-6 p-0.2 cursor-pointer'/>
        <div className='min-w-[11.5rem]'>
           {!poster_path?<img src={poster_path} className='w-full h-[23rem] ml-0 mr-auto' />:<div type="button" className="w-40 h-80">
                          <div className='animate-spin h-20 w-20 mx-auto border-t-8 border-x border-x-transparent border-b border-b-transparent border-t-rose-600 rounded-full'></div>
                        </div>}
        </div>
        <div className='flex-grow mt-9 pl-4 overflow-y-auto'>
            <h4 className='text-base font-normal mb-5 line-clamp-2 mr-4'><span className='font-semibold'>Details of: </span><span className='underline underline-offset-4'>{title} {media_type} show</span></h4>
            <div className='text-[12px] flex items-center justify-start gap-4 mb-4'>
                <div className='flex flex-col items-start justify-start gap-2'>
                        <th>Release Data</th>
                        <th>Average</th>
                        <th>Popularty</th>
                        <th>Total Vote</th>
                        <th>Media Type</th>
                </div>
                <div className='flex flex-col items-start justify-end gap-2'>
                        <td>{release_date}</td>
                        <td className='flex gap-1'>{average(vote_average).map((item)=><span key={item} className='avrageStart'><IoStarSharp/></span>)}</td>
                        <td>{popularity}</td>
                        <td>{vote_count}</td>
                        <td>{media_type}</td>
                </div>
            </div>
            <p className='text-[12px] font-light text-zinc-500'><span className='font-medium text-zinc-800'>Overview: </span>{overview}</p>

        </div>
      </div>
    </div>
  )
}

export default CardOverview
