import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosInstance';
import PrintButton from '../Buttons/PrintButton';

function EditCV({ id }) {
    const navigate = useNavigate();

    const [cvData, setCvData] = useState({
        full_namename: '',
        objective: '',
        email: '',
        phone_number: '',
        skills: '',
        work_experince: ''
    });

    useEffect(() => {
        const fetchCvData = async () => {
            try {
                const response = await api.get(`/api/cv/${id}`);
                setCvData(response.data.data);
            } catch (error) {
                console.error('Error fetching CV data:', error);
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
            alert('CV updated successfully');
        } catch (error) {
            console.error('Error updating CV:', error);
            alert('Error updating CV');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input 
                            type="text" 
                            id="full_name" 
                            name="full_name" 
                            value={cvData.full_name || ''} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="objective">Objective</label>
                        <textarea 
                            id="objective" 
                            name="objective" 
                            value={cvData.objective || ''} 
                            onChange={handleChange} 
                            placeholder="Describe your Objective" 
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={cvData.email || ''} 
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
                            value={cvData.phone_number || ''} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills</label>
                        <textarea 
                        id="skills" 
                        name="skills" 
                        value={cvData.skills || ''} 
                        onChange={handleChange} 
                        placeholder="Provide your Skills" 
                        required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="work_experince">Work Experience</label>
                        <textarea 
                        id="work_experince" 
                        name="work_experince" 
                        value={cvData.work_experince || ''} 
                        onChange={handleChange} 
                        placeholder="Describe your work experience" 
                        required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Update CV</button>
                </form>

                <div className="form-footer">
                    <p>&copy; 2025 CV Project. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default EditCV;
