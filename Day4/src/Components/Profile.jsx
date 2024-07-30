import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ user, onUpdate, onLogout }) {
  const [formData, setFormData] = useState({
    email: user.email || '',
    username: user.username || '',
  });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/users/${user.id}`, formData);
      onUpdate(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        {!editing && <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>}
      </div>
      <div className="profile-content">
        {editing ? (
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="save-button">Save</button>
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        ) : (
          <div className="profile-info">
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        )}
      </div>
      {!editing && (
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Profile;
