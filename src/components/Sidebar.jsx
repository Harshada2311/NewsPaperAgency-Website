import React from 'react'
import { Link, useLocation } from 'react-router-dom';


function Sidebar() {

  const { pathname } = useLocation();
  const navItemStyle = (path) =>
    `block p-4 rounded hover:bg-blue-600 hover:text-white ${
      pathname === path ? "bg-blue-500 text-white" : "text-gray-800"
    }`;

  return (
    <aside className="w-60 bg-white shadow flex flex-col">
      <h2 className="text-xl font-bold p-4 border-b">Newspaper Admin</h2>
      <nav className="flex-1 p-2">
        <Link to="/" className={navItemStyle("/")}>Dashboard</Link>
        <Link to="/customers" className={navItemStyle("/customers")}>Customers</Link>
        <Link to="/papers" className={navItemStyle("/papers")}>Papers</Link>
        <Link to="/billing" className={navItemStyle("/billing")}>Billing</Link>
        <Link to="/reports" className={navItemStyle("/reports")}>Reports</Link>
      </nav>
    </aside>
  );
}

export default Sidebar