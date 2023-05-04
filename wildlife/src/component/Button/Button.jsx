import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES=['btn--primary','btn--outline'];

const SIZE=['btn--medium','btn--large'];

export const Button=({
    children,
    margin,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link,
    padding_right,
    family,
    color,text_color
})=> {
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonSize=STYLES.includes(buttonSize)?buttonSize:STYLES[0];
    
    return(
        <Link to={link} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} style={{margin:margin ,paddingRight:padding_right,fontFamily:family,background:color,color:text_color}}>
                {children}
            </button>
        </Link>
    )
}
