import React from 'react'
import { Button, Image } from 'react-bootstrap'
import img1 from '../assets/images/PhotoCollege/pic1.jpg'
import img2 from '../assets/images/PhotoCollege/pic2.jpg'
import img3 from '../assets/images/PhotoCollege/pic3.jpg'
import img4 from '../assets/images/PhotoCollege/pic4.jpg'
import img5 from '../assets/images/PhotoCollege/pic5.jpg'
import img6 from '../assets/images/PhotoCollege/pic6.jpg'
import img7 from '../assets/images/PhotoCollege/pic7.jpg'
import img8 from '../assets/images/PhotoCollege/pic8.jpg'
import { Link } from 'react-router-dom'

function HomePhotoCard() {
  return (
    <div className='homephotocard'>
         <Image src={img1}className='hmecards1'/>
           <Image src={img2}className='hmecards2'/>
          <Image src={img3}className='hmecards3'/>
           <Image src={img4}className='hmecards4'/>
           <Image src={img5}className='hmecards5'/>
         <Image src={img6}className='hmecards6'/>
           <Image src={img7}className='hmecards7'/> 
          <Image src={img8}className='hmecards8'/>
          <Button as={Link}  to={'/Jawadhu'} className='hmecards9' variant='success'>Explore Now</Button>
        



    </div>
  )
}

export default HomePhotoCard
