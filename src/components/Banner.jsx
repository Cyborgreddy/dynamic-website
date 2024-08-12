import React, { useState, useEffect } from 'react';

const Banner = ({ isVisible, description, link, timer }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (isVisible && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible, countdown]);

  if (!isVisible || countdown <= 0) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>}
      <p>{`This banner will disappear in ${countdown} seconds`}</p>
    </div>
  );
};

export default Banner;
