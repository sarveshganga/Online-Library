import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  return (
    <>
    
      <nav className="navbar">
        <h1 className="logo">BookZone</h1>
        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse Books</Link></li>
          <li><Link to="/add">Add Book</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
