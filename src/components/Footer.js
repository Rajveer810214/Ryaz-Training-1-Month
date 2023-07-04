import React from 'react';
import instagram from '../Images/instagram.jpeg';
import github from '../Images/github.png';
import '../App.css';
function Footer () {
  return (
    <div className='footer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monsteerat' }}>
      <h2>Subscribe to get offers in your inbox</h2>
      <div > <input type="email" placeholder='enter your email' /><button>Subscribe</button></div>
      <p><span>Buy T-Shirts</span> <span>Women</span> <span>Men</span> <span>About </span><span>Contact</span></p>
      <div className='icons' >
        <a href="https://www.linkedin.com/in/rajveer-singh-sidhu-534a25232"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /></a>
        <a href="https://github.com/Rajveer810214/"> <img src={github} alt="" /></a>
        <a href="https://www.instagram.com/rajveer_sidhu_12/"><img src={instagram} alt="" /></a>
      </div>
      <div className='own'>© 2023 Copyright:<a href='https://rajveersidhu.vercel.app'><span style={{ textDecoration: 'none' }}> 💖By Rajveer Singh</span></a></div>
    </div>
  );
}

export default Footer;
