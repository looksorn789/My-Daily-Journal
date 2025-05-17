import React from 'react';
import '../css/Modal.css'; // Import the modal styles

const WelcomeModal = ({ isOpen, onClose, onOpenSignIn, onOpenSignUp }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h2 className="modal-title">Hello!</h2>
        <p className="modal-subtitle">Come Join Us Now By Signing Up Or Signing In With Your Email.</p>
        
        {/* Wrap buttons in divs to ensure they are on separate lines */}
        <div className="modal-buttons">
          <button className="btn-create" onClick={() => { onOpenSignUp(); onClose(); }}>Create Your Account</button>
        </div>
        <div>
          <button className="btn-signin" onClick={() => { onOpenSignIn(); onClose(); }}>Sign In To Your Account!</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
