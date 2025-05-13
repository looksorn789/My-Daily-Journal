import React, { useState } from "react";
import Header from "../components/Header";
import "../css/JournalEntries.css";

function JournalEntries({ selectedMood, setSelectedMood, setJournalEntries, photos }) {
  const [journalTitle, setJournalTitle] = useState("Journal Title"); // Default title
  const [journalEntry, setJournalEntry] = useState("");
  const [journalDate, setJournalDate] = useState(new Date().toLocaleDateString()); // Set to current date
  const [showModal, setShowModal] = useState(false);

  const moods = ["😀", "😊", "🙂", "😐", "🙁", "😢", "😠", "😖"];
  
  // Define mood colors
  const moodColors = {
    0: "#ffeb3b", // Happy
    1: "#cddc39", // Content
    2: "#ff9800", // Neutral
    3: "#9e9e9e", // Sad
    4: "#9c27b0", // Angry
    5: "#3f51b5", // Depressed
    6: "#f44336", // Frustrated
    7: "#607d8b", // Confused
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const newEntry = {
    title: journalTitle,
    body: journalEntry,
    date: journalDate,
    mood: selectedMood,
    photos: photos,
  };
  setJournalEntries((prevEntries) => [...prevEntries, newEntry]);

  // Reset fields
  setJournalTitle("Journal Title");
  setJournalEntry("Write your journal entry here...");
  setJournalDate(new Date().toLocaleDateString());
  setSelectedMood(null);

  // Show modal
  setShowModal(true);
  setTimeout(() => setShowModal(false), 2000); // hide after 2 seconds
};

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
            <li>What's one thing you learned today?</li>
            <li>How did you take care of yourself today?</li>
            <li>What's something you're looking forward to tomorrow?</li>
            <li>If you could change one thing about today, what would it be?</li>
          </ul>
        </aside>

        <main className="journal-entry" style={{ backgroundColor: selectedMood !== null ? moodColors[selectedMood] : "#fffccf" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={journalTitle}
              onChange={(e) => setJournalTitle(e.target.value)} // Update title on change
              style={{ fontSize: "30px", textAlign: "center", marginBottom: "20px", width: "100%" }} // Style for title input
            />
            <textarea
              placeholder="Write your journal entry here..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              style={{ width: "100%", height: "200px", fontSize: "20px", lineHeight: "1.6" }}
            />
            <button type="submit" className="save-button">Save Entry</button>
            <small>{journalDate}</small> {/* Display the current date */}
          </form>
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">✅ Entry Saved!</div>
        </div>
      )}
    </div>
  );
}

export default JournalEntries;