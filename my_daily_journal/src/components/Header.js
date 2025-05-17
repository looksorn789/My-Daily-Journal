import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import "../css/Header.css";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogoutClick = () => {
    setMenuOpen(false);
    setShowModal(true);
  };

  // Function to check if the current page is Terms or Privacy
  const isTermsOrPrivacyPage = () => {
    console.log("Current Path:", location.pathname); // Log the current path
    return location.pathname === "/terms" || location.pathname === "/privacy";
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <NavLink to="/home" className="logo-section">
        <img src="https://looksorn789.github.io/My-Daily-Journal/images/notebook-icon.png" alt="Notebook Logo" className="logo" />
        <span className="app-name">My DailyJournal</span>
      </NavLink>

      {/* Only show the nav links if not on Terms or Privacy page */}
      {!isTermsOrPrivacyPage() && (
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <NavLink to="/journalentries" className={({ isActive }) => isActive ? "active" : ""}>Journal Entries</NavLink>
          <NavLink to="/moodboard" className={({ isActive }) => isActive ? "active" : ""}>Mood Board</NavLink>
          <NavLink to="/notebook" className={({ isActive }) => isActive ? "active" : ""}>My Notebook</NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}>Calendar</NavLink>
        </nav>
      )}

      <div className="menu-icon" onClick={toggleMenu}>☰</div>

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="theme-toggle" onClick={toggleTheme}>
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
        onClose={() => setShowModal(false)}
        onConfirm={() => window.location.href = "/"}
      />
    </header>
  );
};

export default Header;
