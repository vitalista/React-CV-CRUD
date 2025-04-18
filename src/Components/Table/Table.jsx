import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";

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
      const status = error.response?.status;
      if (status >= 400 && status < 500) {
        alert("Client-side error. Please check your data.");
      } else if (status >= 500) {
        alert("Server error. Please try again later.");
      } else {
        alert("Unexpected error. Please try again.");
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
      const status = error.response?.status;
      if (status >= 400 && status < 500) {
        alert("Client-side error. Please check your data.");
      } else if (status >= 500) {
        alert("Server error. Please try again later.");
      } else {
        alert("Unexpected error. Please try again.");
      }
    }
  };

  const goToEditCV = (cvId) => {
    navigate(`/cv/edit/${cvId}`);
  };

  const handleArchive = async (id) => {
    if (!window.confirm("Are you sure you want to archive?")) return;

    try {
      await api.delete(`/api/applications/${id}`);
      setCvData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      alert("Failed to archive the application.");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left border-b border-gray-300">Owner</th>
            <th className="p-3 text-left border-b border-gray-300">Application Status</th>
            <th className="p-3 text-left border-b border-gray-300">Application Link</th>
            <th className="p-3 text-left border-b border-gray-300">Company</th>
            <th className="p-3 text-left border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {cvData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="p-3 border-b border-gray-200">
                <input
                  className="bg-transparent text-sm border-b border-gray-300 outline-none py-1 m-0 border-0 border-b px-0 w-full"
                  value={row.cvs?.full_name || ""}
                  readOnly
                  disabled
                />
              </td>
              <td className="p-3 border-b border-gray-200">
                <input
                  className="bg-transparent text-sm border-b border-gray-300 outline-none py-1 m-0 border-0 border-b px-0 w-full focus:border-[#3498db]"
                  value={row.application_status || ""}
                  onChange={(e) =>
                    handleFieldChange(row.id, "application_status", e.target.value)
                  }
                />
              </td>
              <td className="p-3 border-b border-gray-200">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="bg-transparent text-sm border-b border-gray-300 outline-none py-1 m-0 border-0 border-b px-0 w-full focus:border-[#3498db]"
                    value={row.application_link || ""}
                    onChange={(e) =>
                      handleFieldChange(row.id, "application_link", e.target.value)
                    }
                    placeholder="https://example.com"
                  />
                  <a
                    className="ml-2 text-[#3498db] cursor-pointer text-sm"
                    target="_blank"
                    href={row.application_link}
                    rel="noopener noreferrer"
                  >
                    →
                  </a>
                </div>
              </td>
              <td className="p-3 border-b border-gray-200">
                <input
                  type="text"
                  className="bg-transparent text-sm border-b border-gray-300 outline-none py-1 m-0 border-0 border-b px-0 w-full focus:border-[#3498db]"
                  value={row.company || ""}
                  onChange={(e) =>
                    handleFieldChange(row.id, "company", e.target.value)
                  }
                />
              </td>
              <td className="p-3 border-b border-gray-200">
                <div className="flex space-x-3 text-md">
                  <a
                    onClick={() => goToEditCV(row.cv_id)}
                    className="text-[#3498db] cursor-pointer"
                  >
                    view
                  </a>
                  <a
                    onClick={() => duplicate(row.id)}
                    className="text-[#3498db] cursor-pointer"
                  >
                    duplicate
                  </a>
                  <a
                    onClick={() => saveChanges(row.id)}
                    className="text-[seagreen] cursor-pointer"
                  >
                    save
                  </a>
                  <a
                    onClick={() => handleArchive(row.id)}
                    className="text-[tomato] cursor-pointer"
                  >
                    archive
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
