import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const countersRef = useRef(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          observer.disconnect(); // Stop observing once activated
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div>
      <div className="counters" ref={countersRef}>
        <div>
          <div className="counter">
            <h1>{activated && <AnimatedCounter target={25000} />}+</h1>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div className="counter">
            <h1>{activated && <AnimatedCounter target={5000} />}+</h1>
            <h3>SIGNAGE INSTALLED</h3>
          </div>
          <div className="counter">
            <h1>{activated && <AnimatedCounter target={1500} />}+</h1>
            <h3>LOGO & BRANDING</h3>
          </div>
          <div className="counter">
            <h1>{activated && <AnimatedCounter target={10} />}+ YEARS</h1>
            <h3>EXPERIENCE</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

// Animated Counter
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;

    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          const increment = Math.ceil(target / 200);
          return Math.min(prevCount + increment, target);
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [count, target]);

  return <span>{count}</span>;
};

export default Counter;
