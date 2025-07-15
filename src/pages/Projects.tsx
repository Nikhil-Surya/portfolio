import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Brain, Code, BarChart, ChevronDown, ChevronUp, Zap, ShieldCheck, Globe, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Grocery Inflation Tracker",
      description: "Real-time grocery inflation analytics pipeline built with AWS",
      longDescription: "Designed and deployed a cloud-native pipeline to ingest, process, and visualize daily grocery pricing data from online retailers. Leveraged AWS S3 for scalable storage, AWS Glue for automated ETL workflows, and Athena for querying inflation trends across 100+ SKUs. Delivered real-time dashboards in QuickSight, enabling strategic pricing insights and retail decision-making.",
      tech: ["Python", "AWS S3", "Glue", "Athena", "QuickSight"],
      icon: TrendingUp,
      color: "text-green-600",
      metrics: ["100+ SKUs tracked", "Automated ETL", "Real-time insights"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya"
      }
    }
    ,
    {
      title: "SmartQuery AI: Talk to Your Data",
      description: "AI-powered RAG platform enabling real-time enterprise analytics",
      longDescription: "Developed a real-time conversational analytics tool at Coherent Corp. using LangChain and Retrieval-Augmented Generation (RAG) to let users query enterprise data using natural language. Automated data cleaning, trend detection, and insight filtering workflows, cutting manual data prep by 60% and improving the speed of decision-making across teams.",
      tech: ["Python", "LangChain", "API", "RAG"],
      icon: Zap,
      color: "text-purple-500",
      metrics: ["Faster insights", "60% less manual prep", "Real-time NLP exploration"],
      links: { demo: "#", github: "https://github.com/Nikhil-Surya" }
    }
    ,
    {
      title: "Analyzing LLMs' Political Stances",
      description: "Capstone project investigating bias and sycophancy in large language models",
      longDescription: "Built a multi-layered framework to examine partisan leanings and sycophantic tendencies in LLMs. Used stance classification, lexical fingerprinting, and identity-framed prompts to evaluate GPT-3.5, GPT-4o, Llama 2/3, Mistral, and Gemma 2. Uncovered significant identity-driven bias and proposed mitigation strategies for fairer AI alignment.",
      tech: ["Python", "Transformers", "Prompt Engineering", "NLP"],
      icon: Brain,
      color: "text-red-500",
      metrics: ["90+ prompts analyzed", "6 LLMs evaluated", "3 novel methods introduced"],
      links: { demo: "https://github.com/Nikhil-Surya", github: "https://github.com/Nikhil-Surya" },
    }
    ,

    {
      title: "ML for Code Quality Prediction",
      description: "ML-driven prediction of software quality shifts across Java projects",
      longDescription: "Analyzed static software metrics and developer intent using supervised and unsupervised ML models to predict code quality evolution across 54 open-source Java repositories. Leveraged commit messages and clustering for 15% improved accuracy in identifying potential regressions or improvements.",
      tech: ["Python", "Java", "NLP", "Scikit-learn"],
      icon: Code,
      color: "text-yellow-500",
      metrics: ["15% prediction accuracy gain", "54 Java projects analyzed", "NLP-based insights"],
      links: { demo: "#", github: "https://github.com/Nikhil-Surya/Study-of-Static-Metric-Value" }
    },
    {
      title: "2016 VAST Challenge: GasTech Operation Analysis",
      description: "Visual analytics of operational anomalies at GAStech HQ",
      longDescription: "Leveraged Python, Tableau, and QGIS to analyze employee proximity card data and sensor readings from the 2016 VAST Challenge dataset. Identified behavioral anomalies, energy inefficiencies, and potential security threats using visual analytics. Findings included unusual after-hours entries, HVAC misconfigurations, and CO2/Hazium spikes linked to personnel movement patterns, influencing building operations and security decisions.",
      tech: ["Python", "Tableau", "QGIS"],
      icon: ShieldCheck,
      color: "text-green-500",
      metrics: ["8 behavioral anomalies found", "3 floors analyzed", "2 major sensor anomalies detected"],
      links: { demo: "#", github: "https://github.com/Nikhil-Surya/GASTech_Analysis" }
    },
    {
      title: "YouTrendify: Real-Time YouTube Trend Analyzer",
      description: "API-powered trend analyzer with NLP-driven classification",
      longDescription: "Built a full-stack web app that fetches and analyzes YouTube trending video data in real-time using the YouTube Data API. Applied NLP techniques including keyword extraction, sentiment analysis, and title summarization. Visualized category trends, regional performance, and emotional tone across videos using interactive Dash plots. Enabled users to track viral content by country and genre with intuitive insights and filtering options.",
      tech: ["Python", "Dash", "Plotly", "YouTube API", "NLP"],
      icon: Globe,
      color: "text-red-500",
      metrics: ["20+ countries analyzed", "10+ content categories", "Real-time trend updates"],
      links: {
        demo: "",
        github: "https://github.com/Nikhil-Surya/YouTrendify"
      }
    },
    {
      title: "Sales Performance Dashboard",
      description: "Excel and Power BI-based insights for retail sales optimization",
      longDescription: "Developed a comprehensive sales performance analysis solution using Excel for data wrangling and Power BI for visual storytelling. Cleaned and transformed multi-store transaction data to uncover revenue trends, product performance, and customer behavior. Built dynamic dashboards with KPIs, regional breakdowns, and category-level drill-downs to support retail strategy, sales forecasting, and inventory planning.",
      tech: ["Excel", "Power BI", "DAX"],
      icon: BarChart3,
      color: "text-amber-500",
      metrics: ["30% time saved on reporting", "Multi-region sales insights", "Automated category KPIs"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya/Sales-Performance-Analysis"
      }
    }
    
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2233]">
            <span className="bg-clip-text text-transparent">Featured Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Case studies that showcase real business impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                expandedProject === index ? 'md:col-span-3' : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className={`h-8 w-8 ${project.color} mr-3`} />
                  </div>
                  {expandedProject === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {expandedProject === index ? project.longDescription : project.description}
                </p>

                {expandedProject === index && (
                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Metrics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {project.metrics.map((metric) => (
                          <Badge key={metric} className="justify-center py-2 bg-[#cbd0ff] text-black font-normal border-none shadow-none">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
