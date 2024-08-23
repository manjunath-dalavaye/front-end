// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Blog />
    </div>
  );
};

export default App;
