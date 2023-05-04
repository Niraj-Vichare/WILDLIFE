import React from 'react'
import "../Images/Image.css"

export const Image = (props) => {
  return (
      <>
    <figure className='image-resizing'>
      <img src={props.src} alt={props.text} className="img-style" style={{ height: `auto`, width: props.width, margin: props.margin }} />

      <h1 className="h1-type">{props.text}</h1>
    </figure>
    </>
  )
}


