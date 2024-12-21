import React, { useState, useEffect } from "react";

const TypingText: React.FC = () => {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Coming Soon...";
    let temp = "";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      temp += fullText[currentIndex].toString();
      // Ensure the correct character is added based on index
      setDisplayText(temp);
      currentIndex++; // Increment index after character has been added

      // Stop the interval once we've displayed the full string
      if (currentIndex === fullText.length - 1) {
        clearInterval(timer);
      }
    }, 100); // Typing speed in milliseconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-[55vh]  text-zinc-700">
      {/* Centered Animated Text */}
      <h1 className="text-2xl md:text-5xl font-bold tracking-wider text-center animate-pulse">
        {displayText}
      </h1>
    </div>
  );
};

export default TypingText;
