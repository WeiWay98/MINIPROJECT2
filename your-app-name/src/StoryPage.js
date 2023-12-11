// src/StoryPage.js
import React from 'react';
import Navbar from './Navbar';
import './StoryPage.css';

function StoryPage() {
  return (
    <div className="StoryPage">
      <Navbar />
      <div className="story-content">
        <div className="text-content">
          <h2>MORE INFORMATION TO BE REVEALED SOON, SIGN UP FOR EARLY ACCESS </h2>
          <p>
          The story follows a criminal duo: Lucia, our first female protagonist since 2000, and her male partner Jason as they explore the world of Vice City, a locaton we havent been back to since Grand Theft Auto: Vice City.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://www.pixground.com/wp-content/uploads/2023/12/Gta-6-Jason-And-Lucia-4K-Wallpaper-1024x576.png"
            alt="Description of the image"
          />
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
