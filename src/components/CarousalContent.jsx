import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/package1.jpg';
import img2 from '../assets/images/package2.webp';
import img3 from '../assets/images/package3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function CarousalContent() {
  const contentData = [
    { id: 1, title: 'Jawadhu Hills', image: img1, description: 'Welcome to the majestic and enchanting Jawadhu Hills, nestled in the verdant heart of Tamil Nadu. Here, nature is a symphony of grace and beauty, offering a haven for travellers to escape the bustle of daily life and immerse themselves in the sublime magic of the world around us.' },
    { id: 2, title: 'Yelagiri', image: img2, description: 'Yelagiri is one of the famous places for trekkers in India. The hill station is located at a height of 1410.6 meters above sea level. Yelagiri comprises 14 hamlets and a number of temples spread over several hills.' },
    { id: 3, title: 'Kodaikanal', image: img3, description: 'The literal meaning of Kodaikanal is the gift of the forest and the beautiful hill station stands true to it. One of the most popular tourist spots of South India, Kodaikanal is blessed with thrilling trekking routes, pristine waterfalls, serene lakes, ancient caves, exquisite temples and grand churches.' },
  ];


  return (
    <Carousel className='home-carousal conatainer ' fade 
                          >
      {contentData.map((item) => (
        
        <Carousel.Item style={{display:'flex'}} key={item.id} interval={2000}>
          <img className='carousal-image' src={item.image} alt={item.title} />
          <Carousel.Caption style={{paddingBottom:"40px"}}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="explore-more-btn" >
                    More  <FontAwesomeIcon icon={faArrowRightLong} style={{fontSize:'15px'}}/> 
                </button>
          </Carousel.Caption>
        </Carousel.Item>

      ))}
    </Carousel>
  );
}

export default CarousalContent;
