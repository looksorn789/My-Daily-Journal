import { Link } from "react-router-dom";
import "../css/LandingPage.css";

function PrivacyPolicy() {
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
        <h2>Privacy Policy</h2>
        <p>Welcome to My Daily Journal! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform.
            We may collect certain types of information when you use My Daily Journal. This includes personal information such as your name, email address, and password when you create an account. Additionally, we collect the content of your journal entries, including text, mood selections, and any images you upload. We also gather usage data, such as login activity, feature usage, and device type, to help improve the platform.
            The information we collect is used to provide and enhance our services, ensuring a smooth journaling experience. We use your data to personalize features, such as mood tracking and theme preferences. Additionally, we utilize this data to improve security measures, prevent unauthorized access, and communicate important updates about the platform.
            We store your data securely using encryption and other security measures to protect it from unauthorized access. However, no online service is completely secure, and we encourage users to regularly back up important journal entries. Your information is not shared, sold, or traded with third parties. However, we may disclose information if required by law, to protect the security of our users, or to comply with a valid governmental request.
            Users have control over their data and can update their account information through the settings page. If you wish to delete your account permanently, you may request deletion via the account settings, which will remove your data from our system.
            My Daily Journal is not intended for users under the age of 13. We do not knowingly collect personal data from children. If such data is discovered, we will take immediate steps to delete it to ensure compliance with privacy laws.
            We may update this Privacy Policy from time to time. In the event of significant changes, we will notify users through the platform or via email. By continuing to use our services after updates, you acknowledge and accept the revised policy.
            If you have any questions regarding this Privacy Policy, please contact us at [Support Email].
            By using My Daily Journal, you acknowledge that you have read and understood this Privacy Policy</p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
