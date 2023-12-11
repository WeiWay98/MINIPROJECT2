// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className="dropdown">
            <span className="dropdown-btn">PREVIOUS GAMES</span>
            <div className="dropdown-content">
              <a href="https://www.rockstargames.com/gta-v" target="_blank" rel="noopener noreferrer">GRAND THEFT AUTO V</a>
              <a href='https://www.rockstargames.com/reddeadredemption2' target="_blank" rel="noopener noreferrer">RED DEAD REDEMPTION 2</a>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-btn">STORY</span>
            <div className="dropdown-content">
              {/* Link to StoryPage */}
              <Link to="/story-page">DISCOVER</Link>
            </div>
          </li>
          <li className='dropdown'>
            <span className="dropdown-btn">PREORDER</span>
            <div className='dropdown-content'>
                <a href="https://www.playstation.com/en-au/games/grand-theft-auto-v/" target='_blank' rel='noopener noreferrer'>PLAYSTATION</a>
                <a href="https://www.xbox.com/en-AU/games/gta-v" target='_blank' rel='noopener noreferrer'>XBOX</a>
            </div>
          </li>
          <li className='dropdown'>
            <span className="dropdown-btn">SIGN UP</span>
            <div className='dropdown-content'>
              {/* Link to SignupPage */}
              <Link to="/signup">CREATE AN ACCOUNT</Link>
            </div>
          </li>
          {/* ... (other dropdowns) ... */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;