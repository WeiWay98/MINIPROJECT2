// NextPage.js
import React from 'react';
import Navbar from './Navbar';
import './NextPage.css';

function NextPage() {
  return (
    <div className="NextPage">
      <Navbar />
      <main>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&mute=1"
            title="GRAND THEFT AUTO 6 REVEAL TRAILER"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default NextPage;
