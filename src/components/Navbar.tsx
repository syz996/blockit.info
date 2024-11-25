import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, BookOpen, Home, HelpCircle, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Block IT</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-8">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/game" icon={<Gamepad2 />} text="Play" />
            <NavLink to="/leaderboard" icon={<Trophy />} text="Leaderboard" />
            <NavLink to="/tutorial" icon={<BookOpen />} text="Tutorial" />
            <NavLink to="/faq" icon={<HelpCircle />} text="FAQ" />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } border-t border-white/10`}
      >
        <div className="px-4 py-2 space-y-2">
          <MobileNavLink to="/" icon={<Home />} text="Home" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/game" icon={<Gamepad2 />} text="Play" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/leaderboard" icon={<Trophy />} text="Leaderboard" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/tutorial" icon={<BookOpen />} text="Tutorial" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/faq" icon={<HelpCircle />} text="FAQ" onClick={() => setIsMenuOpen(false)} />
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

function MobileNavLink({ 
  to, 
  icon, 
  text, 
  onClick 
}: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;