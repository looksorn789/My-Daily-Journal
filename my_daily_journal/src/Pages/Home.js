import "../css/Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome back,</h1>
          <h2>Ready to<br />Journal Today?</h2>
        </div>
        <div className="home-image">
          <img src="/images/Journal_Home.png" alt="Open journal illustration" />
        </div>
      </div>
    </div>
  );
}

export default Home;
