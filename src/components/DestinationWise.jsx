import React, { useState, useEffect } from 'react';

const DestinationWise = () => {
  // Sample data (replace with actual data from your backend)
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
        const response = await fetch('https://api.example.com/destination-wise-data');
        const data = await response.json();
        setDestinationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Destination-wise Booking Details</h2>
      {destinationData.map((destination) => (
        <div key={destination.id}>
          <h3>{destination.name}</h3>

          {/* Display booking details */}
          <p>Total Bookings: {destination.totalBookings}</p>
          <p>Total Income: ${destination.totalIncome}</p>
          <p>Total Enquiries : ${destination.enquiry}</p>
          <p>Total Guests : ${destination.totalIncome}</p>
           
        
        
         
         

          <hr />
        </div>
      ))}
    </div>
  );
};

export default DestinationWise;
