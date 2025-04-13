import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post(
        "http://localhost:8000/api/cv",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

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
      <style>
        {`
                    .form-container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group label {
                        display: block;
                        font-size: 1rem;
                        margin-bottom: 5px;
                        color: #555;
                    }

                    .form-group input,
                    .form-group textarea {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        font-size: 1rem;
                        color: #333;
                    }

                    .form-group input:focus,
                    .form-group textarea:focus {
                        border-color: #3498db;
                        outline: none;
                    }

                    .form-group textarea {
                        height: 150px;
                        resize: vertical;
                    }

                    .submit-btn {
                        width: 100%;
                        padding: 12px;
                        background-color: #4CAF50;
                        border: none;
                        border-radius: 25px;
                        color: #fff;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .submit-btn:hover {
                        background-color: #45a049;
                    }

                    .form-footer {
                        text-align: center;
                        margin-top: 30px;
                        font-size: 0.9rem;
                        color: #888;
                    }

                    .form-footer p {
                        margin-top: 10px;
                    }
                `}
      </style>

      <div className="flex end">
        <a href="#" onClick={handleBack}>
          Go Back
        </a>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="objective">Objective</label>
            <textarea
              id="objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="work_experince">Work Experience</label>
            <textarea
              id="work_experince"
              name="work_experince"
              value={formData.work_experince}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit CV
          </button>
        </form>

        <div className="form-footer">
          <p>&copy; 2025 CV Project. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default AddCV;
