import { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import Destination from './components/Destination';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import TrekDetails from './components/TrekDetails';
import AdminDashboard from './components/AdminDashboard';
import NewsLetterList from './components/NewsLetterList';
import FeedbackForm from './components/FeedbackForm';



function App() {
  const [userloggedin, setUserloggedin] = useState(localStorage.getItem('userAuth') === 'true');
  const [showEditModal, setShowEditModal] = useState(false);
  const [adminLoggedIn,setAdminLoggedIn] = useState(localStorage.getItem('adminAuth') === 'true');
 

  
  useEffect(() => {
    localStorage.setItem('userAuth', userloggedin.toString());
    localStorage.setItem('adminAuth', adminLoggedIn.toString());
  }, [userloggedin,adminLoggedIn]);
  
  return (
    <>
    <Router>
      {userloggedin?<FeedbackForm/> : " "}
        {!adminLoggedIn? <NavBar showEditModal={showEditModal}
                  setShowEditModal={setShowEditModal}
                  userloggedin={userloggedin}
                  setUserloggedin={setUserloggedin}
                  adminLoggedIn={adminLoggedIn} 
                  setAdminLoggedIn={setAdminLoggedIn}
                   /> : ''}
      <Routes>
        <Route path='/'  element={<HomePage setUserloggedin={setUserloggedin}/>}/>
        <Route path='/admin' element={ adminLoggedIn?<AdminDashboard  setAdminLoggedIn={setAdminLoggedIn} /> : <Navigate to={'/'}/>}  />
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/jawadhu' element={<TrekDetails showEditModal={showEditModal}
                  setShowEditModal={setShowEditModal} userloggedin={userloggedin}/>}/>
        <Route path='/newsletter' element={<NewsLetterList/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
