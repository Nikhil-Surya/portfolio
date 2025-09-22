import React, { useState, useEffect, useRef } from 'react';

interface ImpactItem {
  value: string;
  label: string;
  color: string;
  numericValue: number;
}

const impactStats: ImpactItem[] = [
  {
    value: "$700M+",
    label: "Initiative Managed",
    color: "text-green-500",
    numericValue: 700
  },
  {
    value: "35%",
    label: "Performance Boosted",
    color: "text-blue-500",
    numericValue: 35
  },
  {
    value: "2+ hrs",
    label: "Weekly Time Saved",
    color: "text-purple-500",
    numericValue: 2
  },
  {
    value: "20%+",
    label: "Data Quality Achieved",
    color: "text-orange-500",
    numericValue: 20
  }
];

// Sequential counting animation hook with synchronized ending
const useSequentialCounter = (finalValue: number, isVisible: boolean, suffix: string) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    setIsCounting(true);
    let currentValue = 0;
    const increment = 1;
    
    // Calculate duration so all counters end at the same time
    const totalDuration = 2000; // 2 seconds total animation time
    const countDuration = totalDuration / finalValue; // Adjust speed based on final value

    const countUp = () => {
      if (currentValue < finalValue) {
        currentValue += increment;
        setDisplayValue(currentValue);
        intervalRef.current = setTimeout(countUp, countDuration);
      } else {
        // Reached final value
        setDisplayValue(finalValue);
        setIsCounting(false);
      }
    };

    // Start counting after a small delay
    const startDelay = setTimeout(() => {
      countUp();
    }, 500);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [finalValue, isVisible]);

  return { displayValue, isCounting };
};

export const ImpactSummary: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mt-16 bg-muted/50 rounded-lg p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Impact Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {impactStats.map((stat, index) => {
          const { displayValue, isCounting } = useSequentialCounter(stat.numericValue, isVisible, stat.value.includes('$') ? '$' : stat.value.includes('%') ? '%' : '');
          
          // Format the display value based on the original format
          let displayText = '';
          if (stat.value.includes('$')) {
            displayText = `$${displayValue}M+`;
          } else if (stat.value.includes('%')) {
            displayText = `${displayValue}%`;
          } else if (stat.value.includes('hrs')) {
            displayText = `${displayValue}+ hrs`;
          } else {
            displayText = `${displayValue}%+`;
          }
          
          return (
            <div key={stat.label} className="group">
              <div className={`text-3xl font-bold transition-all duration-200 ${
                isCounting ? 'text-yellow-500 animate-pulse' : stat.color
              }`}>
                {displayText}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              
              {/* Counting indicator */}
              {isCounting && (
                <div className="mt-2">
                  <div className="flex justify-center space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 