import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineEvent {
  year: string;
  event: string;
  description: string;
  color: string;
  dot: string;
}

const timelineData: TimelineEvent[] = [
  { year: "2018", event: "Started Bachelor's", description: "Began my journey in computer science at Bharati Vidyapeeth", color: "border-blue-200", dot: "bg-blue-200" },
  { year: "2021", event: "Internship at Mass Tech", description: "Discovered my passion for data-driven solutions", color: "border-blue-200", dot: "bg-blue-200" },
  { year: "2022", event: "SankalpSoft Solutions", description: "Dove deep into Database Management", color: "border-blue-200", dot: "bg-blue-200" },
  { year: "2022", event: "Started Master's at RIT", description: "Began my specialization in Data Science", color: "border-blue-200", dot: "bg-blue-200" },
  { year: "2024", event: "Coherent Corp.", description: "Led $700M savings initiative tracking system", color: "border-blue-200", dot: "bg-blue-200" },
  { year: "2025", event: "Capstone Research", description: "Exploring AI ethics and bias in LLMs", color: "border-blue-200", dot: "bg-blue-200" },
];

export const TimelineGraph: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleEvents(prev => {
        if (prev < timelineData.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-8 px-2 bg-white rounded-xl shadow-sm">
      {/* Subtle vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-100 rounded-full z-0"></div>
      <div className="space-y-8 relative z-10">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center transition-all duration-700 ease-out ${
              index < visibleEvents ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {/* Subtle dot */}
            <div className={`w-4 h-4 rounded-full ${event.dot} border border-blue-300 relative z-20`}></div>
            {/* Simple card with soft shadow */}
            <Card className={`ml-6 flex-1 bg-white hover:shadow-md transition-shadow border-l-4 ${event.color}`}> 
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-base md:text-lg text-gray-800">{event.year}</span>
                  <span className="text-base md:text-lg font-medium text-gray-700">{event.event}</span>
                </div>
                <p className="text-sm text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
