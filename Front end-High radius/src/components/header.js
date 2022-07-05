import React from 'react'
import img1 from './images/Group.svg';
import img2 from './images/logo.png';
import img3 from './images/2.jpg';
import './header.css';


export default function header() {
  return (
    <div>
      <div className='Box'>
        <img src={img1} alt="logo" className = "img1" style={{marginRight: "20%"}} />
        <img src={img2} alt="logo" className = "img" style={{height: "50px"}}/>
        <img />
      </div>
      <div style={{color: "white", margin: 30}}>Invoice List</div>
    </div>
  )
}
