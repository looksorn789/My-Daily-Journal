import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/LandingPage.css";
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import WelcomeModal from '../components/WelcomeModal';

function LandingPage() {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);

  // Define the function to open the SignUpModal
  const openSignUp = () => {
    setSignUpOpen(true);
    setWelcomeModalOpen(false); // Close the WelcomeModal
  };

  return (
    <div className="landing-page">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/notebook-icon.png" alt="Notebook Icon" className="navbar-icon" />
          <Link to="/" className="site-title">My DailyJournal</Link>
        </div>
        <Link to="#" className="cta-button" onClick={() => setWelcomeModalOpen(true)}>Start Journaling Today!</Link>
      </nav>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          {/* Left side content */}
          <div className="intro-left">
            <div className="intro-title">
              <img src="/images/notebook-icon.png" alt="Logo" className="intro-logo" />
              <h2>My Daily Journal</h2>
            </div>
            <p className="intro-desc">
              Our Daily Journal Website is designed to be a simple and easy-to-use platform that allows users to write and share their journal entries. Whether you enjoy reflecting on your thoughts, feelings, or daily life, this app is perfect for you!
            </p>

            <div className="intro-buttons">
              <Link to="#" className="btn-signup" onClick={openSignUp}>Sign Up</Link>
              <Link to="#" className="btn-login" onClick={() => setSignInOpen(true)}>Log In</Link>
            </div>

            <div className="disclaimer">
              <p>By continuing you agree to our <Link to="/terms" className="disclaimer-link">Terms and Service</Link>.</p>
              <p>Please read our <Link to="/privacy" className="disclaimer-link">Privacy Policy</Link>.</p>
            </div>
          </div>

          {/* Right side image */}
          <div className="intro-image-right">
            <img src="/images/croissant.png" alt="Croissant and coffee" />
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="feature">
        <img src="/images/write.png" alt="Write" className="feature-img" />
        <h3 className="feature-text">Write Your Thoughts About Today!</h3>
      </section>

      <section className="feature">
        <img src="/images/scrap.png" alt="Mood Board" className="feature-img" />
        <h3 className="feature-text">Build Your Mood Board!</h3>
      </section>

      <section className="feature">
        <img src="/images/track.png" alt="Habit Tracker" className="feature-img" />
        <h3 className="feature-text">Stay In Track!</h3>
      </section>

      {/* Modals */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setSignUpOpen(false)} 
        onOpenSignIn={setSignInOpen}
      />
      <WelcomeModal 
        isOpen={isWelcomeModalOpen} 
        onClose={() => setWelcomeModalOpen(false)} 
        onOpenSignUp={openSignUp}
        onOpenSignIn={() => setSignInOpen(true)}
      />
    </div>
  );
}

export default LandingPage;
