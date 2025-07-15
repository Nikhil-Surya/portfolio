import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Globe } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<any>;
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

const useCountUp = (end: number, duration: number = 2000, isVisible: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic * 100) / 100);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
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
          const count = useCountUp(stat.value, 2000, isVisible);
          
          return (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl md:text-3xl font-bold">
                  {Math.floor(count)}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
