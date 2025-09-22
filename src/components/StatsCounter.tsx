import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Globe } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: number;
  suffix?: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Briefcase,
    label: "Internships",
    value: 3,
    color: "text-green-500"
  },
  {
    icon: Code,
    label: "Skills",
    value: 25,
    suffix: "+",
    color: "text-purple-500"
  },
  {
    icon: Globe,
    label: "Projects",
    value: 6,
    suffix: "+",
    color: "text-orange-500"
  }
];

// Sequential counting animation hook with synchronized ending
const useSequentialCounter = (finalValue: number, isVisible: boolean) => {
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

export const StatsCounter: React.FC = () => {
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
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">By the Numbers</h2>
        <p className="text-muted-foreground">Quantifying my journey in data analytics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const { displayValue, isCounting } = useSequentialCounter(stat.value, isVisible);
          
          return (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2 transition-transform duration-300 group-hover:scale-110`} />
                <div className="relative">
                  <div className={`text-2xl md:text-3xl font-bold transition-all duration-200 ${
                    isCounting ? 'text-yellow-500 animate-pulse' : stat.color
                  }`}>
                    {displayValue}
                    {stat.suffix}
                  </div>
                  {/* Counting effect overlay */}
                  {isCounting && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse pointer-events-none"></div>
                  )}
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
