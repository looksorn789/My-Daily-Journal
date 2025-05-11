import { Link } from "react-router-dom";
import "../css/LandingPage.css";

function TermsAndService() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/notebook-icon.png" alt="Notebook Icon" className="navbar-icon" />
          <Link to="/" className="site-title">My DailyJournal</Link>
        </div>
        <Link to="/home" className="cta-button">
          Start Journaling Today!
        </Link>
      </nav>
      <main className="main-content">
        <h2>Terms and Service</h2>
        <p>Welcome to My Daily Journal!</p>
        <p>By using our platform, you agree to abide by these Terms and Agreement. Please read them carefully before proceeding.</p>
        <p>When you create an account with My Daily Journal, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. If you suspect any unauthorized access, you must notify us immediately.</p>
        <p>My Daily Journal grants you a limited, non-exclusive, non-transferable license to use our platform for personal and non-commercial purposes. You may not distribute, modify, reproduce, or exploit any part of the platform without our explicit permission.</p>
        <p>Users are expected to adhere to respectful and lawful behavior while using My Daily Journal. You agree not to submit content that is illegal, harmful, abusive, or violates the rights of others. We reserve the right to remove any content that violates these terms or is deemed inappropriate.</p>
        <p>All journal entries and data you create remain your intellectual property. However, by using our platform, you grant My Daily Journal a limited license to store and process your data for the purpose of providing services. We do not claim ownership over your personal content.</p>
        <p>Our platform is provided "as is" without warranties of any kind. We disclaim all liability for any direct, indirect, or incidental damages arising from the use of our platform. Users assume full responsibility for their use of My Daily Journal.</p>
        <p>We reserve the right to modify these Terms and Agreement at any time. Users will be notified of significant changes through the platform or email. Continued use of the platform after updates means you accept the revised terms.</p>
        <p>If you wish to terminate your account, you may do so at any time through the account settings. We may also suspend or terminate accounts that violate our terms or engage in misconduct.</p>
        <p>If you have any questions about these terms, please contact us at [Support Email].</p>
        <p>By using My Daily Journal, you acknowledge that you have read, understood, and agreed to these Terms and Agreement.</p>
      </main>
    </div>
  );
}

export default TermsAndService;
