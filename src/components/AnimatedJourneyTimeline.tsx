import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface JourneyEvent {
  year: string;
  event: string;
  description: string;
  icon: React.ElementType;
  color: string; // Tailwind gradient string
}

interface AnimatedJourneyTimelineProps {
  journey: JourneyEvent[];
}

export const AnimatedJourneyTimeline: React.FC<AnimatedJourneyTimelineProps> = ({ journey }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < journey.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 350);
    return () => clearInterval(timer);
  }, [journey]);

  return (
    <div className="relative py-8 px-2 bg-white rounded-xl shadow-md overflow-x-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      {/* Vertical gradient line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400 rounded-full z-0 dark:bg-gradient-to-b dark:from-blue-700 dark:via-purple-700 dark:to-emerald-700"></div>
      <div className="space-y-10 relative z-10">
        {journey.map((item, idx) => {
          const Icon = item.icon;
          // Extract a main color for text/border from the gradient string (e.g., from-blue-500)
          // We'll use the first color in the gradient for accent
          const mainColor = (item.color.match(/from-([\w-]+)/)?.[1] || 'blue-500').replace(/-/g, ' ');
          // For Tailwind, we can't use dynamic class names, so use inline style for border and background
          // We'll use a fallback color if parsing fails
          const colorMap: Record<string, string> = {
            'blue 500': '#3b82f6',
            'teal 500': '#14b8a6',
            'green 500': '#22c55e',
            'purple 500': '#a21caf',
            'indigo 500': '#6366f1',
            'orange 500': '#f97316',
            'red 500': '#ef4444',
            'yellow 500': '#eab308',
            'emerald 500': '#10b981',
            'cyan 500': '#06b6d4',
            'pink 500': '#ec4899',
          };
          const accent = colorMap[mainColor] || '#3b82f6';
          const cardBg = `${accent}20`; // 12% opacity for background tint
          const borderStyle = { borderLeft: `6px solid ${accent}` };
          const bgStyle = { background: `linear-gradient(90deg, ${accent}10 0%, transparent 100%)` };
          const gradientText = `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`;
          return (
            <div
              key={idx}
              className={`relative flex items-center transition-all duration-700 ease-out 
                ${idx < visibleCount ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}
              `}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Animated icon dot */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-4 border-white z-20 bg-gradient-to-br ${item.color} mr-4 animate-bounce dark:border-gray-800 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-900`}
                style={{ animationDelay: `${idx * 120}ms`, animationPlayState: idx < visibleCount ? 'running' : 'paused' }}
              >
                <Icon className="h-6 w-6 text-white drop-shadow dark:text-blue-200" />
              </div>
              {/* Card for event */}
              <Card className="ml-2 flex-1 bg-white/90 hover:shadow-xl transition-shadow dark:bg-gray-900/90 dark:text-gray-100" style={borderStyle}>
                <CardContent className="p-5 rounded-xl" style={bgStyle}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-bold text-lg ${gradientText}`}>{item.year}</span>
                    <span className={`text-lg font-medium ${gradientText}`}>{item.event}</span>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-200" style={{ color: accent }}>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedJourneyTimeline; 