import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import TermsAndService from "./Pages/TermsAndService";
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import JournalEntries from './Pages/JournalEntries';
import Calendar from './Pages/Calendar';
import MoodBoard from './Pages/MoodBoard';
import MyNotebook from './Pages/MyNotebook';
import ProfilePage from './Pages/ProfilePage'
import './css/App.css';
import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsAndService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notebook" element={<MyNotebook journalEntries={journalEntries} selectedMood={selectedMood} />} />
        <Route path="/moodboard" element={<MoodBoard selectedMood={selectedMood} setSelectedMood={setSelectedMood} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/journalentries" element={<JournalEntries selectedMood={selectedMood} setSelectedMood={setSelectedMood} setJournalEntries={setJournalEntries} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
