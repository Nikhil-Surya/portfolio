import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Download, Coffee, Code, Heart, MapPin, GraduationCap, Clock, Sparkles, Calendar, TrendingUp, BookOpen, Building, Rocket, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatsCounter } from '@/components/StatsCounter';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { AnimatedJourneyTimeline } from '@/components/AnimatedJourneyTimeline';
import { AnimatedTitle } from '@/components/AnimatedTitle';
import SkillsChart from '@/components/SkillsChart';
import { skills } from '@/data/skills';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Delay the journey animation
    const timer = setTimeout(() => setJourneyVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const journey = [
    { 
      year: "2025", 
      event: "Capstone Research & Graduation", 
      description: "Graduated with a Master's degree with capstone project on analyzing sycophancy in large language models",
      icon: Brain,
      color: "from-teal-500 to-green-500"
    },
    { 
      year: "2024", 
      event: "Coherent Corp.", 
      description: "Gained hands-on exposure to corporate finance while supporting a $700M cost-saving initiative",
      icon: Rocket,
      color: "from-indigo-500 to-blue-500"
    },
    { 
      year: "2022", 
      event: "Started my Master's at RIT", 
      description: "Began my specialization in Data Science",
      icon: GraduationCap,
      color: "from-orange-500 to-red-500"
    },
    { 
      year: "2022", 
      event: "SankalpSoft Solutions", 
      description: "Gained hands-on experience in database management and ETL pipelines",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    { 
      year: "2021", 
      event: "First internship at Mass Tech", 
      description: "Discovered my passion for data-driven solutions",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    { 
      year: "2018", 
      event: "Started my Bachelor's at BVPCOE", 
      description: "Began my journey in Computer Science",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
  ];

  const funFacts = [
    { icon: Coffee, text: "Uses both R and Python and enjoys spicy food with scatter plots" },
    { icon: Code, text: "Has written over 50,000 lines of code across 25+ projects" },
    { icon: Heart, text: "Passionate about making AI more ethical and transparent" },
    { icon: MapPin, text: "From India to Rochester, NY, bringing global perspective to data" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 dark:text-white">
          Turning Data Into Direction
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-6 mb-8 max-w-2xl dark:text-gray-200">
          I'm Nikhil - a Data Analyst passionate about making numbers meaningful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="group">
            <a href={`${import.meta.env.BASE_URL}assets/Resume_Nikhil_Suryawanshi.pdf`} download>
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-300">
          Bridging the gap between data science and decision-making through clarity and context.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-emerald-100/60 py-8 rounded-xl shadow-inner mx-2 my-4 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <StatsCounter />
        </div>
      </section>

      {/* About & Fun Facts Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 dark:text-white">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch">
            {/* My Story */}
            <Card className="flex-1 shadow-md border-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 h-full">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  <GraduationCap className="h-6 w-6 mr-2" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-left text-muted-foreground dark:text-gray-200">
                  I'm Nikhil Suryawanshi, a data analyst with a Master's in Data Science from Rochester Institute of Technology. My love for data started with a fascination for math problems. I enjoyed the challenge they brought. That curiosity led me to statistics, and eventually into the world of data-driven decision-making.
                </p>
                <p className="text-lg text-left text-muted-foreground dark:text-gray-200">
                  Over time, this interest grew into a passion for uncovering insights that inform strategy, optimize operations, and drive business impact. With 1 year of experience across industry and academia, I’ve worked closely with financial departments and diverse clients, adapting solutions to fit their unique needs.
                </p>
                <p className="text-lg text-left text-muted-foreground dark:text-gray-200">
                  I bring strong knowledge of data modeling, visualization, and ETL pipelines, and expertise in Python, SQL, Power BI, GenAI and cloud-based analytics. I'm excited about the future of data, not just for what it can do, but for how responsibly and creatively we can use it to shape better systems and decisions, especially where it intersects with ethics, explainability, and real-world impact.
                </p>

                <p className="text-lg text-left text-muted-foreground dark:text-gray-200">
                  When I’m not deep in data, you’ll find me experimenting with new cuisines, hiking scenic trails, or fueling my curiosity with a good dose of caffeine and travel adventures.
                </p>
              </CardContent>
            </Card>
            {/* Profile Image */}
            <div className="flex-1 h-full bg-muted rounded-lg border-2 border-muted-foreground/30 overflow-hidden dark:bg-gray-800">
              <img
                src={`${import.meta.env.BASE_URL}Portfolio_Photo.jpeg`}
                alt="Portfolio"
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Journey Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Skills Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 dark:text-white">Technical Skills</h2>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 p-2 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
              <SkillsChart skills={skills} />
            </div>
          </div>
          {/* Journey Timeline Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 dark:text-white">My Journey</h2>
            <div>
              <AnimatedJourneyTimeline journey={journey} />
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section - Bottom */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 dark:text-white">Fun Facts</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 border-blue-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {funFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <fact.icon className="h-4 w-4 mr-3 text-blue-600 flex-shrink-0 dark:text-blue-300" />
                    <span className="text-gray-700 dark:text-gray-200">{fact.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;