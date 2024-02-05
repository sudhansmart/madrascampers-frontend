import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <div className='cta-screen'>
        <div className='cta-content'>
            <p>Your journey begins with a click; your memories await in every booking."</p>
        </div>
        <div className='cta-btn'>
          <Link  to={'/jawadhu'}>
            <Button  className='cta-button'   >Book Now</Button>
            </Link>
        </div>
    </div>
  )
}

export default CallToAction