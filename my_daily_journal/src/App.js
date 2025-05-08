import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import TermsAndService from "./Pages/TermsAndService";
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import JournalEntries from './Pages/JournalEntries';
import Calendar from './Pages/Calendar';
import MoodBoard from './Pages/MoodBoard';
import MyNotebook from './Pages/MyNotebook';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsAndService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notebook" element={<MyNotebook />} />
        <Route path="/moodboard" element={<MoodBoard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/journalentries" element={<JournalEntries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
