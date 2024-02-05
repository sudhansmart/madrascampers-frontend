import React from 'react';


function AdminSummary({totalbookings,totalEnquiries}) {
  // Sample data (replace with actual data from your backend)
  const totalBookings = 150;
  const totalIncome = 25000;
  const TotalEnquiries = 50;
  const totalGuests = 200;

  return (
    <div className="admin-summary">
      <div className="admin-content">
        
        <div className="top-cards-container">
          <div className="dashboard-card1">
            <div className='dashboard-content'>
            <h3>Total Bookings</h3>
            <p className='dash-p'>{totalbookings}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Trips Completed</h5>
            <p>{totalBookings}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Upcoming Trips</h5>
            <p>{totalBookings}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Cancelled Trips</h5>
            <p>{totalBookings}</p>
            </div>
           
           
          </div>
          <div className="dashboard-card2">
          <div className='dashboard-content'>
            <h3>Total Income</h3>
            <p className='dash-p'>${totalIncome}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Jawadhu</h5>
            <p>${totalIncome}</p>
            </div>
            <div className='dashboard-content'>
            <h5>ooty</h5>
            <p>${totalIncome}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Yelagiri</h5>
            <p>${totalIncome}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Kodaikanal</h5>
            <p>${totalIncome}</p>
            </div>
          </div>

        
          <div className="dashboard-card3">
          <div className='dashboard-content'>
            <h3>Total Enquiries</h3>
            <p className='dash-p'>{totalEnquiries}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Unread Enquiries</h5>
            <p>{TotalEnquiries}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Readed Enquiries</h5>
            <p>{TotalEnquiries}</p>
            </div>
          </div>

          <div className="dashboard-card4">
          <div className='dashboard-content'>
            <h3>Total Guests Visited</h3>
            <p className='dash-p'>{totalGuests}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Adults</h5>
            <p>{totalGuests}</p>
            </div>
            <div className='dashboard-content'>
            <h5>Childrens</h5>
            <p>{totalGuests}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSummary;
