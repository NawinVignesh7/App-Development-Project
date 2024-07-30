import React from 'react';
import './AdminFooter.css'; // Ensure you have a separate CSS file for the admin footer

function AdminFooter() {
  return (
    <footer className="admin-footer">
      <p>&copy; 2024 Joyville. All rights reserved.</p>
      <p>
        <a href="/admin/dashboard">Dashboard</a> | 
        <a href="/admin/products">Manage Products</a> | 
        <a href="/admin/feedback">User Feedback</a> | 
        <a href="/admin/reports">Reports</a>
      </p>
    </footer>
  );
}

export default AdminFooter;
