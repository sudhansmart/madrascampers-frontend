import React, { useState } from 'react';
import img from '../assets/images/adventure.jpg';
import { useNavigate } from 'react-router-dom';

function HomeCards() {
  const navigate = useNavigate()
  const [content, setContent] = useState([
    {
      img: img,
      name: 'Jawadhu Hills',
      location: 'Jawadhu, Tamilnadu',
      description: '',
      duration: '2 Days - 1 Night',
      price: 2500
    },
    {
      img: 'https://2.bp.blogspot.com/-V3VUp2gcE4U/XCno8meDPsI/AAAAAAAAGGk/wxpqih4QxqsvYnMjPDxKqenFt61sW6NbQCLcBGAs/s1600/javadi%2Bhills%2B01.JPG',
      name: 'Kodaikanal',
      location: 'Kodaikanal, Tamilnadu',
      description: '',
      duration: '3 Days - 2 Nights',
      price: 5500
    },
    {
      img: 'https://thiruvannamalai.in/wp-content/uploads/2019/06/jawadhu_hills_kodai_festival_tiruvannamalai_2019_pic_img0007.jpg',
      name: 'Ooty',
      location: 'Ooty, Tamilnadu',
      description: '',
      duration: '3 Days - 2 Nights',
      price: 5500
    },
  ]);

  return (
    <div  className='homecards container-fluid mt-2  d-flex flex-wrap justify-content-center align-items-center' >
      {content.map((data, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="position-relative p-5">
            <img
              src={data.img}
              alt="random image"
              className="object-cover object-center rounded-lg shadow-md"
              style={{ borderRadius: '20px', width: '100%', height: '350px' }}
            />
            <div
              className="overlay position-absolute "
              style={{ top: '290px', width: 'auto' }}
            >
              <div className="hme bg-white p-2 rounded-lg shadow-lg" style={{ borderRadius: '10px' }} onClick={()=> data.name === 'Jawadhu Hills'? navigate('/jawadhu' ): alert("Selected location Coming soon!!") }>
                <div className="d-flex align-items-baseline">
                  <span className="bg-info text-white text-xs px-2 inline-block rounded-full uppercase font-weight-bold" style={{ marginRight: '5px' }}>
                    Exclusive
                  </span>
                  <div className="ml-2 text-secondary uppercase text-xs font-weight-bold">
                    {data.location}
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-weight-bold uppercase leading-tight">
                  {data.name}
                </h4>
                <div className="mt-1">
                  {data.price}
                  <span className="text-secondary text-sm"> /Person</span>
                </div>

                <div className="mt-4">
                  <span className="text-info text-md font-weight-bold">4/5 ratings </span>
                  <span className="text-sm text-secondary">(based on 234 ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCards;
