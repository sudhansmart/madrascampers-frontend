import React from 'react'
import  { useState, useEffect } from 'react';
import slide1 from '../assets/images/homeslide1.jpg'
import slide2 from '../assets/images/homeslide2.jpg'
import slide3 from '../assets/images/homeslide3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaperPlane   } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Slide() {
  const [bgIndex, setBgIndex] = useState(0);
  const backgroundImages = [slide1, slide2, slide3];
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[bgIndex]})`,
    
  };

  return (
    <div className="slide" style={backgroundStyle}>
      <div className="slidecontent">
              <div className='slide-text'>
                <p > Welcome to Madras Campers</p>
                <h1 className='slide-Title'>Travel & Adventure <br/>Camping Experts</h1> 
                <div> 
                <Link to="/jawadhu">
                <button className="explore-more-btn" >
                   Explore Destinations  <FontAwesomeIcon icon={faPaperPlane} style={{fontSize:'15px'}}/> 
                </button>
                  </Link>
                  </div>
              </div>
      </div>
     
    </div>
  );
}

export default Slide