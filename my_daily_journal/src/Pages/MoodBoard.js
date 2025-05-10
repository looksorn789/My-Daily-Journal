import React, { useState } from "react";
import Header from "../components/Header";
import "../css/MoodBoard.css";

function MoodBoard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = ["😀", "😊", "🙂", "😐", "🙁", "😢", "😠", "😖"];

  return (
    <div>
      <Header />
      <div className="moodboard-container">
        <aside className="moodboard-instructions">
          <h3>Add 4 Pictures<br />Defining<br />Your Mood<br />Today!</h3>
          <button className="upload-icon">📷</button>
        </aside>

        <main className="moodboard-canvas">
          <div className="polaroid-group">
            <img src="/images/polaroid-1.png" alt="Polaroid 1" className="polaroid top-left" />
            <img src="/images/polaroid-2.png" alt="Polaroid 2" className="polaroid top-right" />
            <img src="/images/polaroid-3.png" alt="Polaroid 3" className="polaroid bottom-left" />
            <img src="/images/polaroid-4.png" alt="Polaroid 4" className="polaroid bottom-right" />
          </div>
          <small className="photo-date">March 12, 2025</small>
        </main>

        <aside className="mood-selector">
          <h4>How are you<br />feeling today?</h4>
          <div className="emojis">
            {moods.map((emoji, index) => (
              <button
                key={index}
                className={`emoji-button ${selectedMood === index ? "selected" : ""}`}
                onClick={() => setSelectedMood(index)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MoodBoard;
