import React,{useState,useEffect} from 'react';


const AdminDestWise = () => {
  const [destinationData, setDestinationData] = useState([
    {
      id: 1,
      name: 'Jawadhu hills',
      totalBookings: 35,
      totalIncome: 50000,
      enquiry: 55,

    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/destination-wise-data');
        // const data = await response.json();
        // setDestinationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h3 style={{paddingLeft:'35px',paddingTop:'15px'}}>Destination-wise<hr/></h3>
    <div className="cards-container">
        
      <a href="#" className="cards education">
        <div className="overlay"></div>
        <div className="circle"> 
          <h5 >Jawadhu <br/>Hills</h5>
        </div>
        <p>Total Bookings:<span style={{marginLeft:'20px'}}></span> 50</p>
        <p>Total Income :<span style={{marginLeft:'20px'}}></span> 25000</p>
        <div className="cards-info">
          <p>Upcoming Trips:<span style={{marginLeft:'20px'}}></span> 25</p>
          <p>Completed Trips:<span style={{marginLeft:'17px'}}></span> 25</p>
          <p>Cancelled Trips :<span style={{marginLeft:'22px'}}></span>10</p>
        </div>
      </a>

      <a href="#" className="cards credentialing">
        <div className="overlay"></div>
        <div className="circle">
        </div>
        <p>Total Bookings:<span style={{marginLeft:'20px'}}></span> 50</p>
        <p>Total Income :<span style={{marginLeft:'20px'}}></span> 25000</p>
        <div className="cards-info">
          <p>Upcoming Trips:<span style={{marginLeft:'20px'}}></span> 25</p>
          <p>Completed Trips:<span style={{marginLeft:'17px'}}></span> 25</p>
          <p>Cancelled Trips :<span style={{marginLeft:'22px'}}></span>0</p>
        </div>
      </a>

 
      <a href="#" className="cards wallet">
        <div className="overlay"></div>
        <div className="circle"> 
        </div>
        <p>Total Bookings:<span style={{marginLeft:'20px'}}></span> 50</p>
        <p>Total Income :<span style={{marginLeft:'20px'}}></span> 25000</p>
        <div className="cards-info">
          <p>Upcoming Trips:<span style={{marginLeft:'20px'}}></span> 25</p>
          <p>Completed Trips:<span style={{marginLeft:'17px'}}></span> 25</p>
          <p>Cancelled Trips :<span style={{marginLeft:'22px'}}></span>0</p>
        </div>
      </a>
  
      <a href="#" className="cards human-resources">
      
        <div className="overlay"></div>
        <div className="circle">

        </div>
        <p >Total Bookings:<span style={{marginLeft:'20px'}}></span> 50</p>
        <p>Total Income :<span style={{marginLeft:'20px'}}></span> 25000</p>
        <div className="cards-info">
          <p>Upcoming Trips:<span style={{marginLeft:'20px'}}></span> 25</p>
          <p>Completed Trips:<span style={{marginLeft:'17px'}}></span> 25</p>
          <p>Cancelled Trips :<span style={{marginLeft:'22px'}}></span>0</p>
        </div>
      </a>
      </div>
    </div>
  );
};

export default AdminDestWise;
