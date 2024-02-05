import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../assets/images/avatar1.png'
import img2 from '../assets/images/avatar2.png'
import img3 from '../assets/images/avatar3.png'

function Testimonials() {
    const [data, setData] = useState([
        {
            id: 1,
            img: img1,
            description: "Amazing experience. Must visit place !! Nice host !! Just wow trekking experience. Observatory - Asia's second largest one. It was amazing to witness the same. Tent stay at night , the camp fire and the food , all just wow. Beautiful weather. Amazing experience with the kayaking !! And finally the bheeman falls experience. Everything was planned in a right way to experience everything in available time. Must visit with family and friends !!",
            name: "Sandeep Singh",
       
        },
        {
            id: 2,
            img:img2,
            description: "Excellent Trip with Fun overloaded, Madras Camper Mr Karunanidhi Organised very effectively without any discomfort. Nice memories to cherish like Tent stay without any Power source, Relaxed in the camp fire and View point etc Especially Home made food  good . once again Thanks Madras Camper & Karunanidhi 👍.",
            name: "Arun Kumar",
         
        },
        {
            id: 3,
            img: img3,
            description: "It's a nice trip.Totally different experience of fun..adventure and excitement.Madras campers Mr.Karnanidhi organized amazingly on every moment.Its a Leisure trip with Less Expensive and Easy Travel.Tent stay without any light source..,Camp Fire point..,Neat and clean Rest rooms..,near by visiting places like observatory point..Beeman falls...,Home made food...everything we can enjoy with a peaceful mindset...Thanks Madras Campers And Mr.Karnanidhi...We are sure we will join you asap for a Family Trip...",
            name: 'Kuppu B',
   
        }
    ]);

    return (
        <Container fluid className='testimonial'>
            {data.map((item) => (
                <figure className="snip1157" key={item.id}>
                    <blockquote>{item.description}
                        <div className="arrow"></div>
                    </blockquote>
                    <div className='d-flex '>
                    <img src={item.img} alt={`sq-sample${item.id}`} /> <h5 className="author" style={{paddingLeft:'10px'}}>{item.name} <br /></h5>
                    </div>
                </figure>
            ))}
        </Container >
    );
}

export default Testimonials;
