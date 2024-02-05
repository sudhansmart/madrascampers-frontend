import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Form ,FloatingLabel} from 'react-bootstrap';

function ContactUs() {
  const [show, setShow] = useState(false);
  const[formData,setFormData] = useState(
    {
       name:'',
       email:'',
       message:'' 
    }
  );

  const handleOnChange = (e)=>{
    const{name,value} = e.target;
    setFormData((prevstate)=>({...prevstate,
    [name]:value}));
    };
    const handleOnSubmit = async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/enquiry/add",formData);
       console.log("enquiry :",response)
       if(response.data === true){
        setShow(true)
        setFormData(
          {
             name:'',
             email:'',
             message:'' 
          }
      )
      const timeoutId = setTimeout(() => {
        setShow(false)
      }, 5000);
      return () => clearTimeout(timeoutId);
       }
       else {
          alert("Please try after Sometimes")
       }
      } catch (error) {
        console.log("Error Occured in Enquiry Form :",error.message)
      }
    }

  return (
    <>

    <div className="contactus container-fluid">
      <div className="text-center">
        <h1>Contact Us</h1>
        <div>
        Thank you for your interest in contacting us! We value your feedback and inquiries. 
         
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="address-line d-flex">
            <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
            <div className="contact-info">
              <div className="contact-info-title">Address</div>
              <div style={{color:'white'}}>12th block,Door No -TH 174,</div>
              <div style={{color:'white'}}>Jains Apartment Road,<br/>Madambakkam,Rajakilpakkam,</div>
              <div style={{color:'white'}}>Chennai-600073, Tamilnadu.</div>
            </div>
          </div>
          <div className="address-line d-flex">
          <FontAwesomeIcon icon={faPhone} className="icon"/>
            <div className="contact-info">
              <div className="contact-info-title">Phone</div>
              <div><span style={{color:'white'}}>+91 9677716818 <br/>+91 9841431413</span></div>
            </div>
          </div>
          <div className="address-line d-flex">
          <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            <div className="contact-info">
              <div className="contact-info-title">Email</div>
              <div>contact@madrascampers.com</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Form  onSubmit={handleOnSubmit}>
            <div className="form-container">
              <h2>Send Message</h2>
              <FloatingLabel
             controlId="floatingInput1"
              label="Name"
             className="mb-4"
         >
         <Form.Control
          type="text" 
          placeholder="enter your Name" 
          name='name'
          value={formData.name}
          onChange={handleOnChange}
          required/>
         </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput2"
        label="Email address"
        className="mb-4"
        >
        <Form.Control 
        type="email"
         placeholder="name@example.com"
         name='email'
         value={formData.email}
        onChange={handleOnChange}
        required/>
        </FloatingLabel>
       
    
        <FloatingLabel   className="mt-4" controlId="floatingTextarea2" label="Type Your messeage">
        <Form.Control
        className='mb-4'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          name='message'
          value={formData.message}
         onChange={handleOnChange}
         required
        />
      </FloatingLabel>
              <button type="submit" className="btn btn-primary send-btn">Send</button>
            </div>
          </Form>

           {show?  <h5>"Thank you for writing to us. We'll reach out shortly."</h5> : ' '} 
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
