import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrintButton from '../Buttons/PrintButton';

function AddCV() {
    const navigate = useNavigate();

    function handleBack(event) {
        event.preventDefault();
        navigate(-1);
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
                <a href="#" onClick={handleBack}>Go Back</a>
            </div>

            <div className="form-container">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="objective">Objective</label>
                        <textarea id="objective" name="objective" placeholder="Describe your Objective" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tertiary">Tertiary Education</label>
                        <input type="text" id="tertiary" name="tertiary" required />
                        <input type="number" id="tertiary-year-start" name="year" min="1900" max="2100" placeholder="YYYY" required />
                        <input type="number" id="tertiary-year-end" name="year" min="1900" max="2100" placeholder="YYYY" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="secondary">Secondary Education</label>
                        <input type="text" id="secondary" name="secondary" required />
                        <input type="number" id="secondary-year-start" name="year" min="1900" max="2100" placeholder="YYYY" required />
                        <input type="number" id="secondary-year-end" name="year" min="1900" max="2100" placeholder="YYYY" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="primary">Primary Education</label>
                        <input type="text" id="primary" name="primary" required />
                        <input type="number" id="primary-year-start" name="year" min="1900" max="2100" placeholder="YYYY" required />
                        <input type="number" id="primary-year-end" name="year" min="1900" max="2100" placeholder="YYYY" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Skills</label>
                        <textarea id="skills" name="skills" placeholder="Provide your Skills" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="work-experience">Work Experience</label>
                        <textarea id="work-experience" name="work-experience" placeholder="Describe your work experience" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit CV</button>
                </form>

                <div className="form-footer">
                    <p>&copy; 2025 CV Project. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default AddCV;