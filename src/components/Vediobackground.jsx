import React from 'react'
import backgroundVideo from '../assets/Vamsiram-video.mp4';

function Vediobackground() {
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop className="video-element">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <h1>Hyderabad's No.1</h1>
      </div>
      
    </div>
  )
}

export default Vediobackground
