import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  td a{
    margin-right: 10px;
  }

  td input, td select{
  border: none;
  border-bottom: 1px solid #ddd; 
  outline: none;
  padding: 5px 0;
  background: transparent;
  }

  td input:focus{
  border-bottom: 2px solid #3498db;
  }

  td a{
    margin-left: 10px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
function Table() {
  const navigate = useNavigate();

  if(localStorage.getItem('token') === null){
    navigate('/');
  }

  const [cvData, setCvData] = useState([]);

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/applications',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setCvData(response.data.data);
      } catch (error) {
        console.error("Error fetching CV data:", error);
      }      
    };

    fetchCvData();
  }, []); 

  const goToEditCV = (cvId) => {
    navigate(`/cv/add/${cvId}`);
  };

  return (
   <TableStyle>
      <thead>
        <tr>
          {/* <th>Owner</th> */}
          <th>Application Status</th>
          <th>Application Link</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {cvData.map((row) => (
        <tr key={row.id}> {/* Assuming each CV has a unique id */}
          {/* <td><strong>{row.owner}</strong></td> */}
          <td>
            <input value={row.application_status}
             onChange={(e) => setLink(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={row.application_link}
              onChange={(e) => setLink(e.target.value)} // Update state for link (if needed)
            />
            <a href={row.link}>&rarr;</a>
          </td>
          <td>
            <input
              type="text"
              value={row.company}
              onChange={(e) => setCompany(e.target.value)} // Update state for company (if needed)
            />
          </td>
          <td>
            <div className="flex">
              <a onClick={() => goToEditCV(row.id)}>view</a>
              <a>print</a>
              <a>duplicate</a>
              <a>archive</a>
            </div>
          </td>
        </tr>
  ))}
</tbody>

    </TableStyle>
  );
}

export default Table;