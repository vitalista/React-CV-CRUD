import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const [link, setLink] = React.useState("https://ph.jobstreet.com/job/");
  const [Company, setCompany] = React.useState("Microsoft");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const goToEditCV = () => {
    navigate("/cv/add");
  }

  return (
    <TableStyle>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Application Status</th>
          <th>Application Link</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Aries Vitalista</strong></td>
          <td>
            <select>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </td>
          <td>
            <input
              type="text"
              value={link}
              onChange={handleLinkChange}
            />
            <a href={link}>&rarr;</a>
          </td>
          <td>
            <input type="text" 
            value={Company}
            onChange={handleCompanyChange}
            />
          </td>
          <td>
            <div className="flex">
              <a onClick={goToEditCV}>view</a>
              <a>print</a>
              <a>duplicate</a>
              <a>archive</a>
            </div>
          </td>
        </tr>
      </tbody>
    </TableStyle>
  );
}

export default Table;
