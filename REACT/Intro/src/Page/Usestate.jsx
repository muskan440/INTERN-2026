import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [color,setColor]=useState("Blue")
  return (
    <div>
        <button type='button' onClick={()=>setColor('Black')}>

            Change Color  
            
        </button>
        <h1>
            My Favourite color is:{color}
        </h1>
    </div>
  )
}

export default Usestate