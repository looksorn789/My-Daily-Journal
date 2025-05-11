import React from 'react';
import '../css/Modal.css'; // Import the modal styles

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h1 className="modal-title">Forgot Password</h1>
        <p className="modal-subtitle">Enter your email to reset your password.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
