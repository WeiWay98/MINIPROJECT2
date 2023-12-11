// SignupPage.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './SignupPage.css';  // Import the SignupPage CSS

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation or data processing here
    // For simplicity, we'll just show an alert
    alert('Thank you for signing up!');
  };

  return (
    <div className="SignupPage">
      <Navbar />
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
          <label>
            Date of Birth:
            <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
