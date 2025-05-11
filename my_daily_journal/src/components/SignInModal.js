import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change useHistory to useNavigate
import '../css/Modal.css'; // Import the modal styles

const SignInModal = ({ isOpen, onClose, onForgotPassword, SignupModal }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // If successful, redirect to home
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h1 className="modal-title">Sign In</h1>
        <p className="modal-subtitle">Sign in with your email!</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <p className="modal-footer">
          <span className="link" onClick={onForgotPassword}>Forgot Password?</span>
        </p>
        <p className="modal-footer">
          <span className="link" onClick={SignupModal}>Don't have an Account?</span>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
