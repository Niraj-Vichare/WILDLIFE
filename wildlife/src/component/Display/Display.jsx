import React from 'react'
import {Image} from '../../component/Images/Image'
import '../Display/Display.css'

 
const Display = (props) => {
  return (
    <div  className="main" style={{background:props.color,border:props.border}}>
      <div className='name'>
        {props.text2}
        <Image src={props.image} width={props.width}/>
      </div>
      <div className="info">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Display