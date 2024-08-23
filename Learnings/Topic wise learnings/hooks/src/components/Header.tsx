// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <div className="left-corner">Name</div>
        <nav>
          <a href="#blog">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <button>Newsletter</button>
        <button>Dark Mode</button>
        <button>Light Mode</button>
      </div>
    </header>
  );
};

export default Header;
