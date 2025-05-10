import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoutClick = () => {
    setMenuOpen(false);
    setShowModal(true);
  };
  
  const handleConfirmLogout = () => {
    setShowModal(false);
    // replace with actual logout logic
    window.location.href = "/";
  };
  
  const handleCancelLogout = () => {
    setShowModal(false);
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
          <NavLink to="/profile" onClick={toggleMenu}>Profile Settings</NavLink>
          <NavLink to="/terms" onClick={toggleMenu}>Terms and Agreement</NavLink>
          <NavLink to="/privacy" onClick={toggleMenu}>Privacy Policy</NavLink>
          <button onClick={handleLogoutClick} className="logout-link">Log Out</button>
        </div>
      )}
    <LogOutModal
        isOpen={showModal}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </header>
  );
};

export default Header;
