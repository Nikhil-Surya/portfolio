import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, DollarSign, Target, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  // Company logos - using white background versions of image files
  const companyLogos = {
    "Rochester Institute of Technology": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src="/RIT_logo.jpg" 
          alt="RIT Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "Coherent Corp": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src="/Coherent-white-bg.png" 
          alt="Coherent Corp Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "SankalpSoft": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src="/sankalpsoft-white-bg.png" 
          alt="SankalpSoft Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    ),
    "MASS Technologies": (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img 
          src="/Mass-white-bg.png" 
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
      "role": "Database Developer Intern",
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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2233]">
            <span className="bg-clip-text text-transparent">Professional Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through data-driven solutions and technical excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company} 
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  expandedExperience === index ? 'md:col-span-3' : ''
                }`}
                onClick={() => toggleExpanded(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {companyLogos[exp.company as keyof typeof companyLogos] || (
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-lg flex items-center">
                          {exp.role}
                          {expandedExperience === index ? 
                            <ChevronDown className="h-4 w-4 ml-2 transition-transform flex-shrink-0" /> : 
                            <ChevronRight className="h-4 w-4 ml-2 transition-transform flex-shrink-0" />
                          }
                        </CardTitle>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center space-x-1">
                            <Building className="h-3 w-3" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="text-xs">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} className="text-xs bg-[#cbd0ff] text-black font-normal border-none shadow-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedExperience === index && (
                    <div className="space-y-6 animate-fade-in border-t pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Target className="h-4 w-4 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Key Projects</h4>
                          <ul className="space-y-2">
                            {exp.details.keyProjects.map((project, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.details.technologies.map((tech) => (
                            <Badge key={tech} className="text-xs bg-[#cbd0ff] text-black font-normal border-none shadow-none">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Impact Summary</h4>
                        <p className="text-sm text-muted-foreground">{exp.details.impact}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Impact Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500">$700M+</div>
              <div className="text-sm text-muted-foreground">Initiative Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500">35%</div>
              <div className="text-sm text-muted-foreground">Performance Boosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500">2+ hrs</div>
              <div className="text-sm text-muted-foreground">Weekly Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">20%+</div>
              <div className="text-sm text-muted-foreground">Data Quality Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
