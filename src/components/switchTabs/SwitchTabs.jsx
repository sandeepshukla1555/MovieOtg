import React, {useState} from 'react'
import './style.css'

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelectedTab]=useState(0)
    const [left, setLeft]=useState(0)

    const activeTab=(tab, index)=>{
      setLeft(index * 100)
      setTimeout(()=>{
        setSelectedTab(index)
      },300)
      onTabChange(tab, index)
    }
    console.log(data)
  return (
    <div className='switchingTab'>
        <div className="tabItems">
            {data.map((tab, index)=>{
              return (<span 
                key={index} 
                className={`tabItem ${selectedTab===index?'active':''}`}
                onClick={()=>activeTab(tab, index)}
                >
                {tab}
              </span>)
            })}
            <span className="movingBg" style={{left:left}}/>
        </div>
    </div>
  )
}

export default SwitchTabs
