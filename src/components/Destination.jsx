import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faRightLong } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/images/package1.jpg';
import img2 from '../assets/images/package2.webp';
import img3 from '../assets/images/package3.jpg';
import img4 from '../assets/images/package4.jpeg';
import CheckAvailability from './CheckAvailablity';
import { useNavigate } from 'react-router-dom';


function Destination() {
     const navigate =useNavigate()
  const cardData = [
    {
      id: 1,
      title: 'JAWADHU HILLS',
      image: img1,
      location: 'Jawadhu Hills, Tamilnadu',
    },
    {
      id: 2,
      title: 'YELAGIRI',
      image: img2,
      location: 'Yelagiri, Tamilnadu',
    },
    {
      id: 3,
      title: 'KODAIKANAL',
      image: img3,
      location: 'Kodaikanal, Tamilnadu',
    },
    {
      id: 4,
      title: 'OOTY',
      image: img4,
      location: 'Ooty, Tamilnadu',
    },
  ];

  const handleCardClick = (id) => {
      navigate('/jawadhu')
   
  };
  
  

  return (
    <>
 
    <CheckAvailability/>
    <Container fluid className="destination">
      <h3 className="destination-head">Destinations around You</h3>
      <Row xs={1} md={2} className="g-5">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card
              className="destination-card"
              onClick={() => handleCardClick(card.id)}
            >
              <Card.Img
                variant="top"
                src={card.image}
                style={{
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '35px 35px 20px 0px',
                  padding: '5px',
                }}
              />
              <Card.Body>
                <Card.Title>{card.title}---Activity Name---</Card.Title>
                <Card.Text>-------Highlights Here------------</Card.Text>
                <Card.Text>-------Highlights Here------------</Card.Text>
                <Card.Text>-------Highlights Here------------</Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faLocationDot} /> {card.location}
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default Destination;
