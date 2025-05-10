import React, { useState } from "react";
import Header from "../components/Header";
import "../css/JournalEntries.css";

function JournalEntries() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = ["😀", "😊", "🙂", "😐", "🙁", "😢", "😠", "😖"];

  return (
    <div>
      <Header />
      <div className="journal-container">
        <aside className="sidebar">
          <h3>Here are 10 journal prompts you can use:</h3>
          <ul>
            <li>What was the best part of your day?</li>
            <li>What are you grateful for today?</li>
            <li>How did you feel today overall?</li>
            <li>What made you smile today?</li>
            <li>What challenge did you face today, and how did you overcome it?</li>
            <li>What inspired you today?</li>
            <li>What’s one thing you learned today?</li>
            <li>How did you take care of yourself today?</li>
            <li>What’s something you’re looking forward to tomorrow?</li>
            <li>If you could change one thing about today, what would it be?</li>
          </ul>
        </aside>

        <main className="journal-entry">
          <h2>User’s Journal Title</h2>
          <p>
            Today was such a wonderful day! I woke up early and felt energized...
          </p>
          <small>March 12, 2025</small>
        </main>

        <aside className="mood-selector">
          <h4>How are you<br/>feeling today?</h4>
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

export default JournalEntries;
