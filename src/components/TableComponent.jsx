import React, { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const TableComponent = ({setTotalbookings}) => {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'
  

  const [tableData,setTableData] =  useState([])
  
 
  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:5000/book/data');
      
      if (response.status === 200) { 
        setTableData(response.data);
        setTotalbookings((response.data).length)
      } else {
        console.error('Failed to fetch data from the server');
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  // Sort tableData based on bookedDate
  const sortedData = tableData.sort((a, b) => {
    const dateA = new Date(a.bookedDate);
    const dateB = new Date(b.bookedDate);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  // Filtered and paginated data
  const filteredData = sortedData.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const destinationMatch = item.destination.toLowerCase().includes(searchText.toLowerCase());
    const dateMatch = startDate && endDate && item.bookedDate >= startDate && item.bookedDate <= endDate;
  
    // Combine conditions to filter the data
    return (nameMatch || destinationMatch) && (!startDate || dateMatch);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="container mt-4 " style={{height:'100vh'}}>
      {/* Search input and date range inputs */}
      <div className="col-md-12">
        <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Booking History</h2>
        <div className="input-group mb-3">
          
          <input
            type="text"
            className="form-control my-0 py-1 pl-3 purple-border"
            placeholder="Search something here..."
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            min={startDate}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <table className="table table-striped">
        {/* Table head */}
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Order No</th>
            <th>
              Booked Date
              <button className="btn btn-link" onClick={toggleSortOrder}>
                {sortOrder === 'asc' ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
              </button>
            </th>
            <th>Name</th>
            <th>Destination</th>
            <th>No of Guests</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Payment details</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.orderId}</td>
              <td>{new Date(item.bookedDate).toLocaleDateString('en-GB')}</td>
              <td>{item.name}</td>
              <td>{item.destination}</td>
              <td>{item.guestsCount}</td>
              <td>{new Date(item.checkInDate).toLocaleDateString('en-GB')}</td>
              <td>{new Date(item.checkOutDate).toLocaleDateString('en-GB')}</td>
              <td><FontAwesomeIcon icon={faIndianRupeeSign} /> {item.totalPrice}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav className="my-4 pt-2">
          <ul className="pagination pagination-circle pg-blue mb-0">
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <a className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
