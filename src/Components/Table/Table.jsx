import React from "react";
import styled from "styled-components";

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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Table() {
  return (
    <TableStyle>
      <thead>
        <tr>
          <th>CV Owner</th>
          <th>Application Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aries Vitalista</td>
          <td>PENDING</td>
          <td>
            <a href="#">view</a>
            <br />
            <a href="#">archive</a>
          </td>
        </tr>
      </tbody>
    </TableStyle>
  );
}

export default Table;
