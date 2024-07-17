import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>ALURAFLIX</h1>
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/nuevo-video">Nuevo Video</Link>
      </nav>
    </header>
  );
};

export default Header;


