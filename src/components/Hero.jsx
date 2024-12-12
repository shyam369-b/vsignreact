import React, { useState, useEffect, useCallback, useRef } from 'react';
import Video1 from '../assets/videos/video1.mp4';
import Video2 from '../assets/videos/video2.mp4';
import Video3 from '../assets/videos/video3.mp4';
import Video4 from '../assets/videos/video4.mp4';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const videos = [Video1, Video2, Video3, Video4];
  const content = videos.map((_, index) => ({
    company: "Hyderabad No.1 Signage Company",
    title: `V SIGN Project`,
    topic: `Topic ${index + 1}`,
    description: `Description for project ${index + 1}`,
  }));

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel with visibility handling
  useEffect(() => {
    const intervalRef = { current: null };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current);
      } else {
        intervalRef.current = setInterval(handleNext, 7000);
      }
    };

    intervalRef.current = setInterval(handleNext, 7000);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleNext]);

  // Ensure only the active video plays
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  const renderTextWithColors = (text, rules) =>
    text.split(" ").map((word, index) => (
      <span key={index} style={{ color: rules[index] || 'white' }}>
        {word}{" "}
      </span>
    ));

  return (
    <div className="carousel">
      {/* Main Video List */}
      <div className="list">
        {videos.map((video, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              loop
              autoPlay={index === currentIndex}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
            <div className={`content fade-in`}>
              <div className="title">
                {renderTextWithColors(content[index].title, ['#fafafa', '#74b734'])}
              </div>
              <div className="topic">{content[index].topic}</div>
              <div className="des">{content[index].description}</div>
              <button className="buttons">EXPLORE 🡺</button>
              <div className="hero-caption">
                {renderTextWithColors(content[index].company, ['#74b734', '#74b734'])}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active-thumbnail' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <video src={video} muted alt={`Thumbnail for video ${index + 1}`} />
            <div className="content">
              <div className="title">Project Name {index + 1}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button id="prev" onClick={handlePrev} aria-label="Previous">
          ⮜
        </button>
        <button id="next" onClick={handleNext} aria-label="Next">
          ⮞
        </button>
      </div>
    </div>
  );
}

export default Hero;
