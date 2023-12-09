import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-radial-header py-4 px-6 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">ARC Teach</div>
      <nav className="space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/tasks" className="text-white hover:text-gray-300">Tasks</a>
        <a href="/about" className="text-white hover:text-gray-300">About</a>
      </nav>
    </header>
  );
};

export default Header;
