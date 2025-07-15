
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Code, BookOpen, Award } from 'lucide-react';

const Dashboard = () => {
  const projectAnalytics = [
    { name: 'Grocery Tracker', impact: 700, completion: 100 },
    { name: 'SmartQuery AI', impact: 60, completion: 95 },
    { name: 'Code Quality ML', impact: 40, completion: 90 },
    { name: 'LLM Bias Study', impact: 85, completion: 100 },
  ];

  const learningCurve = [
    { month: 'Jan', python: 70, sql: 60, aws: 40, ml: 50 },
    { month: 'Mar', python: 80, sql: 75, aws: 55, ml: 65 },
    { month: 'Jun', python: 90, sql: 85, aws: 70, ml: 80 },
    { month: 'Sep', python: 95, sql: 90, aws: 80, ml: 85 },
    { month: 'Dec', python: 95, sql: 90, aws: 80, ml: 85 },
  ];

  const skillDistribution = [
    { name: 'Programming', value: 35, color: '#3b82f6' },
    { name: 'Analytics', value: 30, color: '#10b981' },
    { name: 'Cloud/AWS', value: 20, color: '#f59e0b' },
    { name: 'ML/AI', value: 15, color: '#8b5cf6' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into project impact and skill development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Project Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Project Impact Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="impact" fill="#3b82f6" name="Impact Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Learning Curve */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Skills Learning Curve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={learningCurve}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="python" stroke="#3b82f6" name="Python" />
                  <Line type="monotone" dataKey="sql" stroke="#10b981" name="SQL" />
                  <Line type="monotone" dataKey="aws" stroke="#f59e0b" name="AWS" />
                  <Line type="monotone" dataKey="ml" stroke="#8b5cf6" name="ML" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Skill Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Skill Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Key Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-500">$700M+</div>
                  <div className="text-sm text-muted-foreground">Total Impact</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-500">35%</div>
                  <div className="text-sm text-muted-foreground">Avg Performance Gain</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-500">10,000+</div>
                  <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500">99.9%</div>
                  <div className="text-sm text-muted-foreground">Data Quality</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
