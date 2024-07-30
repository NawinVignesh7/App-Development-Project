// src/Components/AdminUser.js

import React, { useEffect, useState } from 'react';
import './AdminUsers.css'; // Ensure this CSS file exists

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        console.log('Fetching users...');
        const response = await fetch('/db.json'); // Adjust URL if you move the file to public
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data); // Check what is fetched
        setUsers(data.users || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(error.message);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="admin-user">
      <h2>Manage Users</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td> {/* Changed from name to username */}
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
