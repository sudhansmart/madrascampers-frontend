import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import img1 from '../assets/images/newslide1.jpg'
import img2 from '../assets/images/ooty.jpg'
import img3 from '../assets/images/kodaikanal.jpg'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const HomeNewSlide = () => {
    const slides = [
        {
          image: img1,
            text:  "JAWADHU HILLS",
            additional:"Explore The Bliss"
        },
        {
          image:img2,
             
          text:  "OOTY ",
          additional: "Coming soon!!" ,
        },
        {
          image:img3,
            text:  "KODAIKANAL ",
            additional: "Coming soon!!" ,
        },
        // {
        //   image:
        //     'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
        //     text:  "Sample -3"
        // },
        // {
        //   image:
        //     'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        //     text:  "Sample -4"
        // }
      ];
      
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [current]);
  

  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='newslider-main'>
    <section className='new-slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> 
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      {/* <FontAwesomeIcon icon={faArrowAltCircleLeft} className='left-arrow' onClick={prevSlide}/>
      <FontAwesomeIcon icon={faArrowAltCircleRight} className='right-arrow' onClick={nextSlide}/> */}
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'new-slide active' : 'new-slide'}
            key={index}
          >
            {index === current && (
                <div>
                     <img src={slide.image} alt='travel image' className='new-image' /> 
                     <div className="newslider-text">{slide.text} <br/></div> 
                     <div className="newslider-text2">{slide.additional}</div>
                </div>
             
               
            )}
             
          </div>
        );
      })}
    </section>
    </div>
  );
};

export default HomeNewSlide;
