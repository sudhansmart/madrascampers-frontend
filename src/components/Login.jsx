import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginForm = ({ handleloginSubmit }) => {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    userid: '',
    password: '',
    server: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (userid) => {
    const useridPattern = /^[a-zA-Z0-9._-]/;
    return useridPattern.test(userid);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^[a-zA-Z0-9.@_-]{5,}$/; // Adjusted password pattern for minimum length
    return passwordPattern.test(password);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const useridValid = validateEmail(formData.userid);
    const passwordValid = validatePassword(formData.password);

    setErrors({
      userid: useridValid ? '' : 'Please Enter the Admin id ',
      password: passwordValid ? '' : 'Password must be at least 5 characters',
      server: '',
    });

    if (useridValid && passwordValid) {
      try {
        await handleloginSubmit(formData);
        setFormData({
          userid: '',
          password: '',
        });
      } catch (error) {
        console.error("Error occurred in admin login:", error.message);
        setErrors((prevErrors) => ({ ...prevErrors, server: 'Server error occurred' }));
      }
    }
  };

  return (
    <Container fluid className='SignUpForm bg-white'>
      <form className="Form container">
        <div className="mb-3">
          <label className="form-label">Admin ID:</label>
          <input
            type="email"
            name="userid"
            className="form-control"
            value={formData.userid}
            onChange={handleInputChange}
          />
          {errors.userid && <div className="text-danger">{errors.userid}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        {errors.server && <div className="text-danger">{errors.server}</div>}
        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
        
      </form>
    </Container>
  );
};

export default LoginForm;
