import React from 'react'
import { useState } from 'react';
import Map from '../../component/Map/Map';
import National from '../../component/National_Parks/National';
import '../Water/Water.css'


const Water=()=> {
  const stateMap={
    'gj':'Gujarat',
    'an':"Andaman and Nicobar Islands",
    'ap':"Andhra Pradesh",
    'ar':"Assam",
    'br':"Bihar",
    'ct':"Chhattisgrah",
    'dn':"Dadra and Nagar Haveli",
    'dl':'Delhi',
    'hr':"Haryana",
    'hp':"Himachal Pradesh",
    'jk':"Jammu Kashmir",
    'jh':"Jharkhand",
    'ka':"Karnataka",
    'kl':"Kerala",
    'ld':'Lakshadweep',
    'mp':'Madhya Pradesh',
    'mh':"Maharashtra",
    'mz':"Mizoram",
    'nl':'Nagaland',
    'or':'Odisha',
    'pb':"Punjab",
    'rj':'Rajasthan',
    'sk':"Sikkim",
    'tn':"Tamil Nadu",
    'tg':"Telangana",
    'tr':"Tripura",
    'up':'Uttar Pradesh',
    'wb':'West Bengal',
    'ut':"Uttarakhand",
    'mn':"Manipur",
    'ml':"Meghalaya",
    '':'You clicked on water'
  }
  const [state,setState]=useState('');
  const handlecommand=(event)=>{
    event.preventDefault();
    setState(event.target.id);
  }
  return (
    <div className='main-div'>
      <figure className='figure-style'>
        <Map value={state} onClick={event=> {handlecommand(event)}}/>
      </figure>
      <div className="info">
      <h1>STATE   <span>{stateMap[state]}</span></h1>
      </div>
      <div className="four">
          <h1>The National Avaliable in states are:</h1>
          <h2><National clicks={stateMap[state]}/></h2>
      </div>      
    </div>
  )
}

export default Water