import React, { useEffect, useRef } from "react";
import Port1 from '../assets/portfolio/port1.JPG'
import Port2 from '../assets/portfolio/port2.JPG'
import Port3 from '../assets/portfolio/port3.PNG'
import '../App.css';




function Portfoliosection() {

    const carouselRefs = useRef([]);

    useEffect(() => {
      carouselRefs.current.forEach((carouselInner) => {
        if (!carouselInner) return;
  
        // Duplicate carousel items
        const items = Array.from(carouselInner.children);
        items.forEach((item) => {
          const duplicate = item.cloneNode(true);
          carouselInner.appendChild(duplicate);
        });
  
        // Apply animation dynamically
        const totalWidth = carouselInner.scrollWidth / 2; // Width of original content
        const animationName = `scroll-${Math.random().toString(36).substr(2, 9)}`;
        const styleSheet = document.styleSheets[0];
  
        styleSheet.insertRule(`
          @keyframes ${animationName} {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-${totalWidth}px);
            }
          }
        `, styleSheet.cssRules.length);
  
        carouselInner.style.animation = `${animationName} 20s linear infinite`;
      });
    }, []);

  return (
    <div>
        <section className='portfolioh-hero'>
            <div className='porth-container'>
                <div className='infinite-porth-corousel'>
                    <div>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>

                    </div>
                </div>
                <div className='infinite-porth-corousel'>
                    <div>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        
                    </div>
                </div>
                <div className='infinite-porth-corousel'>
                    <div>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        
                        
                    </div>
                </div>
                <div className='infinite-porth-corousel'>
                    <div>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port1} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        <img src={Port2} alt='imag'></img>
                        <img src={Port3} alt='imag'></img>
                        
                    </div>
                </div>
            </div>
            <div className='porth-text'>
                <div>
                    <h1>OUR PORTFOLIO</h1>
                    <p>Here is awesome work sharing with you!</p>
                    <a href='/' className='porth-btn'>Explore</a>

                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Portfoliosection
