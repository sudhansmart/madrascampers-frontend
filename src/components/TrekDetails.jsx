import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquareCheck} from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/images/jawadhu/image1.jpg'
import img2 from '../assets/images/jawadhu/image2.jpg'
import img3 from '../assets/images/jawadhu/image3.jpg'
import img4 from '../assets/images/jawadhu/image4.jpg'
import img5 from '../assets/images/jawadhu/image5.jpg'
import img6 from '../assets/images/jawadhu/image6.jpg'
import icon1 from '../assets/images/jawadhu/stargazing.jpeg'
import icon2 from '../assets/images/jawadhu/observatory.png'
import icon3 from '../assets/images/jawadhu/tentstay.png'
import icon4 from '../assets/images/jawadhu/campfire.png'
import icon5 from '../assets/images/jawadhu/music.png'
import icon6 from '../assets/images/jawadhu/authenticfood.png'
import icon7 from '../assets/images/jawadhu/barbeque.png'
import icon8 from '../assets/images/jawadhu/hiking.png'
import icon9 from '../assets/images/jawadhu/kayaking.png'
import icon10 from '../assets/images/jawadhu/waterfalls.png'
import { Image } from 'react-bootstrap';
import TabDetails from './TabDetails';
import Footer from './Footer';
import BookingPage from './BookingPage';



function TrekDetails({userloggedin,setShowEditModal}) {
      const  Data = [
        {id:1,image:img1},
        {id:2,image:img2},
        {id:3,image:img3},
        {id:4,image:img4},
        {id:5,image:img5},
        {id:6,image:img6},
      ];
      const amenitiesList = [
        'Ample Car Parking',
        'Play Area',
        'Clean Washrooms',
        'Restaurant',
        'Natural Drinking Water',
        'Sanitized Tents',
        'Pillow and Bed Spread',
        'Dining Area',
        'CCTV Surveillance',
        'Private Gated Community',
        'Zero Insects',
        'Backup Shelters',
      ];
    
  const handlebook =()=>{
    setShowEditModal(true);
      console.log("handle book excuted")  
  }   
  return (
    <> 
    <div className='trekdetails container-fluid'>
           <Carousel className='carousal-main'fade >
      {Data.map((item) => (
        <Carousel.Item className='trekdetails-carousal' key={item.id} interval={1500}>
          <img className='carousal-image' src={item.image} alt={item.title} />
          {/* <Carousel.Caption className='trek-carousal-caption'>
                <div className='amenties-icons'>
                 
                  <p><FontAwesomeIcon icon={faBuilding} className="icon-trekdetails"/>  Accommodation</p>
                  <p> <FontAwesomeIcon icon={faUtensils} className="icon-trekdetails"/> Food</p>
                  <p> <FontAwesomeIcon icon={faRestroom} className="icon-trekdetails"/>  Washroom</p>
                  <p>  <FontAwesomeIcon icon={faCarSide} className="icon-trekdetails" /> Parking</p>
                </div>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
      <div className='trek-align-content'>
         <div className='trekdetails-content'>
             <h3>JAWADHU HILLS</h3>
             <p>2 Days - 1 Night </p>
             <hr/>
             <div>
                <h4 className='text-center text-decoration-underline mb-3'>Attractions</h4> 
                  <div className='d-flex justify-content-evenly'>
                <p className='attraction text-center'> <Image src={icon1} className="activity-img" /> <br/> StarGazing</p>
                <p className='attraction text-center'> <Image src={icon2} className="activity-img" /> <br/>Observatory Visit</p>
                <p className='attraction text-center'> <Image src={icon3} className="activity-img" /><br/> TentStay</p>
                <p className='attraction text-center'> <Image src={icon4} className="activity-img"/>  <br/>Campfire</p>
                <p className='attraction text-center'> <Image src={icon5} className="activity-img" /><br/> Music and Dance</p>
                </div>
                <div className='d-flex justify-content-evenly'>
                <p className='attraction text-center'> <Image src={icon6} className="activity-img" /><br/> Authentic Food</p>
                <p className='attraction text-center'> <Image src={icon7} className="activity-img"/> <br/> Barbeque</p>
                <p className='attraction text-center'> <Image src={icon8} className="activity-img"/> <br/> Hiking</p>
                <p className='attraction text-center'><Image src={icon9} className="activity-img"/><br/> Kayaking</p>
                <p className='attraction text-center'> <Image src={icon10} className="activity-img"/> <br/> Waterfalls</p>
                </div>
             </div>
             <hr/>
             <div>
             <h4 className='text-center text-decoration-underline mb-3'>Amenities</h4>
             <div className="amenities-container">
        {amenitiesList.map((amenity, index) => ( 
          <div key={index} className="amenity-checkbox">
            <label>
            <FontAwesomeIcon icon={faSquareCheck} style={{marginRight:'10px'}}/>
              <p className='amenite'> {amenity} </p>
            </label>
          </div>
        ))}
      </div>

             </div>
             <hr/>
              <TabDetails/>
         </div>
            <hr/>
         <div>
            {userloggedin? <BookingPage/>: <div className="box-1 mb-3">
                                            <div className="btn-book btn-one" onClick={handlebook}>
                                              <span >BOOK NOW</span>
                                             </div>
                                          </div>}
                                          </div>
                                          </div>
       
            
    </div>
   
   <Footer/>
    </>
  )
}

export default TrekDetails