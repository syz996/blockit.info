import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SoundControl from './components/SoundControl';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import Tutorial from './pages/Tutorial';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <SoundControl />
    </div>
  );
}

export default App;