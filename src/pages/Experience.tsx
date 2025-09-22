import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, DollarSign, Target, ChevronDown, ChevronRight, ExternalLink, ChevronUp, GraduationCap, Rocket, TrendingUp, BookOpen, Brain } from 'lucide-react';
import { ImpactSummary } from '@/components/ImpactSummary';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  // Company logos - using white background versions of image files
  const companyLogos = {
    "Rochester Institute of Technology": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src={`${import.meta.env.BASE_URL}RIT_logo.jpg`} 
          alt="RIT Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "Coherent Corp": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src={`${import.meta.env.BASE_URL}Coherent-white-bg.png`} 
          alt="Coherent Corp Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "SankalpSoft": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src={`${import.meta.env.BASE_URL}sankalpsoft-white-bg.png`} 
          alt="SankalpSoft Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "MASS Technologies": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src={`${import.meta.env.BASE_URL}Mass-white-bg.png`} 
          alt="MASS Technologies Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    )
  };

  const experiences = [
    {
      "company": "Rochester Institute of Technology",
      "role": "Graduate Teaching Assistant",
      "period": "January 2025 - May 2025",
      "location": "Rochester, NY (On-site)",
      "description": "Assisted with ISTE 612: Information Retrieval and Text Mining by evaluating assignments, leading lab sessions, and supporting student comprehension of modern NLP and text mining techniques.",
      "achievements": [
        "Provided feedback on text classification and topic modeling assignments with rubric-aligned grading",
        "Led lab sessions covering vector space models, kNN classification, LDA, and basic NLP techniques",
        "Mentored students on practical implementation and debugging of Python-based text mining tasks"
      ],
      "skills": [
        "Text Mining",
        "Information Retrieval",
        "Text Classification",
        "NLP",
        "Student Mentorship"
      ],
      "details": {
        "keyProjects": [
          "Lab Facilitation: Guided students through hands-on exercises on tokenization, POS tagging, kNN, and topic modeling using LDA",
          "Project Mentorship: Supported student teams in defining, building, and evaluating their semester-long IR systems"
        ],
        "technologies": [
          "Python",
          "Scikit-learn",
          "NLTK",
          "Pandas"
        ],
        "impact": "Strengthened student understanding of advanced text analytics concepts through direct technical guidance and structured feedback mechanisms"
      }
    }
    
    ,
    {
      "role": "Data Analyst Intern",
      "company": "Coherent Corp",
      "location": "Saxonburg, Pennsylvania",
      "period": "January 2024 - May 2024",
      "description": "Contributed to high-impact financial and operational data initiatives, leading to measurable cost savings, executive-level insights, and enhanced data integrity within a Fortune 1000 advanced manufacturing organization.",
      "achievements": [
        "Contributed to a $700M savings initiative by delivering accurate post-acquisition insights across EPS, GAAP, revenue, and COGS",
        "Recommended $150M in budget optimizations through detailed financial gap analysis",
        "Automated variance reporting and anomaly detection across the Amplify system, improving data reliability by 20%",
        "Presented strategic recommendations directly to the CEO and collaborated with department heads and the CFO"
      ],
      "skills": [
        "Financial Analytics",
        "Data Governance",
        "Post-Merger Analysis",
        "Executive Communication",
        "Variance Reporting"
      ],
      "details": {
        "keyProjects": [
          "Post-Acquisition Financial Review: Led a deep-dive on pre- and post-merger financial metrics, identifying inefficiencies and improvement areas",
          "Amplify System Optimization: Administered end-to-end automation, access control, and data hygiene for Coherent's internal initiative tracking system",
          "Executive Financial Dashboard: Delivered concise, actionable data stories to senior leadership with a focus on cost control and strategic planning"
        ],
        "technologies": [
          "Excel",
          "SQL",
          "ERP Tools",
          "Tableau",
          "Python"
        ],
        "impact": "$700M+ in savings influenced, 20% increase in data accuracy, $150M in recommended budget reallocation"
      }
    },
    {
      "company": "Rochester Institute of Technology",
      "role": "Teaching Assistant",
      "period": "August 2023 - December 2023",
      "location": "Rochester, NY",
      "description": "Lead Teaching Assistant for SWEN 101: Software Engineering Freshmen Seminar, responsible for team coordination, grading oversight, and student support.",
      "achievements": [
        "Led a team of 3 TAs to coordinate grading and lab assistance across multiple sections",
        "Managed project and midterm assessments, ensuring fair and consistent evaluation",
        "Conducted student help sessions to address conceptual and technical queries",
        "Facilitated clear communication between the TA team and the course instructor"
      ],
      "skills": [
        "Team Leadership",
        "Academic Grading",
        "Student Mentoring",
        "Software Engineering Concepts",
        "Technical Communication"
      ],
      "details": {
        "keyProjects": [
          "Assessment Oversight: Streamlined grading process for course projects and exams",
          "Student Support: Delivered targeted help sessions to improve student comprehension"
        ],
        "technologies": [
          "Git",
          "Python",
          "Markdown",
          "Canvas LMS"
        ],
        "impact": "Enhanced student learning outcomes and maintained grading consistency across course deliverables"
      }
    },

    {
      "company": "SankalpSoft",
      "role": "Data Engineer Intern",
      "period": "January 2022 - June 2022",
      "location": "Remote",
      "description": "Consulted clients to design scalable data architectures, enhance ETL/ELT pipelines, and optimize PL/SQL procedures to support high-performance analytics and system integration.",
      "achievements": [
        "Refined PL/SQL procedures, reducing data retrieval time by 35% and boosting database performance",
        "Automated reporting workflows with AWS QuickSight, saving 2+ hours per week in project status reviews",
        "Designed scalable data architectures for 20+ client projects, improving operational and reporting efficiency",
        "Integrated privileged access and visibility controls to enable secure, real-time KPI tracking"
      ],
      "skills": [
        "PL/SQL",
        "ETL/ELT Optimization",
        "AWS QuickSight",
        "Database Performance Tuning",
        "Data Architecture"
      ],
      "details": {
        "keyProjects": [
          "ETL Pipeline Optimization: Enhanced data flow and transformation processes across multiple systems",
          "QuickSight Analytics Dashboard: Engineered real-time visualization layer with privileged access roles",
          "PL/SQL Performance Suite: Refactored complex procedures to streamline decision-support queries"
        ],
        "technologies": [
          "Oracle DB",
          "PL/SQL",
          "AWS QuickSight",
          "Python",
          "SQL"
        ],
        "impact": "35% improvement in query execution, 2+ hours/week saved via automation, scaled analytics for 20+ clients"
      }
    },
    {
      "company": "MASS Technologies",
      "role": "Data Analyst Intern",
      "period": "July 2021 - October 2021",
      "location": "Pune, India",
      "description": "Built an intelligent university recommendation system using machine learning, optimized ETL pipelines, and integrated a web-based interface to support personalized user experiences and scalable data handling.",
      "achievements": [
        "Developed Python-based ML recommendation system using KNN and Decision Trees, reducing user selection time by 20%",
        "Tuned model performance with Feature Weighting, boosting accuracy by 8%",
        "Optimized ETL pipelines through batch processing, parallelism, and caching, reducing query time by 11%",
        "Built an interactive web interface with Flask and REST APIs to support real-time university comparisons"
      ],
      "skills": [
        "Machine Learning",
        "Python",
        "ETL Optimization",
        "Flask",
        "REST API Development"
      ],
      "details": {
        "keyProjects": [
          "University Recommender: Implemented ML-driven recommendation engine for personalized decision support",
          "Data Pipeline Optimization: Accelerated batch queries and reduced latency using caching and parallelism",
          "Flask API Interface: Built responsive, real-time comparison platform with clean front-end integration"
        ],
        "technologies": [
          "Python",
          "Scikit-learn",
          "Flask",
          "REST APIs",
          "Pandas"
        ],
        "impact": "20% reduction in user decision time, 8% accuracy improvement, 11% faster data processing"
      }
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
    // Scroll to top of the page when expanding
    if (expandedExperience !== index) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Map experiences to timeline format
  const journey = experiences.map((exp) => {
    // Extract the start year from the period string
    const year = exp.period.match(/\d{4}/)?.[0] || '';
    // Pick an icon based on company or role
    let icon = Brain;
    if (exp.company.includes('Coherent')) icon = Rocket;
    if (exp.company.includes('SankalpSoft')) icon = TrendingUp;
    if (exp.company.includes('MASS')) icon = BookOpen;
    if (exp.role.toLowerCase().includes('teaching')) icon = GraduationCap;
    // Pick a color gradient for each experience
    let color = 'from-blue-500 via-purple-500 to-emerald-500';
    if (exp.company.includes('Coherent')) color = 'from-emerald-500 via-blue-500 to-purple-500';
    if (exp.company.includes('SankalpSoft')) color = 'from-orange-500 via-pink-500 to-yellow-500';
    if (exp.company.includes('MASS')) color = 'from-cyan-500 via-blue-500 to-purple-500';
    if (exp.role.toLowerCase().includes('teaching')) color = 'from-indigo-500 via-blue-500 to-teal-500';
    return {
      year,
      event: exp.role + ' @ ' + exp.company,
      description: exp.description,
      icon,
      color,
      achievements: exp.achievements,
      skills: exp.skills,
      keyProjects: exp.details.keyProjects,
      technologies: exp.details.technologies,
      impact: exp.details.impact,
    };
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="bg-clip-text text-transparent">Professional Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through data-driven solutions and technical excellence
          </p>
        </div>
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            // Pick an icon based on company or role
            let Icon = Brain;
            if (exp.company.includes('Coherent')) Icon = Rocket;
            if (exp.company.includes('SankalpSoft')) Icon = TrendingUp;
            if (exp.company.includes('MASS')) Icon = BookOpen;
            if (exp.role.toLowerCase().includes('teaching')) Icon = GraduationCap;
            // Pick a color scheme for the icon
            let iconBg = 'bg-emerald-500/40 border-emerald-500/50 shadow-emerald-500/50';
            let iconColor = 'text-emerald-400';
            if (exp.company.includes('Coherent')) { iconBg = 'bg-blue-500/40 border-blue-500/50 shadow-blue-500/50'; iconColor = 'text-blue-400'; }
            if (exp.company.includes('SankalpSoft')) { iconBg = 'bg-orange-500/40 border-orange-500/50 shadow-orange-500/50'; iconColor = 'text-orange-400'; }
            if (exp.company.includes('MASS')) { iconBg = 'bg-cyan-500/40 border-cyan-500/50 shadow-cyan-500/50'; iconColor = 'text-cyan-400'; }
            if (exp.role.toLowerCase().includes('teaching')) { iconBg = 'bg-indigo-500/40 border-indigo-500/50 shadow-indigo-500/50'; iconColor = 'text-indigo-400'; }
            // Extract the start year from the period string
            const year = exp.period.match(/\d{4}/)?.[0] || '';
            return (
              <Card
                key={exp.company + exp.role + exp.period}
                className={`group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border border-zinc-900 hover:border-zinc-800 bg-zinc-900/95 backdrop-blur-sm hover:bg-zinc-900 ${iconBg} hover:shadow-2xl`}
                onMouseEnter={() => setExpandedExperience(index)}
                onMouseLeave={() => setExpandedExperience(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    {/* Year/Icon Section */}
                    <div className="flex-shrink-0 flex flex-col items-center min-w-[60px]">
                      {/* Company Logo */}
                      <div className="mb-2">
                        {companyLogos[exp.company as keyof typeof companyLogos]}
                      </div>
                      <span className="font-bold text-lg text-white mb-2">{year}</span>
                      {expandedExperience === index && (
                        <span className="text-xs text-zinc-300 text-center">{exp.period}</span>
                      )}
                    </div>
                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                            {exp.role} @ {exp.company}
                          </h3>
                          <p className="text-white mb-4 leading-relaxed">
                            {expandedExperience === index ? exp.description : exp.description}
                          </p>
                        </div>
                        {/* Expand/Collapse Icon */}
                        <div className="flex-shrink-0 ml-4">
                          {expandedExperience === index ? (
                            <ChevronUp className="h-5 w-5 text-white" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white" />
                          )}
                        </div>
                      </div>
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white text-sm rounded-md border border-zinc-700 hover:from-zinc-700 hover:to-zinc-600 hover:text-white transition-all duration-200 shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {/* Expanded Content */}
                      {expandedExperience === index && (
                        <div className="space-y-4 pt-4 border-t border-zinc-800 animate-in slide-in-from-top-2 duration-300">
                          {/* Achievements */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div>
                              <h4 className="font-medium text-white mb-3 flex items-center">
                                <Target className="h-4 w-4 mr-2 text-white" />
                                Key Achievements
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {exp.achievements.map((ach, i) => (
                                  <li key={i} className="text-sm text-zinc-300">{ach}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {/* Key Projects */}
                          {exp.details.keyProjects && exp.details.keyProjects.length > 0 && (
                            <div>
                              <h4 className="font-medium text-white mb-3">Key Projects</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {exp.details.keyProjects.map((proj, i) => (
                                  <li key={i} className="text-sm text-zinc-300">{proj}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {/* Technologies */}
                          {exp.details.technologies && exp.details.technologies.length > 0 && (
                            <div>
                              <h4 className="font-medium text-white mb-3">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.details.technologies.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white text-sm rounded-md border border-zinc-700 hover:from-zinc-700 hover:to-zinc-600 hover:text-white transition-all duration-200 shadow-md">{tech}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Impact */}
                          {exp.details.impact && (
                            <div className="bg-zinc-800 p-4 rounded-lg">
                              <h4 className="font-medium mb-2 text-white">Impact Summary</h4>
                              <p className="text-sm text-zinc-300">{exp.details.impact}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Summary Stats */}
        <ImpactSummary />
      </div>
    </div>
  );
};

export default Experience;
