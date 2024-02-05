import React from 'react';
import image from '../assets/images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCampground  } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png'

function About() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img className='about-image' src = {image}alt="Company Logo" />
      </div>
      <div className="about-content">
        {/* <Image src={logo} style={{ width: '150px',
    height: '150px'}}/> */}
        <h2 className='about-title' style={{fontSize:'50px'}}>About Madras Campers</h2>
        <p>
        We're a passionate team of enthusiastic adventurers dedicated to crafting exclusive destinations for your ultimate enjoyment of nature in its purest form while cultivating a profound appreciation for the wonders of the universe. Our mission is to foster self-discovery, rejuvenation, and promote awareness about protecting our planet and preserving nature. Through our curated experiences, we aim to inspire a deeper connection with the natural world while encouraging a sense of responsibility towards its conservation and sustainable future.
        </p>
        {/* Add more content about your company here */}
      </div>
    </div>
  );
}

export default About;
