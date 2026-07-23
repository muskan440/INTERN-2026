import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
  return (
    <div className='parent'>
       <h1 className='heading'>
         {count}
       </h1>
       <button className='btn' onClick={()=>setCount(count+1)}>

        Increment


       </button>

        <button className='btn' onClick={()=>setCount(count-1)}>

        Decrement


       </button>
        
        
        
    </div>

  )
}

export default Count