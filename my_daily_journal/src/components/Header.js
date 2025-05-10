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

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="theme-toggle">
            <span>☀️</span> / <span>🌙</span>
          </div>
          <NavLink to="/profilesettings" onClick={toggleMenu}>Profile Settings</NavLink>
          <NavLink to="/terms" onClick={toggleMenu}>Terms and Agreement</NavLink>
          <NavLink to="/privacy" onClick={toggleMenu}>Privacy Policy</NavLink>
          <NavLink to="/logout" onClick={toggleMenu}>Log Out</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
