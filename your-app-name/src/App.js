// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';



function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="main-content">
          <div className="massive-image">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_TkOQT_o9zYgzVwR1LH_8MDdFIRbMa-Pj1py6x-T-umHedDQO3XBaXk9lOafjAxE_bpDSeCiiV1SNgAoYA0Od81hV7RgHj_QDsJtOtwWKkvMD0WQBA8cOBW1T9bQs8qTs6hkqResZexdkkuZe1hYGiznVa4q5oRctZUXoKRkxlSDqh6fhyphenhyphenM70xIQ0_tCQ/s1920/gta-6-wallpaper-4k.webp" alt="Homepage" />
            <Link to="/next-page">
              <div className="clickable-overlay"></div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;