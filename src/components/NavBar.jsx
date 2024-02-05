import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Modal,  Image, ModalFooter } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faUser,faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate} from 'react-router-dom';
import SignUpForm from './SignUpForm'
import OtpScreen from './OtpScreen';
import LoginForm from './Login';
import logo from '../assets/images/logo.png'
import axios from 'axios';



function NavBar({setUserloggedin,setShowEditModal,showEditModal,userloggedin,setAdminLoggedIn}) {
  const [isVisible, setIsVisible] = useState(true);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const[userName,setUserName]= useState(localStorage.getItem('name') ?? '');
  const[admin,setAdmin] = useState(false);
   const [showfeedbackModal, setShowfeedbackModal] = useState(false)


  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    
    };
     
  }, []);

  const handleOpenModal = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowOtpScreen(false);
  
  };

  const handleSignUpSubmit = (data) => {
     axios.post('http://localhost:5000/signin/verify',data)
     .then(response => {
      console.log('Registration successful:', response.data);
      if (response.data === true) {
          alert('Registration Successful! Please check your registered email.');
          setShowOtpScreen(true);
      } else if (response.data === "Server Busy") {
          alert('Server Busy');
      }
   })
  .catch(error => {
       console.error('Registration failed:', error);
  }); 
  };

 
 
  

  const handleLogout = () => {
    setUserName('');
    localStorage.removeItem('token');
    localStorage.removeItem('userAuth');
    localStorage.removeItem('name');
    setUserloggedin(false)
    navigate('/'); 
    
  };
 const handleloginSubmit = async(data)=>{
   try {
      const response = await axios.post('http://localhost:5000/admin/login',data);
      console.log("login data :",response.data)
      if(response.data.role === 'admin'){
        localStorage.setItem('adminName', response.data.name.toString());
        handleCloseModal();
        setAdminLoggedIn(true);
        navigate('/admin');
       }
      
   } catch (error) {
       console.log("error occured in admin login :",error.message)
   }
 }

  const handleOtpVerification = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/signin/verifyotp', data);
       console.log(response.data)
     
      if (response.status === 202) {
        setUserloggedin(true)
        setUserName( response.data.name)
        localStorage.setItem('name', response.data.name.toString());
        localStorage.setItem('Id', response.data.id.toString());
         handleCloseModal();

      } else if ((response.data === false)){
        alert("Please Enter a Valid OTP");
      }
      
    } catch (error) {
      alert("Internal Server Error");
    }
  };

  const navStyle = {
    transition: 'top 0.3s',
    top: isVisible ? '0' : '-100px',
    backgroundColor: isVisible ? 'black' : 'transparent',
    borderRadius: '10px',
  };

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <Navbar collapseOnSelect expand="lg" className="navbar" style={navStyle}>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <Image src={logo} className='logo'/> <span className='brand-name'>Madras Campers</span> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link>
              <NavDropdown title="Explore" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/jawadhu'}>
                  Accommodations
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Videos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/contactus'}>
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
             {!userloggedin? <Nav.Link eventKey={2} onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faUser} /> Signin
              </Nav.Link>:" "}
             {userloggedin?<NavDropdown title={`Welcome, ${userName}`} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                 Logout
                </NavDropdown.Item>
              </NavDropdown> :''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Signup Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        { !admin?<Modal.Body>
          {showOtpScreen ? (
            <OtpScreen handleOtpVerification={handleOtpVerification} />
          )  : (
            <SignUpForm handleSubmit={handleSignUpSubmit} />
          )}
        </Modal.Body>:<LoginForm handleloginSubmit={handleloginSubmit}/>}
       <ModalFooter>
       <FontAwesomeIcon className='admin-icon' onClick={()=>!admin? setAdmin(true): setAdmin(false)} icon={faUserTie} />
       </ModalFooter>
      </Modal>
      {/* Feedback Modal */}
      <Modal show={showfeedbackModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
       <Modal.Body>
         
        </Modal.Body>
       <ModalFooter>
       <FontAwesomeIcon  icon={faUserTie} />
       </ModalFooter>
      </Modal>
    </div>
  );
}

export default NavBar;
