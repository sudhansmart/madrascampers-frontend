import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CallToAction() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling
    });
  };

  return (
    <div className='cta-screen'>
      <div className='cta-content'>
        <p>Your journey begins with a click; your memories await in every booking."</p>
      </div>
      <div className='cta-btn'>
        <Link to={'/jawadhu'} onClick={scrollToTop}>
          <Button className='cta-button'>Book Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
