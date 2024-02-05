import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const OrderReviewPage = ({ guests}) => {
  const[showfinal,setShowfinal] = useState(false)
  const totalGuests =  +guests.numOfMales + +guests.numOfFemales;
  const adultPrice = totalGuests*2500;
  const childPrice = +guests.numOfChild*2500;
  const TotalPrice =  adultPrice + childPrice ;
  const[orderNo,setOrderNo] = useState('')
 
  const [formData] = useState(
    { 
      price : TotalPrice,
      duration :  guests.duration,
      id: guests.tripId ,
      destination : guests.destination,
    },
  );

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handlePlaceOrder = async (e)=>{
      e.preventDefault();
     
      const response = await axios.post("https://madrascampers.onrender.com/book/confirmbooking",formData)
      console.log("summary :",response)
      if(response.status === 201){
        setShowfinal(true)
        setOrderNo(response.data.orderId)
      }
  }

  return (
    <>
   {showfinal?    <div className='card-body'>
    <div className="card">
    <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
      <i className="checkmark">✓</i>
    </div>
    <h1>Success</h1>
    <p>Your Order Placed Successfully;<br/> we'll be in touch shortly! <br/>Your Order No : {orderNo}</p>
  </div>
  </div>
     : <Container  className='orderreview bg-white'>
      <div className="order-header">
        <h3>Order Review</h3>
        <hr/>
      </div>
    
        <div className='orderreview-content' >
          <div className='orderdetails'>
            <h5>Order Details</h5>
            <p>{formData.destination}</p>
            <p>{formData.duration}</p>
            <p>Guests - {totalGuests} Adults, {guests.numOfChild} Children</p>
            <p>Check-in : {guests.checkinDate} - Check-Out : {guests.checkoutDate}</p>
          </div>
          <div className='Pricedetails'>
            <h5>Price Details</h5>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p>Adult Price- </p><p>{adultPrice}</p>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p>Children Price- </p><p>{childPrice}</p>
            </div>
       
            <hr />
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Total Price - </p><p>{TotalPrice}</p>
            </div>
            <hr/>
          </div>
        </div>
      
      <div className="order-footer">
        <Form.Check
          type='checkbox'
          label='I agree to the Madras Campers Terms and Conditions'
          checked={termsAccepted}
          onChange={handleTermsChange}
        />
        <Button
          variant='success'
          onClick={ handlePlaceOrder}
          disabled={!termsAccepted}
        >
          Place Order
        </Button>
      </div>
      <div>
        <h5>Cancellation Policy</h5>
        <p>
          If you cancel at least 1 week before your check-in day and time,
          you’ll receive a full refund (minus service fees). If you cancel within
          the 1 week before check-in, there will be no refund.
        </p>
      </div>
    </Container> 
   }
  </>
  );
};



export default OrderReviewPage;
