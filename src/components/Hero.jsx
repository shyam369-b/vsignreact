import React, { useState, useEffect, useCallback } from 'react';
import Video1 from '../assets/videos/video1.mp4';
import Video2 from '../assets/videos/video2.mp4';
import Video3 from '../assets/videos/video3.mp4';
import Video4 from '../assets/videos/video4.mp4';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [Video1, Video2, Video3, Video4];
  const content = [
    {
      company: "Hydertabad No.1 Signage Company",
      title: "V SIGN",
      topic: "Project Name",
      description: "Project Description ...",
    },
    {
      company: "Hydertabad No.1 Signage Company",
      title: "V SIGN",
      topic: "Project Name",
      description: "Project Description ...",
    },
    {
      company: "Hydertabad No.1 Signage Company",
      title: "V SIGN",
      topic: "Project Name",
      description: "Project Description ...",
    },
    {
      company: "Hydertabad No.1 Signage Company",
      title: "V SIGN",
      topic: "Project Name",
      description: "Project Description ...",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); 
    }, 7000);

    return () => clearInterval(interval); 
  }, [handleNext]);
  useEffect(() => {
  const contentElements = document.querySelectorAll('.content.fade-in');
  contentElements.forEach((element) => {
    element.classList.remove('fade-in');
    void element.offsetWidth; // Trigger reflow
    element.classList.add('fade-in');
  });
}, [currentIndex]);
 
  useEffect(() => {
    const activeVideo = document.querySelector('.list .item.active video');
    if (activeVideo) {
      activeVideo.currentTime = 0; 
      activeVideo.play(); 
    }
  }, [currentIndex]);

  const renderTitleWithColors = (title) => {
    const words = title.split(" "); 
    return words.map((word, index) => {
      let color = ''; 
      if (index === 0) color = '#fafafa';
      else if (index === 1) color = '#74b734'; 
      else color = 'white'; 

      return <span key={index} style={{ color: color }}>{word} </span>;
    });
  };

  const renderCompanyWithColors = (company) => {
    const words = company.split(" "); 
    return words.map((word, index) => {
      let color = ''; 
      if (index === 0) color = '#74b734'; 
      else if(index ===1) color = '#74b734'
      
      else color = 'white'; 
      return <span key={index} style={{ color: color }}>{word} </span>;
    });
  };

  return (
    <div className="carousel">
      {/* Main Video List */}
      <div className="list">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`} 
          >
            <video
              src={video}
              muted
              loop
              autoPlay={index === currentIndex} 
            />
            <div className={`content ${index === currentIndex ? 'fade-in' : ''}`}>
              
              <div className="title">{renderTitleWithColors(content[index].title)}</div>
              <div className="topic">{content[index].topic}</div>
              <div className="des">{content[index].description}</div>
              <button className='buttons'>EXPLORE 🡺</button>
              
              <div className='hero-caption'>{renderCompanyWithColors(content[index].company)}</div>
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
            <video src={video} muted/>
            <div className="content">
              <div className="title">Project Name</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>⮜</button>
        <button id="next" onClick={handleNext}>⮞</button>
      </div>

    </div>
  );
}

export default Hero;
