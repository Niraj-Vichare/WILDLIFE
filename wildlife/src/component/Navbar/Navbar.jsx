import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar=()=> {
  const [toggle,settoggle]=useState(false);
  const [show,setshow]=useState(true);


// 
  const handleFunction=()=>{
    if(toggle){
      settoggle(false);
    }
    else{
      settoggle(true);
    }
  }

  const CloseFunction=()=>{
    settoggle(false)
  }
 


  const ShowIcons=()=>{
    if(window.innerWidth<=960){
      setshow(false);
    }else{
      setshow(true);
    }
  }

  useEffect(()=>{ShowIcons();},[]);
  
  window.addEventListener('resize',ShowIcons);

  return (
    <div className='navbar-div'>
      <div className='logo-style'>
        <h1><Link className="logo-link" to='/' onClick={CloseFunction}>Wildlife<i className='fab fa-typo3' /></Link></h1>
      </div>
      <div className='link-div'>
        <ul className={toggle?'nav-menu active':'nav-menu unorder-style'}>
          <li><Link className='link-style' to='/animal' onClick={CloseFunction}>ANIMALS</Link></li>
          {/* <li><Link to='/land' className='link-style' onClick={CloseFunction}>Land</Link></li> */}
          <li><Link to='/water' className='link-style' onClick={CloseFunction}>PARKS</Link></li>
          <li><Link to='/wildlife' className='link-style' onClick={CloseFunction}>WILDLIFE</Link></li>
          <li><Link to='/contact' className='link-style' onClick={CloseFunction}>CONTACT</Link></li>
        </ul>
      </div>
      <div onClick={handleFunction} className='menu-icon'>
        <i className={toggle?'fas fa-times':'fas fa-bars'}/>
      </div>


    </div>
  )
}

export default Navbar