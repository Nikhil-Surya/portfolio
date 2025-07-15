import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsChartProps {
  skills: Skill[];
}

const categoryColors: { [key: string]: string } = {
  Programming: 'from-blue-500 to-cyan-500',
  'Data Engineering': 'from-green-500 to-emerald-500',
  Cloud: 'from-purple-500 to-pink-500',
  'AI/ML': 'from-orange-500 to-red-500',
  Visualization: 'from-indigo-500 to-blue-500',
  Analytics: 'from-yellow-500 to-orange-500',
  Domain: 'from-gray-500 to-gray-700',
};

const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  // Calculate average level for each category
  const categoryMap: { [category: string]: Skill[] } = {};
  skills.forEach(skill => {
    if (!categoryMap[skill.category]) categoryMap[skill.category] = [];
    categoryMap[skill.category].push(skill);
  });
  const categories = Object.keys(categoryMap);
  const categoryAverages = categories.map(cat => {
    const levels = categoryMap[cat].map(s => s.level);
    return levels.reduce((a, b) => a + b, 0) / levels.length;
  });
  const maxLevel = 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Skills Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative w-full max-w-md h-[180px] flex items-center justify-center mt-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Radar grid circles */}
              {[40, 60, 80, 100].map((radius) => (
                <circle
                  key={radius}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.7"
                  className="text-muted-foreground/30"
                />
              ))}
              {/* Radar grid lines */}
              {categories.map((_, index) => {
                const angle = (index * 2 * Math.PI) / categories.length - Math.PI / 2;
                const x = 100 + 100 * Math.cos(angle);
                const y = 100 + 100 * Math.sin(angle);
                return (
                  <line
                    key={index}
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="0.7"
                    className="text-muted-foreground/30"
                  />
                );
              })}
              {/* Category data points and area */}
              <polygon
                points={categoryAverages.map((avg, index) => {
                  const angle = (index * 2 * Math.PI) / categories.length - Math.PI / 2;
                  const radius = (avg / maxLevel) * 100;
                  const x = 100 + radius * Math.cos(angle);
                  const y = 100 + radius * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="url(#skillGradient)"
                fillOpacity="0.3"
                stroke="url(#skillGradient)"
                strokeWidth="3"
              />
              {/* Category points */}
              {categoryAverages.map((avg, index) => {
                const angle = (index * 2 * Math.PI) / categories.length - Math.PI / 2;
                const radius = (avg / maxLevel) * 100;
                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);
                return (
                  <circle
                    key={categories[index]}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="url(#skillGradient)"
                    className="drop-shadow-sm"
                  />
                );
              })}
              {/* Gradient definition */}
              <defs>
                <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Category labels - bring some closer to the chart */}
            {categories.map((category, index) => {
              const angle = (index * 2 * Math.PI) / categories.length - Math.PI / 2;
              // Closer radius for these categories
              const closerCategories = ["Analytics", "AI/ML", "Data Engineering", "Cloud"];
              const labelRadius = closerCategories.includes(category) ? 90 : 120;
              const x = 100 + labelRadius * Math.cos(angle);
              const y = 100 + labelRadius * Math.sin(angle);
              return (
                <div
                  key={category}
                  className="absolute text-xs font-semibold text-center pointer-events-none"
                  style={{
                    left: `${x / 2}%`,
                    top: `${y / 2}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '70px',
                    whiteSpace: 'normal',
                  }}
                >
                  {category}
                </div>
              );
            })}
          </div>
        </div>
        {/* Skills by Category breakdown */}
        <div className="mt-8">
          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Skills by Category</h4>
          <div className="space-y-5">
            {categories.map((category, idx) => {
              const avg = categoryAverages[idx];
              const color = categoryColors[category] || 'from-gray-500 to-gray-700';
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold">{category}</span>
                    <span className="text-sm text-muted-foreground">{Math.round(avg)}% avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${color}`}
                      style={{ width: `${avg}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {categoryMap[category].map(skill => (
                      <span 
                        key={skill.name}
                        className="text-xs px-2 py-1 bg-muted rounded-full"
                      >
                        {skill.name} ({skill.level}%)
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsChart; 