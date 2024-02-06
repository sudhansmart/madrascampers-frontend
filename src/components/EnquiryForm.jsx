import React, { useState,useEffect} from 'react'
import { Form,FloatingLabel, Button,} from 'react-bootstrap'
import axios from 'axios';
function EnquiryForm() {
  const [show, setShow] = useState(false);
    const[formData,setFormData] = useState(
        {
           name:'',
           email:'',
           phoneNumber:'',
           message:'' 
        }
    );
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    
    const handleOnChange = (e)=>{
      const{name,value} = e.target;
      setFormData((prevstate)=>({...prevstate,
      [name]:value}));

      if (name === 'phoneNumber') {
        setIsPhoneNumberValid(validatePhoneNumber(value));
      }
    }

    const validatePhoneNumber = (phoneNumber) => {
      return /^\d{10}$/.test(phoneNumber);
    };
  
    const handleOnSubmit = async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post("https://madrascampers.onrender.com/enquiry/add",formData);
       console.log("enquiry :",response)
       if(response.data === true){
        setShow(true)
        setFormData(
          {
             name:'',
             email:'',
             phoneNumber:'',
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
    <div className="wave-container">
         <div className='wave-content'>
            <h3>Connect With <span style={{color:'#abc638'}}>Nature</span>  <br/>Through <span style={{color:'gray'}}>Adventure</span></h3>
         </div>
         {show? <section className="login-main-wrapper">
      <div className="main-container">
        <div className="login-process">
          <div className="login-main-container">
            <div className="thankyou-wrapper">
              <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
              <p>for contacting us, we will get in touch with you soon... </p>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>:<div className='wave-form'>
            <h3 className='mb-3'>Have a Query? Don't Worry!!<br/>Write to Us...<br/>We Will Assist you...</h3>
            <Form onSubmit={handleOnSubmit}>
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
        <FloatingLabel controlId="floatingInput3" label="Phone Number">
        <Form.Control
         type="text" 
         placeholder="number" 
         name='phoneNumber'
         value={formData.phoneNumber}
         onChange={handleOnChange}
         required/>
          {!isPhoneNumberValid && (
          <Form.Text className="text-danger">
            Please enter a valid 10-digit phone number.
          </Form.Text>
        )}
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
      <Button variant='success' type='submit'>Send</Button>
            </Form>
         </div> }
  </div>
 
  </>
  )
}

export default EnquiryForm