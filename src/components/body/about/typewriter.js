import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setCurrentText(text.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText('');
        }, 1); // Reset the currentText state after 1000ms
      }
    }, 90);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div>{currentText}</div>;
};

export default Typewriter;
