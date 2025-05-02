import { Link } from "react-router-dom";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Link to="/home" className="home-link">
        Click this to go to home
      </Link>
    </div>
  );
}

export default LandingPage;
