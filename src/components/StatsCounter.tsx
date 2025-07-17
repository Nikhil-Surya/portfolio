import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Globe } from 'lucide-react';
import { useCountUp } from "@/components/use-count-up";

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

  // Use a single useCountUp and animate all stats to the same value for simplicity
  const maxValue = Math.max(...stats.map(stat => stat.value));
  const animatedValue = useCountUp(maxValue, 2000, isVisible);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">By the Numbers</h2>
        <p className="text-muted-foreground">Quantifying my journey in data analytics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          // Clamp the animated value to each stat's value
          const count = Math.min(animatedValue, stat.value);
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
