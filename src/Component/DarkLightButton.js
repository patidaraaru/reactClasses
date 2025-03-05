import React, { useState } from 'react'

const DarkLightButton = () => {
const[isOn,setIson] =useState(false)
const HandleChangeBtn = () =>{
    setIson(!isOn)
}
const toggleValue = isOn ? "on" : "off" ;
  return (
    <div className='MainDev' style={{backgroundColor : isOn ? "#000" : "#fff" }}>
      <div className={`switchBtn ${toggleValue}`} onClick={HandleChangeBtn}>
        <div className={`insiedSwitch ${toggleValue}`}>
            <span>{toggleValue}</span>
        </div>
      </div>
    </div>
  )
}

export default DarkLightButton
