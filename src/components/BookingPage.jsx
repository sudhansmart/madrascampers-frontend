import React,{useState} from 'react'
import { Container, Form, Row, Col, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OrderReviewPage from './OrderReviewPage';
import axios from 'axios';

function BookingPage() {
  const [userId, setUserId] = useState(localStorage.getItem('Id') || '');
  const [guestsError, setGuestsError] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [totalGuests, setTotalGuests] = useState(''); 
  // const [userloggedin, setUserloggedin] = useState(localStorage.getItem('userloggedin') === 'true');
  const [showSummary,setShowSummary] = useState(false);
  const [guests,setGuests] = useState({
    numOfMales : '',
    numOfFemales :'',
    numOfChild :'',
    checkinDate: null,
    checkoutDate: null
  })
 
    const [formData, setFormData] = useState({
        userId :userId,
        email: '',
        phone:'',
        destination:'jawadhu hills',
        checkinDate: null,
        checkoutDate: null,
        numMales: '',
        numFemales: '',
        numChildren: '',
        accommodation: '',
        
      });
   
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
    
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log("bookdata :",formData)
    if (totalGuests <= 0  ) {
      setGuestsError(true);
    } else {
      setGuestsError(false);
      const response = await axios.post ('https://madrascampers.onrender.com/book/addbooking',formData)
      
      setGuests({
        tripId : response.data._id,
        destination:formData.destination,
        duration : "2 Days - 1 Nights",
        numOfMales : formData.numMales,
        numOfFemales :formData.numFemales,
        numOfChild : formData.numChildren,
        checkinDate: new Date(formData.checkinDate).toLocaleDateString('en-GB'),
        checkoutDate: new Date(formData.checkoutDate).toLocaleDateString('en-GB')
      })
      setFormData({
        email: '',
        phone:'',
        checkinDate: null,
        checkoutDate: null,
        numMales: '',
        numFemales: '',
        numChildren: '',
        accommodation: '',
      });
      setTotalGuests('');
      setShowSummary(true)
    }
  };    
  return (
    <div className='bookingPage'>
   {showSummary? <OrderReviewPage guests={guests} /> :<Container  fluid className='bookingPage-fields'>
   
     <Form onSubmit={handleSubmit}>
        <Col>
          <Row >
          <Col >
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
          <Col >
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
          </Row>
          <Row>
          <Col >
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
          <Col >
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
          </Row>
          <Col>
            <Form.Group controlId="phone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleOnChange}
                required
                autoComplete="off"
              />
            </Form.Group>
          </Col>
          
          <Col >
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
          </Col>
          <Col className="justify-content-center mt-3" >
            <Button variant="success" type="submit">
              Book Now
            </Button>
          </Col>
        </Col>
      </Form>  
    </Container>}

    {/* Guest Modal */}
    <Modal show={showEditModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Guests</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="males">
            <Form.Label>Male</Form.Label>
            <Form.Control
              type="number"
              name="numMales"
              value={formData.numMales}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="females">
            <Form.Label>Female</Form.Label>
            <Form.Control
              type="number"
              name="numFemales"
              value={formData.numFemales}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="children">
            <Form.Label>Children(Above-6 Years)</Form.Label>
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
  )
}

export default BookingPage