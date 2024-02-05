import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Navbar ,Modal,Button} from 'react-bootstrap';
import { Image, NavLink } from 'react-bootstrap';
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png'


function Footer() {
  const[termsModal,setTermsModal] = useState(false);
  const[refundModal,setRefundModal] = useState(false);
  const[cancellationModal,setCancellationModal] = useState(false);
  const[privacyModal,setPrivacyModal] = useState(false);



  const openModal =(data)=>{
    console.log(data)
    if(data === "terms"){
      setTermsModal(true)
    }
    if(data === "refund"){
      setRefundModal(true)
    }
    if(data === "cancel"){
      setCancellationModal(true)
    }
    if(data === "privacy"){
      setPrivacyModal(true)
    }
    
  }

  const handleCloseModal = () => {
    setTermsModal(false);
    setRefundModal(false);
    setCancellationModal(false);
    setPrivacyModal(false);
  };
  return (
    <>
    <footer className="footer-container">
      <div className='footer-content'>
        <div>
        <Navbar.Brand   href="#home">
            <Image src={logo} className='logo'/> <br/> <span >Madras Campers</span> 
          </Navbar.Brand>
          <p style={{color:'white'}}>Promoting adventure, cosmic exploration,<br/> fostering nature's balance, pursuing knowledge,<br/> and advocating for a sustainable future for all.</p>
        </div>
      <div className="footer-company">
        <h4 className='footer-subhead'>COMPANY</h4>
        <ul>
          <NavLink>About us</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Careers</NavLink>
          <NavLink>Frequently Asked Questions</NavLink>
          
        </ul>
        
      </div>
   
      <div className="footer-camps">
        <h4 className='footer-subhead'>Terms & Conditions</h4>
        <ul>
          <NavLink onClick={()=>openModal("terms")}>Terms & Conditions</NavLink>
        <NavLink onClick={()=>openModal("refund")}>Refund Policy</NavLink>
        <NavLink onClick={()=>openModal("cancel")}>Cancellation Policy</NavLink>
        <NavLink onClick={()=>openModal("privacy")}>Privacy Policy</NavLink>
        <NavLink></NavLink>
          
         
        </ul>
      </div>
      <div className="footer-follow">
        <h4 className='footer-subhead'>FOLLOW US</h4>
        <div className="social-icons">
        <a to="#face"  >
          <FontAwesomeIcon icon={faFacebook} style={{color:"#0673e7",marginLeft:'5px',fontSize:'25px'}}/>
          </a>
          <a target='blank' href="https://www.instagram.com/roklive4speed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  >
          <FontAwesomeIcon icon={faInstagram} style={{color:"#e4038a",marginLeft:'15px',fontSize:'25px'}}/>
          </a>
          <a href="#" >
          <FontAwesomeIcon icon={faTwitter}style={{color:"#0a5fda",marginLeft:'15px',fontSize:'25px'}}/>
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faYoutube}style={{color:"#d80b0d",marginLeft:'15px',fontSize:'25px'}}/>
          </a>
         
        </div>
      </div>
      <div className="footer-contact">
        <h4 className='footer-subhead'>CONTACT US</h4>
        <div className="address-line d-flex">
          <FontAwesomeIcon icon={faPhone} className="icon-footer"/>
            <div className="contact-info">
              <div className="contact-info-title">Phone</div>
              <div><span style={{color:'white'}}>+91 9677716818 <br/>+91 9841431413</span></div>
            </div>
          </div>
          <div className="address-line d-flex">
          <FontAwesomeIcon icon={faEnvelope} className="icon-footer"/>
            <div className="contact-info">
              <div className="contact-info-title">Email</div>
              <div style={{color:'white'}}>contact@madrascampers.com</div>
            </div>
          </div>
        <div className="address-line d-flex">
            <FontAwesomeIcon icon={faMapLocationDot} className="icon-footer" />
            <div className="contact-info">
              <div className="contact-info-title">Address</div>
              <div style={{color:'white'}}>12th block,Door No -TH 174,</div>
              <div style={{color:'white'}}>Jains Apartment Road,<br/>Madambakkam,Rajakilpakkam,</div>
              <div style={{color:'white'}}>Chennai-600073, Tamilnadu.</div>
              
            </div>
          </div>
      </div>
      </div>
      <div className="footer-info">
        <p>© 2023 Madras Campers. All rights reserved.</p>  
      </div>
    </footer>
    <Modal show={termsModal} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Madras Campers Adventure Camping - Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body className='terms'>
           <p>Welcome to Madras Campers Adventure Camping. By using our services and participating in our camping experiences, you agree to comply with the following terms and conditions:</p>

   <h6>Booking and Reservations: </h6>
   <p>All bookings are subject to availability and confirmation.
Reservation requests can be made through our website or via phone.
Full payment is required to confirm your booking.</p>

<h6>Cancellation and Refunds:</h6>
<p>Cancellations made within [X days] of the scheduled camping date will incur a [X]% cancellation fee.
No refunds will be provided for cancellations made within [X days] of the scheduled camping date.
Refunds for cancellations made outside the specified period will be subject to a processing fee.</p>

<h6>Participant Responsibilities:</h6>
<p>Participants must adhere to safety guidelines and instructions provided by Madras Campers staff, who are certified professionals.
Participants are responsible for their own personal belongings and valuables during the camping experience.
Any damage caused to property or equipment due to negligence or misconduct will be the responsibility of the participant.</p>

<h6>Health and Safety:</h6>
<p>Participants must inform Madras Campers staff of any pre-existing medical conditions, allergies, or special requirements prior to the camping experience.
Madras Campers reserves the right to refuse participation to any individual deemed unfit or unable to safely participate in the camping activities.</p>

<h6>Safety and Security:</h6>
<p>Our certified professionals ensure the safety and security of all participants during the camping experience.
Safety measures and protocols are implemented to mitigate risks and ensure a secure environment for all.
Participants must inform Madras Campers staff of any pre-existing medical conditions, allergies, or special requirements prior to the camping experience.
Madras Campers reserves the right to refuse participation to any individual deemed unfit or unable to safely participate in the camping activities.
Climbing mountains requires a minimum level of physical energy and endurance. Participants should be prepared for cold weather conditions and be equipped with appropriate clothing and gear to withstand the climate.</p>

<h6>Code of Conduct:</h6>
<p>Participants must treat fellow campers, staff, and the environment with respect and consideration at all times.
Any behavior deemed disruptive, disrespectful, or harmful to others will not be tolerated and may result in expulsion from the camping experience without refund.</p>

<h6>Liability and Indemnity:</h6>
<p>Madras Campers will not be held liable for any injury, loss, or damage to personal property incurred during the camping experience, except where such liability cannot be excluded by law.
Participants agree to indemnify and hold Madras Campers harmless from any claims, damages, or liabilities arising out of their participation in the camping activities.</p>

<h6>Photography and Media:</h6>
<p>Madras Campers may capture photographs, videos, or other media during the camping experience for promotional and marketing purposes.
Participants consent to the use of their likeness and image in such promotional materials without compensation.</p>

<h6>Changes to Itinerary:</h6>
<p>Madras Campers reserves the right to modify or cancel camping activities, itineraries, or schedules due to unforeseen circumstances or events beyond our control.
Participants will be notified of any changes as soon as possible, and alternative arrangements may be offered at the discretion of Madras Campers.
By booking and participating in our camping experiences, you acknowledge that you have read, understood, and agree to abide by these terms and conditions. If you have any questions or concerns, please contact us prior to booking.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    <Modal show={refundModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
     onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Refund Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body className='terms'>
      At Madras Campers Adventure Camping, we aim to provide a transparent and fair refund process for our customers. Please review the following guidelines regarding refunds:

      <h6>1. Eligibility for Refunds:</h6>

      <p>Refunds will be issued for cancellations made within the specified cancellation period outlined in our cancellation policy.
Cancellations made outside the designated cancellation period are not eligible for refunds.</p>

<h6>2. Refund Process:</h6>

<p>Refunds for eligible cancellations will be processed within [X] business days from the date of cancellation.
Refunds will be issued to the original payment method used for the reservation, unless otherwise requested by the participant.</p>

<h6>3. No-show Policy:</h6>

<p>Participants who fail to arrive at the camping site on the scheduled date without prior notice will be considered a no-show.
No-shows are not eligible for refunds, and the full reservation amount will be forfeited.</p>

<h6>4. Modification and Rescheduling:</h6>

<p>Participants may request to modify or reschedule their camping reservation, subject to availability and approval by Madras Campers.
Modifications made within [X days] of the scheduled camping date may be subject to additional fees or charges.</p>

<h6>5. Force Majeure Events:</h6>

<p>In the event of unforeseen circumstances or force majeure events (such as natural disasters, government regulations, or travel restrictions) that prevent the camping experience from taking place, Madras Campers reserves the right to modify, reschedule, or cancel reservations without penalty.
Participants will be notified of any changes as soon as possible, and alternative arrangements may be offered at the discretion of Madras Campers.</p>

<h6>6. Refund Exceptions:</h6>

<p>Requests for exceptions to the refund policy due to extenuating circumstances (such as medical emergencies or bereavement) will be considered on a case-by-case basis.
Participants may be required to provide supporting documentation or evidence to support their request for a refund exception.</p>

<h6>7. Policy Acknowledgment:</h6>

<p>By booking a camping reservation through our web application, participants acknowledge and agree to abide by the terms and conditions of our refund policy.
Our refund policy aims to ensure fairness and transparency in the refund process while addressing potential contingencies that may arise during the booking process. If you have any questions or concerns about our refund policy, please contact us at <span style={{color : 'blue'}}>contact@madrascampers.com</span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    <Modal show={cancellationModal} onHide={handleCloseModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>Cancellation Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body className='terms'>
            

  <p>At Madras Campers Adventure Camping, we understand that plans may change, and circumstances may arise that necessitate the cancellation of your camping reservation. Our cancellation policy is designed to provide clarity and fairness to all participants while ensuring the smooth operation of our camping activities. </p>
 
<h6>1. Cancellation Period:</h6>

<p>Cancellations made [X days] or more prior to the scheduled camping date will receive a full refund of the reservation amount, minus any applicable processing fees.
Cancellations made within [X days] of the scheduled camping date will be subject to a cancellation fee of [X]% of the total reservation amount.
No refunds will be provided for cancellations made within [X days] of the scheduled camping date.</p>

<h6>2. Refund Process:</h6>

<p>Refunds for eligible cancellations will be processed within [X] business days from the date of cancellation.
Refunds will be issued to the original payment method used for the reservation, unless otherwise requested by the participant.</p>

<h6>3. Modification and Rescheduling:</h6>

<p>Participants may request to modify or reschedule their camping reservation, subject to availability and approval by Madras Campers.
Modifications made within [X days] of the scheduled camping date may be subject to additional fees or charges.</p>

<h6>4. No-show Policy:</h6>

<p>Participants who fail to arrive at the camping site on the scheduled date without prior notice will be considered a no-show.
No-shows are not eligible for refunds or rescheduling, and the full reservation amount will be forfeited.</p>

<h6>5. Force Majeure Events:</h6>

<p>In the event of unforeseen circumstances or force majeure events (such as natural disasters, government regulations, or travel restrictions) that prevent the camping experience from taking place, Madras Campers reserves the right to modify, reschedule, or cancel reservations without penalty.
Participants will be notified of any changes as soon as possible, and alternative arrangements may be offered at the discretion of Madras Campers.</p>

<h6>6. Communication and Notification:</h6>

<p>Participants are responsible for notifying Madras Campers of any cancellations or modifications to their reservation as soon as possible.
Cancellation requests must be submitted in writing via email or through the reservation management portal on our website.</p>

<h6>7. Exceptions and Special Circumstances:</h6>

<p>Requests for exceptions to the cancellation policy due to extenuating circumstances (such as medical emergencies or bereavement) will be considered on a case-by-case basis.
Participants may be required to provide supporting documentation or evidence to support their request for an exception.</p>

<h6>8. Policy Acknowledgment:</h6>

<p>By making a reservation with Madras Campers Adventure Camping, participants acknowledge and agree to abide by the terms and conditions of our cancellation policy.
Our cancellation policy aims to strike a balance between flexibility for participants and the need to maintain operational efficiency and fairness. If you have any questions or concerns about our cancellation policy, please contact us at  <span style={{color : 'blue'}}>contact@madrascampers.com</span></p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    <Modal show={privacyModal} onHide={handleCloseModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>Privacy Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body className='terms'>
      <p> At Madras Campers Adventure Camping, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you interact with our website, make reservations, and participate in our camping experiences.</p>

      <h6>1. Information We Collect:</h6>

<p>Personal Information: When you make a reservation or participate in our camping activities, we may collect personal information such as your name, email address, phone number, and payment details.
Communication Data: We may collect information about your communication preferences and interactions with us, including emails, messages, and feedback.
Usage Data: We may gather information about how you use our website, including pages visited, clicks, and navigation patterns.
</p>
<h6>2. How We Use Your Information:</h6>

<p>Reservation Processing: We use your personal information to process reservations, manage bookings, and communicate with you about your camping experience.
Customer Support: We may use your information to respond to inquiries, provide assistance, and address any concerns or complaints.
Marketing and Promotions: With your consent, we may send you promotional offers, newsletters, and updates about our camping activities and special events.
Improving Services: We analyze usage data to improve our website functionality, personalize your user experience, and enhance the quality of our services.
</p>
<h6>3. Data Security:</h6>

<p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.
Access to your personal information is restricted to authorized personnel only, and we regularly review our security protocols to ensure compliance with industry standards.
</p>
<h6>4. Data Retention:</h6>

<p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
After the retention period, we securely delete or anonymize your data to prevent unauthorized access or use.
</p>
<h6>5. Sharing of Personal Information:</h6>

<p>We do not sell, trade, or rent your personal information to third parties for marketing purposes.
Your personal data may be shared with trusted service providers, such as payment processors and IT vendors, to facilitate reservation processing and website maintenance.
</p>
<h6>6. Your Rights:</h6>

<p>You have the right to access, update, or request deletion of your personal information.
You may opt out of receiving marketing communications from us at any time by contacting our customer support team or using the unsubscribe link provided in promotional emails.
</p>
<h6>7. Children's Privacy:</h6>
<p>
Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children without parental consent.
</p>
<h6>8. Changes to Privacy Policy:</h6>
<p>
We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review the policy periodically for updates.
By using our website and participating in our camping experiences, you consent to the collection and use of your personal information as described in this Privacy Policy.

If you have any questions or concerns about our Privacy Policy or the handling of your personal data, please contact us at contact@madrascampers.com

Last updated: [01.02.2024]

This Privacy Policy aims to provide transparency regarding the collection, use, and protection of personal data by Madras Campers Adventure Camping. It addresses key aspects such as data collection, usage, security, retention, rights of individuals, and policy updates, ensuring compliance with privacy regulations and best practices.
</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default Footer;
