import React from 'react'
import './style.css'

const ContectWrapper = ({children}) => {
  return (
    <div className='contentWrapper'>
       {children}
    </div>
  )
}

export default ContectWrapper
