import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const countersRef = useRef(null); // Ref to track the counters container
  const [activated, setActivated] = useState(false); // State to track activation

  useEffect(() => {
    const handleScroll = () => {
      if (
        countersRef.current &&
        window.pageYOffset >
          countersRef.current.offsetTop - window.innerHeight + 100 &&
        !activated
      ) {
        setActivated(true);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activated]);

  return (
    <div>
      <div className="counters" ref={countersRef}>
        <div>
          <div className="counter">
            <h1>
              {activated && <AnimatedCounter target={25000} />}+
            </h1>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div className="counter">
            <h1>
              {activated && <AnimatedCounter target={5000} />}+
            </h1>
            <h3>SIGNAGE INSTALLED</h3>
          </div>
          <div className="counter">
            <h1>
              {activated && <AnimatedCounter target={1500} />}+
            </h1>
            <h3>LOGO & BRANDING</h3>
          </div>
          <div className="counter">
            <h1>
              {activated && <AnimatedCounter target={10} />}+ YEARS
            </h1>
            <h3>EXPERIENCE</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable AnimatedCounter Component
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

    return () => clearInterval(interval); // Cleanup interval
  }, [count, target]);

  return <span>{count}</span>;
};

export default Counter;
