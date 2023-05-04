import React from 'react'
import { Image } from '../Images/Image'
import '../Card/Card.css'
import { Link } from 'react-router-dom'
import {Button} from '../Button/Button'

const Card = (props) => {
  return (
    <div>
      <li className='cards__item'>
        <Link className="cards__item__link" to={props.path}>
          <figure className='cards__item__pic__wrap' data-category={props.label}>
            <Image src={props.src} alt="Picture loading" className="cards__item__img" width="400px" margin="15px"/>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <Button link="wildlife" children="Read More" className="button-style" margin="20px"/>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default Card