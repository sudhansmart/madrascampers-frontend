import React, { useState,useEffect} from 'react'
import { Form,FloatingLabel, Button,Modal} from 'react-bootstrap'
import axios from 'axios';

function FeedbackForm() {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('Id') || '');
  const [showfeedbackModal, setShowfeedbackModal] = useState(false)
    const[formData,setFormData] = useState(
        {
           name:'',
           place :'',
           userid:userId,
           message:'' 
        }
    );
   
    
    const handleOnChange = (e)=>{
      const{name,value} = e.target;
      setFormData((prevstate)=>({...prevstate,
      [name]:value}));
    }


    const handleOnSubmit = async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/feedback/add",formData);
       console.log("Feedback :",formData)
      
       if(response.data === true){
        setShow(true)
        setFormData(
          {
             name:'',
             place:'',
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
  
    const handleOpenFeedback = ()=>{
        setShowfeedbackModal(true)
      }

  return (
    <>
    <button className="feedback-button" onClick={handleOpenFeedback}>
        Feedback
      </button>
    

  <Modal
        show={showfeedbackModal}
        onHide={() => setShowfeedbackModal(false)
        }
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="feedback-container">
         {show? <section className="login-main-wrapper">
      <div className="main-container">
        <div className="login-process">
          <div className="login-main-container">
            <div className="-feedthankyou-wrapper">
              <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" style={{width:'250px'}} /></h1>
              <p>Thanks for Your Valuable feedback </p>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>:<div className='feedback-form'>
           
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
        label="Place Name"
        className="mb-4"
        >
        <Form.Control 
        type="text"
         placeholder="Place"
         name='place'
         value={formData.place}
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
      <Button variant='success' type='submit'>Send</Button>
            </Form>
         </div> }
  </div>
        </Modal.Body>
      </Modal>
 
  </>
  )
}

export default FeedbackForm