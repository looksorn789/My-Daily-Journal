import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import "../css/MyNotebook.css";

const journalPages = [
  {
    title: "A Beautiful Start",
    body: `Today was such a wonderful day! I woke up early and played some marvel rivals.`,
    date: "March 12, 2025",
    photos: ["wake_up.jpg", "rivals.jpeg", "croissant.png", "polaroid-4.png"]
  },
  {
    title: "Rainy Reflections",
    body: `It rained all day, but I found joy staying in...`,
    date: "March 13, 2025",
    photos: ["Raining.jpg", "polaroid-2.png"]
  },
  {
    title: "Sunshine & Goals",
    body: `I finally finished my portfolio site! It was tough but rewarding...`,
    date: "March 14, 2025",
    photos: ["scrap.png", "track.png"]
  }
];

function MyNotebook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const page = journalPages[currentPage];

  const handlePrev = () => {
  setCurrentPage((prev) => Math.max(prev - 1, 0));
  setActivePhotoIndex(0);
};

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, journalPages.length - 1));
    setActivePhotoIndex(0);
  };

  const handleFlipOnePhoto = () => {
    if (isFlipping) return; // optional: prevent spam clicks
    setIsFlipping(true);

    // Flip immediately
    setActivePhotoIndex((prev) =>
      prev + 1 < page.photos.length ? prev + 1 : 0
    );

    // Reset flip lock after short delay (so CSS class resets cleanly)
    setTimeout(() => setIsFlipping(false), 300); // short, only for class reset
  };

  useEffect(() => {
  if (flipping) {
    let index = 1;
    const interval = setInterval(() => {
      if (index < page.photos.length) {
        setActivePhotoIndex(index);
        index++;
      } else {
        clearInterval(interval);
        setActivePhotoIndex(0); // reset right away
        setFlipping(false);
      }
    }, 600); // faster flip
    return () => clearInterval(interval);
  }
  }, [flipping, page.photos]);

  return (
    <div>
      <Header />
      <div className="notebook-container">
        <button className="nav-arrow left" onClick={handlePrev}>‹</button>

        <div className="notebook-page journal-side">
          <h2>{page.title}</h2>
          <p>{page.body}</p>
          <small>{page.date}</small>
        </div>

        <div className="notebook-page photo-side" onClick={handleFlipOnePhoto}>
          <div className="flip-photo-container">
            {page.photos.map((photo, index) => (
              <img
                key={index}
                src={`/images/${photo}`}
                alt={`Polaroid ${index + 1}`}
                className={`photo-flip ${
                  index === activePhotoIndex ? "visible flip-animate" : "hidden"
                }`}
              />
            ))}
          </div>
          <small className="photo-date">{page.date}</small>
        </div>

        <button className="nav-arrow right" onClick={handleNext}>›</button>
      </div>
    </div>
  );
}

export default MyNotebook;