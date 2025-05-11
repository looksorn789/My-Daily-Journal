import React from 'react';
import '../css/Modal.css'; // Import the modal styles

const SignUpModal = ({ isOpen, onClose, onOpenSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h1 className="modal-title">Sign Up</h1>
        <p className="modal-subtitle">Create an account with your email!</p>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="modal-footer">
          <span className="link" onClick={() => { onOpenSignIn(); onClose(); }}>Already have an account?</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;