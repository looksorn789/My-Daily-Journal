import React, { useState } from "react";
import "../css/Modal.css";

const MoodBoardSaveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        ✅ MoodBoard Saved!
      </div>
    </div>
  );
};

export default MoodBoardSaveModal;