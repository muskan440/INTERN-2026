import React from 'react'

const Card = (props) => {
  return (
   <div className='container'>
    <img src={props.img} alt="Sample Image" />

    <h3>{props.location}</h3>
    <h1>
        {props.name}
    </h1>

  
    <div>
    <button>
      {props.time}
    </button>

    <button>
        {props.button}
    </button>

    </div>

    <br/>
    <br />
    <br />
    <br /><br />
   <p> ----------------------------------------------------------</p>

    <h2>
        {props.salary}
    </h2>

    <button className='btn1'>
        Apply Now
    </button>


   </div>
  )
  
}

export default Card