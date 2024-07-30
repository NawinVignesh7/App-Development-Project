import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="admin-dashboard-title">Admin Dashboard</h1>
      <ul className="admin-dashboard-menu">
        <li>
          <Link to="/admin/products" className="admin-dashboard-link">Manage Products</Link>
        </li>
        <li>
          <Link to="/admin/feedback" className="admin-dashboard-link">User Feedback</Link>
        </li>
        <li>
          <Link to="/admin/reports" className="admin-dashboard-link">Reports</Link>
        </li>
        {/* Uncomment or add new links when components are ready */}
        {/* <li>
          <Link to="/admin/users" className="admin-dashboard-link">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/settings" className="admin-dashboard-link">Admin Settings</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default AdminDashboard;
