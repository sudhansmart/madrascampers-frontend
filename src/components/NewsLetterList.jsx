import React, { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import SideNavbar from './SideNavbar';
import axios from 'axios';

const NewsLetterList = ({setTotalbookings}) => {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'
  

  const [tableData,setTableData] =  useState([])
  
 
  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('https://madrascampers.onrender.com/newsletter/data');
      
      if (response.status === 200) { 
        setTableData(response.data);
        // setTotalbookings((response.data).length)
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
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  // Filtered and paginated data
  const filteredData = sortedData.filter((item) => {
    const dateMatch = startDate && endDate && item.date >= startDate && item.date <= endDate;
  
    // Combine conditions to filter the data
    return (!startDate || dateMatch);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <>
        <SideNavbar /> 
    <div className="container  " style={{height:'100vh',marginTop:'8%'}}>
      <div className="col-md-12">
        <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text">News Letter List</h2>
        <div className="input-group mb-3">
          
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
            <th>
               Date
              <button className="btn btn-link" onClick={toggleSortOrder}>
                {sortOrder === 'asc' ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
              </button>
            </th>
            <th>email</th>
           
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{new Date(item.date).toLocaleDateString('en-GB')}</td>
              <td>{item.email}</td>
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
    </>
  );
};

export default NewsLetterList;
