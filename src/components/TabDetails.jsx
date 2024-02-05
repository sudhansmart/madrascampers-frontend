import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const TabDetails = () => {
  return (
    <div className="itinerary container mt-3">
      <h2></h2>
      <br />
      <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
        <Tab eventKey="overview" title="Overview">
          <br />
          <h3>Hilltop Camping</h3>
           <p className='overview-text'>Unwind in serene tent accommodations, nestled amidst tranquil surroundings, promising a peaceful retreat. Embrace a restful night's sleep like never before, cradled by nature's calming embrace, ensuring an unparalleled rejuvenation.</p>
           <hr/>
          <h3>Astro Adventures</h3>
          <p className='overview-text'>Begin your odyssey at the second largest observatory in Asia, where the skies unravel their celestial secrets. Witness stars, planets, and galaxies adorn the canvas of the night, a mesmerizing spectacle that sparks wonder and ignites curiosity.</p>
          <hr/>
          <h3>Nature's Arena</h3>
          <p className='overview-text'>Step into a sprawling natural lawn, a haven for team building and collaborative exercises amidst nature's embrace. Engage in activities crafted to strengthen unity and camaraderie, providing a rejuvenating break within lush surroundings, alleviating stress, and building team spirit.</p>
          <hr />
           <h3>Starry Gaze</h3>
           <p className='overview-text'>Discover the wonders of stargazing in a low-light pollution zone, offering pristine skies for cosmic marvels. Immerse yourself in the captivating symphony of the night sky amidst nature's tranquility, fostering a unique human connection with the celestial wonders.</p>
           <hr />
           <h3>Relaxing kayaking</h3>
           <p className='overview-text'>Kayaking on a calm lake is a serene and recreational water activity. Paddling across still waters offers a peaceful escape and an opportunity to connect with nature in a safe, controlled environment.</p>
           <hr/>
           <h3>Aqua Rush</h3>
           <p className='overview-text'>Experience the natural refreshment of a mountain waterfall bath—an invigorating way to cool down. Amidst the pristine mountain landscape, the cascading waters offer a revitalizing escape, providing a refreshing respite and an enjoyable break from the corporate hustle.</p>
           <hr />
            <h3>Starlit Beats</h3>
            <p className='overview-text'>Experience the magic of Jawadhu Hills at our 'Starlit Beats and BBQ Retreat.' Dance under the stars, revel in good music, and savor a barbecue party by the campfire. An unforgettable night awaits, where memories are made amid the warmth of the firelight.</p>
            
        
        
        </Tab>
        <Tab eventKey="itinerary" title="Itinerary">
          <br />
          <h3>Itinerary</h3>
          <div className="itinerary">  
         <div className="itinerary-day">
           <h2>Day 1</h2>
            <h4>Observatory Visit</h4>
            <p>Time: 4:00 PM - 7:00 PM </p>
            <p>Description: 
              <li>Scientific Presentation</li>
              <li>Demonstration of Telescope function</li>
              <li>Explore planets and Moon on 9-inch Telescope</li>
              <li>Tea/coffee with cookies</li>
          
              </p><br />
              <h4>Camping </h4>
            <p>Time: 7:30 PM  </p>
            <p>Description: 
              <li>Tent Allotment</li>
              <li>Camp Fire,Music,Dance </li>
              <li>Dinner</li>
              <li>Stargazing</li>
              <li>Peaceful Sleep in Tent</li>
             
              </p>
           </div>
           <div className="itinerary-day">
           <h2>Day 2</h2>
            <h4>Hiking</h4>
            <p>Time: 6:30 AM</p>
            <p>Description: 
              <li>Wakeup Call</li>
              <li>Tea/Coffee</li>
              <li>Hiking Starts</li>
              <li>Breakfast</li>
             
              </p><br />
              <h4>Kayaking</h4>
            <p>Time: 9:00 AM</p>
            <p>Description: 
              <li>Kayaking in Private Lake</li>
              </p>
              <br />
              <h4>Waterfalls</h4>
            <p>Time: 12:00 PM</p>
            <p>Description: 
              <li>visit waterfalls</li>
              <li>Back to Camp</li>
              <li>Lunch</li>
              <li>Check-out 3 PM - 4 PM</li>
              </p>

           </div>
          
        </div>
          
        </Tab>
        <Tab eventKey="ourpackage" title="Our Packages">
          <br />
          <h3>Package Details</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam.
          </p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <br />
          <h3>Reviews</h3>
           <p>----------customers feedbacks ---------------</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabDetails;
