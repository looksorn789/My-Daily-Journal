import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/images/notebook-icon.png" alt="Notebook Logo" className="logo" />
        <span className="app-name">My DailyJournal</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <NavLink to="/journalentries" className={({ isActive }) => isActive ? "active" : ""}>Journal Entries</NavLink>
        <NavLink to="/moodboard" className={({ isActive }) => isActive ? "active" : ""}>Mood Board</NavLink>
        <NavLink to="/notebook" className={({ isActive }) => isActive ? "active" : ""}>My Notebook</NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}>Calendar</NavLink>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>☰</div>
    </header>
  );
};

export default Header;
