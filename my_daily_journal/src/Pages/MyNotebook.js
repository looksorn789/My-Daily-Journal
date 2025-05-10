import React from "react";
import Header from "../components/Header";
import "../css/MyNotebook.css";

function MyNotebook() {
  return (
    <div>
      <Header />
      <div className="notebook-container">
        <button className="nav-arrow left">‹</button>
        <div className="notebook-page journal-side">
          <h2>User’s Journal Title</h2>
          <p>
          Today was such a wonderful day! I woke up early and felt energized, which is rare for me. The weather was perfect—sunny but not too hot—and I decided to take a walk in the park. The flowers are starting to bloom, and it just felt so peaceful to be surrounded by nature. At work, everything went smoothly. I finished a big project I’d been working on for weeks, and I got some great feedback from my boss, which made me feel really proud. Afterward, I met up with a friend for coffee, and we chatted about everything under the sun. We laughed so much that my cheeks hurt. In the evening, I made a delicious dinner and even had time to read a few chapters of my favorite book. It was the kind of day that reminded me how lucky I am. I feel so grateful for the little things—good conversations, beautiful weather, and the satisfaction of accomplishing my goals. I’m in such a good mood, and I’m excited for what tomorrow will bring!
          </p>
          <small>March 12, 2025</small>
        </div>

        <div className="notebook-page photo-side">
            <div className="polaroid-group">
                <img src="/images/polaroid-1.png" alt="Polaroid 1" className="polaroid top-left" />
                <img src="/images/polaroid-2.png" alt="Polaroid 2" className="polaroid top-right" />
                <img src="/images/polaroid-3.png" alt="Polaroid 3" className="polaroid bottom-left" />
                <img src="/images/polaroid-4.png" alt="Polaroid 4" className="polaroid bottom-right" />
            </div>
            <small className="photo-date">March 12, 2025</small>
            </div>


        <button className="nav-arrow right">›</button>
      </div>
    </div>
  );
}

export default MyNotebook;
