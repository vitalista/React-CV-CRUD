import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";
import PrintButton from "../Buttons/PrintButton";

function EditCV({ id }) {
  const navigate = useNavigate();

  const [cvData, setCvData] = useState({
    full_namename: "",
    objective: "",
    email: "",
    phone_number: "",
    skills: "",
    work_experince: "",
  });

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await api.get(`/api/cv/${id}`);
        setCvData(response.data.data);
      } catch (error) {
        console.error("Error fetching CV data:", error);
      }
    };

    fetchCvData();
  }, [id]);

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/cv/${id}`, cvData);
      alert("CV updated successfully");
    } catch (error) {
      console.error("Error updating CV:", error);
      alert("Error updating CV");
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <a
          href="#"
          onClick={handleBack}
          className=" "
        >
          Go Back
        </a>
      </div>

      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="full_name"
              className="block text-base mb-1 text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={cvData.full_name || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="objective"
              className="block text-base mb-1 text-gray-700"
            >
              Objective
            </label>
            <textarea
              id="objective"
              name="objective"
              value={cvData.objective || ""}
              onChange={handleChange}
              placeholder="Describe your Objective"
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-800 h-36 resize-y focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-base mb-1 text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={cvData.email || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone_number"
              className="block text-base mb-1 text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={cvData.phone_number || ""}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="skills"
              className="block text-base mb-1 text-gray-700"
            >
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              value={cvData.skills || ""}
              onChange={handleChange}
              placeholder="Provide your Skills"
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-800 h-36 resize-y focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="work_experince"
              className="block text-base mb-1 text-gray-700"
            >
              Work Experience
            </label>
            <textarea
              id="work_experince"
              name="work_experince"
              value={cvData.work_experince || ""}
              onChange={handleChange}
              placeholder="Describe your work experience"
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-800 h-36 resize-y focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#4CAF50] text-white rounded-full text-lg font-medium hover:bg-green-700 transition-colors cursor-pointer"
          >
            Update CV
          </button>
        </form>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>&copy; 2025 CV Project. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default EditCV;
