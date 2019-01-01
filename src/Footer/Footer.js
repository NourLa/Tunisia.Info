import React from 'react';
import './Footer.css';

const Footer=()=>{
  return(
    <div className="containerFooter">
    <div className='Footer'>
      <div className='Footer-Logo'>
        <img className='footerLogoImg' src=''/>
      </div>
      <div className='footerLinks'>
        <ul className="list">
        <li>Home</li>
        <li>History</li>
        <li>Tourism</li>
        <li>Transport</li>
        </ul>
      </div>
    
        </div><hr className="lineH"/>
      <div className='copyright'>
        <h4>
        © Tunisia.info, 2018 Made with love by Nour
        , Rami & Yassmine
        </h4>
   
      </div>
    </div>
  )
}

export default Footer;