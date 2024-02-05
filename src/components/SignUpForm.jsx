import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const SignUpForm = ({  handleSubmit }) => {
  const [emailValid, setEmailValid ] = useState(true);
  const [phoneValid, setPhoneValid ] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber:''
  });

  const validateEmail = (email) => {
    const emailValid = email.includes('@') && email.includes('.');
    setEmailValid(emailValid);
    return emailValid;
  }; 
  const validatePhone = (phone) => {
    // Ensure the phone number has exactly 10 characters and contains only digits
    const phoneValid = /^\d{10}$/.test(phone);
     setPhoneValid(phoneValid);
     console.log("Phone : ",phoneValid)
    return phoneValid;
};

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {email,phonenumber} = formData;
    
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phonenumber);
  

    if (isEmailValid && isPhoneValid) {
      console.log('Form submitted:', formData);
    //   handleCloseModal();
    
      handleSubmit(formData);
      setFormData({
        name: "",
        email: "",
        phonenumber:""
       });
    } else {
      console.log('Form submission is invalid');
    }
  };

  return (
    <Container fluid className='SignUpForm bg-white'>
      <form className="Form container" onSubmit={handleOnSubmit}>
        <div className="Form-controls" >
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name='name'
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              name='email'
              value={formData.email}
              onChange={handleOnChange}
              required
            />
            {!emailValid && <span className="text-danger">Please enter a valid email</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input
              type="number"
              className="form-control"
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleOnChange}
              required
            />
            {!phoneValid && <span className="text-danger">Please enter a valid Phone Number</span>}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default SignUpForm;
