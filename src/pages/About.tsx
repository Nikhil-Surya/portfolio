import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { MapPin, GraduationCap, Heart, Coffee, Code, Download, Clock, Sparkles } from 'lucide-react';
import SkillsChart from '@/components/SkillsChart';
import { skills } from '@/data/skills';

const About = () => {
  const journey = [
    { year: "2018", event: "Started my Bachelor's at BVPCOE", description: "Began my journey in computer science" },
    { year: "2021", event: "First internship at Mass Tech", description: "Discovered my passion for data-driven solutions" },
    { year: "2022", event: "SankalpSoft Solutions", description: "Dove deep into Database Management" },
    { year: "2022", event: "Started my Master's at RIT", description: "Began my specialization in data Science" },
    { year: "2024", event: "Coherent Corp.", description: "Worked with financial data." },
    { year: "2025", event: "Capstone Research", description: "Exploring AI ethics and bias in LLMs" },
  ];

  const funFacts = [
    { icon: Coffee, text: "Uses both R and Python and enjoys spicy food with scatter plots" },
    { icon: Code, text: "Has written over 50,000 lines of code across 25+ projects" },
    { icon: Heart, text: "Passionate about making AI more ethical and transparent" },
    { icon: MapPin, text: "From India to Rochester, NY bringing global perspective to data" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Analyst Behind the Data - UPDATED!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming complex datasets into simple stories. From financial analysis to AI ethics, 
            I bridge the gap between technical complexity and business understanding.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                I'm Nikhil Suryawanshi, a data analyst and recent graduate from the Rochester Institute of Technology with a Master's in Data Science. 
                My journey with data began from a curiosity about how numbers shape decisions and has since evolved into a passion for solving real-world problems through analytics.
                </p>
                <p className="text-muted-foreground">
                  My journey spans from optimizing database performance to leading million-dollar savings initiatives. 
                  What sets me apart is my ability to translate complex analytics into executive-friendly insights that 
                  drive strategic decisions.
                </p>
                <p className="text-muted-foreground">
                  Beyond the numbers, I'm deeply passionate about AI ethics and responsible data science. My capstone 
                  research on LLM sycophancy reflects my commitment to building more equitable technology solutions.
                </p>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {journey.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 text-sm font-bold text-primary flex-shrink-0">{item.year}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.event}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Fun Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <fact.icon className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Sidebar */}
          <div className="space-y-8">
            <SkillsChart skills={skills} />
            {/* Currently Working On */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Currently Working On
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                    <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">AWS Cloud Architect Certification</div>
                      <div className="text-xs text-muted-foreground mt-1">Advanced cloud infrastructure and architecture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200/50 dark:border-green-800/50">
                    <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Kafka Data Streaming Engineer Certification</div>
                      <div className="text-xs text-muted-foreground mt-1">Real-time data processing and streaming</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200/50 dark:border-purple-800/50">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">GenAI Projects</div>
                      <div className="text-xs text-muted-foreground mt-1">Generative AI applications and research</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Rochester Institute of Technology</div>
                    <div className="text-sm text-muted-foreground">Master's Degree in Data Science</div>
                    <div className="text-sm text-muted-foreground">GPA: 3.77/4.0</div>
                    <div className="text-sm text-muted-foreground">2022 - 2025 (Expected)</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="font-semibold mb-2">Coursework</div>
                    <div className="flex flex-wrap gap-1">
                      {["Software Construction(Java)", "Data Science & Analytics", "Database Design Implementation", "Software Engineering", "Applied Statistics", "Business Intelligence", "Visual Analytics", "Data Driven Knowledge Discovery"].map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">Bharati Vidyapeeth College of Engineering</div>
                    <div className="text-sm text-muted-foreground">Bachelor of Engineering in Computer Engineering</div>
                    <div className="text-sm text-muted-foreground">Minor in Artificial Intelligence and Machine Learning</div>
                    <div className="text-sm text-muted-foreground">GPA: 8.54/10</div>
                    <div className="text-sm text-muted-foreground">2018 - 2022</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="font-semibold mb-2">Coursework</div>
                    <div className="flex flex-wrap gap-1">
                      {["DSA", "OOP", "DBMS", "Web Technology", "Project Management"].map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interested in data-driven solutions or want to discuss AI ethics? 
                  I'd love to connect and explore how we can create impact together.
                </p>
                <Button asChild className="w-full">
                  <a href={`${import.meta.env.BASE_URL}assets/Resume_Nikhil_Suryawanshi.pdf`} download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
