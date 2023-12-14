import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-radial-header py-4 px-6 flex justify-between items-center">
      <div className="text-cyan-600 text-3xl font-bold font-logo">ARC Teach</div>
      <nav className="space-x-4">
        <a href="/" className="text-white text-lg font-semibold hover:text-cyan-600">Home</a>
        <a href="/tasks" className="text-white text-lg font-semibold hover:text-cyan-600">Tasks</a>
        <a href="/about" className="text-white text-lg font-semibold hover:text-cyan-600">About</a>
      </nav>
    </header>
  );
};

export default Header;
