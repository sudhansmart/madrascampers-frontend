import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import AdminSummary from './AdminSummary';
import AdminDestWise from './AdminDestWise';
import TableComponent from './TableComponent';
import EnquiryTable from './EnquiryTable';


function AdminDashboard({setAdminLoggedIn}) {
    const [totalbookings,setTotalbookings] = useState('')
    const [totalEnquiries,setTotalEnquiries] = useState('')

  return (
    <div className="admin-dashboard">
      <SideNavbar setAdminLoggedIn={setAdminLoggedIn}/> 
      <AdminSummary totalbookings={totalbookings} totalEnquiries={totalEnquiries}/>
      <AdminDestWise/>
      <TableComponent setTotalbookings={setTotalbookings}/>
      <EnquiryTable setTotalEnquiries={setTotalEnquiries}/>
    </div>
  );
}

export default AdminDashboard;
