
import React, { useState, useEffect } from 'react';

export const AnimatedTitle = () => {
  const [showData, setShowData] = useState(false);
  const [showSpeaks, setShowSpeaks] = useState(false);
  const [showExclamation1, setShowExclamation1] = useState(false);
  const [showExclamation2, setShowExclamation2] = useState(false);
  const [showExclamation3, setShowExclamation3] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setShowData(true), 500);
    const timer2 = setTimeout(() => setShowSpeaks(true), 1200);
    const timer3 = setTimeout(() => setShowExclamation1(true), 1800);
    const timer4 = setTimeout(() => setShowExclamation2(true), 2000);
    const timer5 = setTimeout(() => setShowExclamation3(true), 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      {/* Data text - drops from top */}
      <div
        className={`transition-all duration-700 ease-out ${
          showData 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-20 opacity-0'
        }`}
      >
        <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Data
        </span>
      </div>

      {/* Speaks text - drops from top with delay */}
      <div
        className={`ml-4 transition-all duration-700 ease-out ${
          showSpeaks 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-20 opacity-0'
        }`}
      >
        <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Speaks
        </span>
      </div>

      {/* Exclamation marks - pop up one by one */}
      <div className="ml-2 flex space-x-1">
        <div
          className={`transition-all duration-300 ease-out ${
            showExclamation1 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
        >
          <span className="text-4xl md:text-6xl font-bold text-red-500 animate-bounce">!</span>
        </div>
        <div
          className={`transition-all duration-300 ease-out ${
            showExclamation2 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
        >
          <span className="text-4xl md:text-6xl font-bold text-red-500 animate-bounce">!</span>
        </div>
        <div
          className={`transition-all duration-300 ease-out ${
            showExclamation3 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
        >
          <span className="text-4xl md:text-6xl font-bold text-red-500 animate-bounce">!</span>
        </div>
      </div>
    </div>
  );
};
