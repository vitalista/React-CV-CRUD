import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";

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

  td a {
    margin-right: 10px;
  }

  td input,
  td select {
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    padding: 5px 0;
    background: transparent;
  }

  td input:focus {
    border-bottom: 2px solid #3498db;
  }

  td a {
    margin-left: 10px;
    cursor: pointer;
  }

  td a.archive {
    color: tomato;
  }

  td a.save {
    color: seagreen;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;


function Table() {
  const navigate = useNavigate();

  const [cvData, setCvData] = useState([]);

  const fetchCvData = async () => {
    try {
      const response = await api.get("/api/applications");
      setCvData(response.data.data);
    } catch (error) {
      console.error("Error fetching CV data:", error);
    }
  };

  useEffect(() => {
    fetchCvData();
  }, []);

  const handleFieldChange = (id, field, value) => {
    setCvData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveChanges = async (id) => {
    const application = cvData.find((item) => item.id === id);
    const requestBody = {
      application_status: application.application_status,
      application_link: application.application_link,
      company: application.company,
      cv_id: application.cv_id,
    };
    
    try {

      await api.put(`/api/applications/${id}`, requestBody);

      alert("Changes saved!");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        console.error("Client-side error:", error.response);
        alert("There was an issue with the request. Please check the format and try again.");
      } else if (error.response && error.response.status >= 500 && error.response.status < 600) {
        console.error("Server-side error:", error.response);
        alert("Oops! Something went wrong on the server. Please try again later.");
      } else {
        console.error("Error saving changes:", error);
        alert("It seems like the format you used isn’t quite right. Could you please try again?");
      }
    }
  };

  const duplicate = async (id) => {
    const application = cvData.find((item) => item.id === id);
    const requestBody = {
      application_status: application.application_status,
      application_link: application.application_link,
      company: application.company,
      cv_id: application.cv_id,
    };

    try {
      await api.post("/api/applications", requestBody);
      fetchCvData();
      alert("Application duplicated successfully!");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        console.error("Client-side error:", error.response);
        alert("There was an issue with the request. Please check the format and try again.");
      } else if (error.response && error.response.status >= 500 && error.response.status < 600) {
        console.error("Server-side error:", error.response);
        alert("Oops! Something went wrong on the server. Please try again later.");
      } else {
        console.error("Error duplicating application:", error);
        alert("It seems like the format you used isn’t quite right. Could you please try again?");
      }
    }
  };

  const goToEditCV = (cvId) => {
    navigate(`/cv/edit/${cvId}`);
  };

  const handleArchive = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to archive?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/api/applications/${id}`);
      setCvData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error archiving application:", error);
      alert("Failed to archive the application.");
    }
  };

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
        {cvData.map((row) => (
          <tr key={row.id}>
            <td>
              <input value={row.cvs?.full_name || ""} readOnly disabled />
            </td>
            <td>
              <input
                value={row.application_status || ""}
                onChange={(e) => handleFieldChange(row.id, "application_status", e.target.value)}
              />
             
            </td>
            <td>
              <input
                type="text"
                value={row.application_link || ""}
                onChange={(e) => handleFieldChange(row.id, "application_link", e.target.value)}
                placeholder="https://example.com"
              />
              <a target="_blank" href={row.application_link} rel="noopener noreferrer">
                &rarr;
              </a>
            </td>
            <td>
              <input
                type="text"
                value={row.company || ""}
                onChange={(e) => handleFieldChange(row.id, "company", e.target.value)}
              />
            </td>
            <td>
              <div className="flex">
                <a onClick={() => goToEditCV(row.cv_id)}>view</a>
                <a onClick={() => duplicate(row.id)}>duplicate</a>
                <a className="save" onClick={() => saveChanges(row.id)}>save</a>
                <a className="archive" onClick={() => handleArchive(row.id)}>
                  archive
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
}

export default Table;
