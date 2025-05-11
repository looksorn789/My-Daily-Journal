import React from 'react';

const WelcomeModal = ({ isOpen, onClose, onOpenSignIn, onOpenSignUp }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Hello!</h2>
        <p>Come Join us now by signing up or signing in.</p>
        <button onClick={() => { onOpenSignUp(); onClose(); }}>Create Your Account</button>
        <button onClick={() => { onOpenSignIn(); onClose(); }}>Sign In To Your Account!</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
