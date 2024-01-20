import React from 'react'
import expdoc from "../assets/expdoc.jpg"
import "../style/Service.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <div className='service'>
        <img src={expdoc} alt=""  className='expdoc'/>

        <div className='left_service'>
            <p>Best Quality service with</p>
            <p>our experience doctors</p>

        </div>

        <div className='subpara'>
            <p className='para1'>with our top doctors we are able to provide best medical srvices above average. 
                We have highly experienced doctors, so dont worry.They are also very talented in their fieelds</p>
        </div>

        <div className='points'>
        <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick' /> Search your specialist and online consultation anywhere</p>

        <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick'  />Search your specialist and online consultation anywhere</p>
         <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick' />Search your specialist and online consultation anywhere</p>

             <button className='btn'>Explore Specialists</button>

        </div>
    </div>
  )
}

export default Service