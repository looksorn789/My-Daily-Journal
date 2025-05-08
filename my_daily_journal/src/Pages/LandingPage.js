import { Link } from "react-router-dom";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/notebook-icon.png" alt="Notebook Icon" className="navbar-icon" />
          <Link to="/" className="site-title">My DailyJournal</Link>
        </div>
        <Link to="/home" className="cta-button">Start Journaling Today!</Link>
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
              <Link to="/signup" className="btn-signup">Sign Up</Link>
              <Link to="/login" className="btn-login">Log In</Link>
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
    </div>
  );
}

export default LandingPage;
