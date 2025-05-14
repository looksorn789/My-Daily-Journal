import React, { useState } from 'react';
import '../css/Modal.css';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [emailSent, setEmailSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true);

    // Optionally auto-close after 3 seconds
    setTimeout(() => {
      setEmailSent(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>

        {emailSent ? (
          <>
            <h1 className="modal-title">Check Your Email!</h1>
            <p className="modal-subtitle">Instructions have been sent to your email address.</p>
          </>
        ) : (
          <>
            <h1 className="modal-title">Want to Reset Your Password?</h1>
            <p className="modal-subtitle">Enter your email to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" required />
              <button type="submit">Reset Password</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
