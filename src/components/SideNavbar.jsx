import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown,   Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo.png'

function NavBar({setAdminLoggedIn}) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [userName, setUserName] = useState(localStorage.getItem('adminName') || '');
  // const [adminLoggedIn,setAdminLoggedIn] = useState(localStorage.getItem('adminAuth') === 'true');
   

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

 
    const handleLogout = () => {
      setUserName('');
      setAdminLoggedIn(false)
      navigate('/admin'); 
      localStorage.removeItem('token');
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminName');
      
      
    };


  const navStyle = {
    transition: 'top 0.3s',
    top: isVisible ? '0' : '-100px',
    backgroundColor: isVisible ? '#000000d1' : 'transparent',
    borderRadius: '10px',
  };

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <Navbar collapseOnSelect expand="lg" className="navbar" style={navStyle}>
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} className='logo'/> <span className='brand-name'>Madras Campers</span> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/admin'}>
                Home
              </Nav.Link>
              <Nav.Link href="#">Manage Contents</Nav.Link>
              <NavDropdown title="Explore" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/newsletter'}>
                  NewsLetter List
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
              {/* <Nav.Link eventKey={2} onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faUser} /> Signin
              </Nav.Link> */}
            <NavDropdown title={`Welcome, ${userName}`} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                 Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
