import React, { useState, useRef } from "react";
import Header from "../components/Header";
import "../css/MoodBoard.css";

function MoodBoard({ selectedMood, setSelectedMood }) {
  const [showLimitModal, setShowLimitModal] = useState(false);

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

  const [photos, setPhotos] = useState([]); // start empty

  const [photoIndex, setPhotoIndex] = useState(0);
  const fileInputRef = useRef(null);

  const handleFlip = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    // Check if it exceeds the limit
    if (photos.length + imageUrls.length > 4) {
      setShowLimitModal(true);
      // Hide modal after 2.5s
      setTimeout(() => setShowLimitModal(false), 2500);
      return;
    }

    setPhotos((prev) => [...prev, ...imageUrls]);
    setPhotoIndex(0);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Header />
      <div className="moodboard-container">
        <aside className="moodboard-instructions" onClick={triggerFileInput}>
          <h3>Add 4 Pictures<br />Defining<br />Your Mood<br />Today!</h3>
          <button className="upload-icon">📷</button>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </aside>

        <main
          className="moodboard-canvas"
          style={{ backgroundColor: selectedMood !== null ? moodColors[selectedMood] : "#fffccf" }}
          onClick={photos.length > 0 ? handleFlip : undefined}
        >
          <div className="flip-photo-container">
            {photos.length === 0 ? (
              <div className="upload-placeholder">Please Upload Your Photos</div>
            ) : (
              photos.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Mood ${i + 1}`}
                  className={`photo-flip ${
                    i === photoIndex ? "visible flip-animate" : "hidden"
                  }`}
                />
              ))
            )}
          </div>
          {photos.length > 0 && <small className="photo-date">Today</small>}
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
      {showLimitModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>You can only upload up to 4 photos!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodBoard;