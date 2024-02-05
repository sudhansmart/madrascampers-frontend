import React, { useState } from 'react'
import NavBar from './NavBar'
import Slide from './Slide'
import CarousalContent from './CarousalContent'
import About from './About'
import Footer from './Footer'
import WelcomeNote from './WelcomeNote'
import Testimonials from './Testimonials'
import HomeCards from './HomeCards'
import NewsLetter from './NewsLetter'
import HomePhotoCard from './HomePhotoCard'
import EnquiryForm from './EnquiryForm'
import CallToAction from './CallToAction'
import InfoCard from './InfoCard'
import HomeCheckAvail from './HomeCheckAvail'




function HomePage() {

 


  return (
    <div  className='homepage' >
      
         <Slide/>
         <WelcomeNote/>
         <HomeCheckAvail/>
         <HomeCards/>
         <Testimonials/>
         <About/>
         <HomePhotoCard/>
         <EnquiryForm/>
         <NewsLetter/>
         <InfoCard/>
         <CallToAction/>
         <Footer/>
 
       </div>
  )
}

export default HomePage