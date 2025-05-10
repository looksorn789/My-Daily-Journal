import React from "react";
import "../css/LogOut.css";

const LogOutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="logout-overlay">
      <div className="logout-modal">
        <h2>Are you sure<br />you want to<br /><span className="bold">Log Out?</span></h2>
        <div className="logout-buttons">
          <button onClick={onConfirm} className="logout-btn">Yes</button>
          <button onClick={onClose} className="logout-btn">No</button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
