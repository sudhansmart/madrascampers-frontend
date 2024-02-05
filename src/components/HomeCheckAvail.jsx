import React, { useState } from 'react';
import { Container, Form, Row, Col, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function HomeCheckAvail() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    destination: '',
    checkinDate: null,
    checkoutDate: null,
    numMales: '',
    numFemales: '',
    numChildren: '',
    accommodation: '',
  });
  const [guestsError, setGuestsError] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [totalGuests, setTotalGuests] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOpenModal = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setTotalGuests(+formData.numMales + +formData.numFemales + +formData.numChildren);
    setShowEditModal(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Validation logic
    if (totalGuests <= 0  ) {
      setGuestsError(true);
    } else {
      setGuestsError(false);
      console.log('FormData : ', formData);
      if(formData.destination === 'Jawadhu'){
         navigate('/jawadhu')
      }
     
      setFormData({
        destination: '',
        checkinDate: null,
        checkoutDate: null,
        numMales: '',
        numFemales: '',
        numChildren: '',
        accommodation: '',
      });
      setTotalGuests('');
    }
  };

  return (
   <>
    <div className='home-checkavail'>
       <div  className='home-checkavail-content' ><h2 className='home-checkavail-title' >Escape, Explore, Enjoy</h2>  
        <button className='hme-check-button' onClick={()=>navigate('/jawadhu')}><span>Book Now !</span></button>
           <p className='hme-check-para'>We'll Show You the Way</p>
       </div>
      <Container className='home-checkavail-fields'>
        <Form onSubmit={handleSearch}>
          <Row>
            <Col md={2}>
            <Form.Group controlId="destination">
                <Form.Label>Destination:</Form.Label>
                <Form.Select
                  name="destination"
                  value={formData.destination}
                  onChange={handleOnChange}
                  required
                >
                  <option value=" ">-Select Here- </option>
                  <option value="Jawadhu">Jawadhu Hills</option>
                  
                </Form.Select>
              </Form.Group>
              {/* <Form.Group controlId="destination">
                <Form.Label>Destination:</Form.Label>
                <Form.Control
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group> */}
            </Col>
            <Col md={2}>
              <Form.Group controlId="checkinDate">
                <Form.Label>Check-in Date:</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={formData.checkinDate}
                  name="checkinDate"
                  onChange={(date) =>
                    handleOnChange({
                      target: { name: 'checkinDate', value: date },
                    })
                  }
                  selectsStart
                  startDate={formData.checkinDate}
                  endDate={formData.checkoutDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  maxDate={formData.checkoutDate}
                  filterDate={(date) => date >= new Date()}
                  required
                  autoComplete="off"
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="checkoutDate">
                <Form.Label>Check-out Date:</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={formData.checkoutDate}
                  name="checkoutDate"
                  onChange={(date) =>
                    handleOnChange({
                      target: { name: 'checkoutDate', value: date },
                    })
                  }
                  selectsEnd
                  startDate={formData.checkinDate}
                  endDate={formData.checkoutDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={formData.checkinDate}
                  filterDate={(date) => date >= new Date()}
                  required
                  autoComplete="off"
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="guests">
                <Form.Label>Guests:</Form.Label>
                <Form.Control
                  className={`form-control ${guestsError ? 'is-invalid' : ''}`}
                  type="text"
                  name="guests"
                  placeholder={` ${totalGuests} Guests`}
                  onClick={handleOpenModal}
                  autoComplete="off"
                  readOnly
                />
                {guestsError ? (
                  <div className="invalid-feedback" style={{fontSize:'13px'}}>Please select at least one guest.</div>
                ) : (
                  ''
                )}
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="accommodation">
                <Form.Label>Accommodation</Form.Label>
                <Form.Select
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleOnChange}
                  required
                >
                  <option value="All">-Select Here- </option>
                  <option value="hotel">Hotel</option>
                  <option value="villa">Villa</option>
                  <option value="onsiteCamping">Onsite Camping</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2} className="mt-4">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Guest Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Guests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="males">
              <Form.Label>Males</Form.Label>
              <Form.Control
                type="number"
                name="numMales"
                value={formData.numMales}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="females">
              <Form.Label>Females</Form.Label>
              <Form.Control
                type="number"
                name="numFemales"
                value={formData.numFemales}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="children">
              <Form.Label>Children</Form.Label>
              <Form.Control
                type="number"
                name="numChildren"
                value={formData.numChildren}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default HomeCheckAvail;
