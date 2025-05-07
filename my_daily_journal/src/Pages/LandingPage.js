import { Link } from "react-router-dom";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <h1 className="site-title">My DailyJournal</h1>
        <Link to="/home" className="cta-button">
          Start Journaling Today!
        </Link>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section className="intro-section">
          <h2 className="section-title">Welcome to My DailyJournal</h2>
          <p className="section-subtext">
          Our Daily Journal Website is designed to be a simple and easy-to-use platform that allows users to write and share their journal entries. Whether you enjoy reflecting on your thoughts, feelings, or daily life, this app is perfect for you!
          </p>
        </section>

        <section className="feature-section">
          <img src="../images/croissant.png"/>
          <h3 className="feature-title">Write Your Thoughts About Today!</h3>
        </section>

        <section className="feature-section">
          <img src="../images/scrap.png"/>
          <h3 className="feature-title">Build Your Mood Board!</h3>
        </section>

        <section className="feature-section">
          <img src="../images/track.png"/>
          <h3 className="feature-title">Stay In Track!</h3>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
