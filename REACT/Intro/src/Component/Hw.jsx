import React from 'react'
import { FaRegBookmark } from "react-icons/fa6"

const Hw = (props) => {
  return (
    <div className='main'>
           <div className='upper'>
            <img src={props.img} alt="logo" />
            <button>
                save <FaRegBookmark/>
            </button>

        </div>

        <div className='middle'>
            <h2>
                {props.Cname} &nbsp;
            </h2>
            <span>
                {props.date}
            </span>

            <h1>
                {props.profile}
            </h1>
        </div>

        <div className='middle2'>
            <button>
               {props.keyword1}
            </button>


            <button>
                   {props.keyword2}
            </button>
        </div>

        <div className='down'>
            <h1>
              {props.payout}
           </h1>
         

           <a href={props.Apply}>
            Apply Now
           </a>

        </div>

          <p>
            {props.location}
           </p>
    </div>
  )
}

export default Hw