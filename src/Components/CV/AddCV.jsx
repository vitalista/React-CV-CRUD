import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";

function AddCV() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    objective: "",
    email: "",
    phone_number: "",
    skills: "",
    work_experince: "",
  });

  function handleBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/api/cv`, formData);
      alert("CV submitted successfully!");
      navigate("/cv/list");
    } catch (error) {
      console.log(formData);
      console.error("Error submitting CV:", error);
      alert("An error occurred while submitting the CV.");
    }
  }

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
              value={formData.full_name}
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
              value={formData.objective}
              onChange={handleChange}
              placeholder="Write your objective"
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
              value={formData.email}
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
              value={formData.phone_number}
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
              value={formData.skills}
              onChange={handleChange}
              placeholder="List your skills"
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
              value={formData.work_experince}
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
            Submit CV
          </button>
        </form>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>&copy; 2025 CV Project. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default AddCV;
