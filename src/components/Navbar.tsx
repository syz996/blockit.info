import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, BookOpen, Home, HelpCircle } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Block IT</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/game" icon={<Gamepad2 />} text="Play" />
            <NavLink to="/leaderboard" icon={<Trophy />} text="Leaderboard" />
            <NavLink to="/tutorial" icon={<BookOpen />} text="Tutorial" />
            <NavLink to="/faq" icon={<HelpCircle />} text="FAQ" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;