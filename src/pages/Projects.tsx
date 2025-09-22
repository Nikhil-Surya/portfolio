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
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/50",
      metrics: ["100+ SKUs tracked", "Automated ETL", "Real-time insights"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya/Grocery-Inflation-Tracker"
      }
    },
    {
      title: "SmartQuery AI: Talk to Your Data",
      description: "AI-powered RAG platform enabling real-time enterprise analytics",
      longDescription: "Developed a real-time conversational analytics tool at Coherent Corp. using LangChain and Retrieval-Augmented Generation (RAG) to let users query enterprise data using natural language. Automated data cleaning, trend detection, and insight filtering workflows, cutting manual data prep by 60% and improving the speed of decision-making across teams.",
      tech: ["Python", "LangChain", "API", "RAG"],
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/50",
      metrics: ["Faster insights", "60% less manual prep", "Real-time NLP exploration"],
      links: { demo: "#", github: "Private - Non Disclosure" }
    },
    {
      title: "Customer Lifetime Value Prediction",
      description: "Segmentation and LTV modeling for customer retention and marketing strategies",
      longDescription: "Built predictive models and performed customer segmentation on a dataset of 250K+ insurance policy records using Python and SQL. Analyzed premium, claims, and tenure patterns to extract actionable insights that improved retention targeting by 18%. Leveraged Snowflake for data warehousing and Power BI for interactive reporting, enabling data-driven risk-adjusted marketing efforts.",
      tech: ["Python", "SQL", "Snowflake", "Power BI"],
      icon: BarChart3,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/50",
      metrics: ["250K+ records analyzed", "18% retention improvement", "Risk-adjusted insights"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya/Customer-Lifetime-Value-Prediction-"
      }
    },
    {
      title: "Portfolio Optimization & Risk Analysis",
      description: "Automated optimization and risk analytics leveraging advanced quantitative methodologies.",
      longDescription: "Implemented end-to-end data pipelines to ingest 5+ years of historical market data and optimize investment portfolios using Modern Portfolio Theory (MPT), Hierarchical Risk Parity (HRP), and Conditional Value at Risk (CVaR). Developed and deployed 10,000+ Monte Carlo simulations with walk-forward backtesting, resulting in a 20% reduction in portfolio risk. Shipped interactive data refresh-enabled dashboards built in Streamlit and Power BI, enabling real-time analysis and decision support.",
      tech: ["Python", "SQL", "Postgres", "Streamlit", "Power BI"],
      icon: BarChart,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      glowColor: "shadow-yellow-500/50",
      metrics: ["20% risk reduction", "10,000+ simulations", "Walk-forward backtesting"],
      links: {
        demo: "https://blackscholepricingmodel.streamlit.app/",
        github: "https://github.com/Nikhil-Surya/Portfolio-Optimization"
      }
    },
    {
      title: "Inventory & Merchandise Analysis",
      description: "Sales and inventory data analysis with interactive KPI dashboards for stock efficiency",
      longDescription: "Conducted detailed analysis of sales and inventory datasets to evaluate stock efficiency and supplier performance. Developed automated SQL queries enabling agile ad-hoc reporting and created dynamic Power BI dashboards to monitor key performance indicators such as sell-through rates and profit margins. Identified operational barriers and inefficiencies, resulting in a 15% reduction in stockouts and improved supply chain responsiveness.",
      tech: ["Python", "SQL", "Power BI", "Excel"],
      icon: BarChart,
      color: "text-teal-400",
      bgColor: "bg-teal-500/20",
      borderColor: "border-teal-500/30",
      glowColor: "shadow-teal-500/50",
      metrics: ["15% stockout reduction", "Automated SQL queries", "Dynamic KPI dashboards"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya/Inventory-and-Supply-Chain-Analysis"
      }
    },
    {
      title: "Analyzing LLMs' Political Stances",
      description: "Capstone project investigating bias and sycophancy in large language models",
      longDescription: "Built a multi-layered framework to examine partisan leanings and sycophantic tendencies in LLMs. Used stance classification, lexical fingerprinting, and identity-framed prompts to evaluate GPT-3.5, GPT-4o, Llama 2/3, Mistral, and Gemma 2. Uncovered significant identity-driven bias and proposed mitigation strategies for fairer AI alignment.",
      tech: ["Python", "Transformers", "Prompt Engineering", "NLP"],
      icon: Brain,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-pink-500/50",
      metrics: ["90+ prompts analyzed", "6 LLMs evaluated", "3 novel methods introduced"],
      links: { demo: "https://github.com/Nikhil-Surya", github: "https://github.com/Nikhil-Surya/Capstone_Project" },
    },
    {
      title: "ML for Code Quality Prediction",
      description: "ML-driven prediction of software quality shifts across Java projects",
      longDescription: "Analyzed static software metrics and developer intent using supervised and unsupervised ML models to predict code quality evolution across 54 open-source Java repositories. Leveraged commit messages and clustering for 15% improved accuracy in identifying potential regressions or improvements.",
      tech: ["Python", "Java", "NLP", "Scikit-learn"],
      icon: Code,
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-500/30",
      glowColor: "shadow-amber-500/50",
      metrics: ["15% prediction accuracy gain", "54 Java projects analyzed", "NLP-based insights"],
      links: { demo: "#", github: "https://github.com/Nikhil-Surya/Study-of-Static-Metric-Value" }
    },
    {
      title: "2016 VAST Challenge: GasTech Operation Analysis",
      description: "Visual analytics of operational anomalies at GAStech HQ",
      longDescription: "Leveraged Python, Tableau, and QGIS to analyze employee proximity card data and sensor readings from the 2016 VAST Challenge dataset. Identified behavioral anomalies, energy inefficiencies, and potential security threats using visual analytics. Findings included unusual after-hours entries, HVAC misconfigurations, and CO2/Hazium spikes linked to personnel movement patterns, influencing building operations and security decisions.",
      tech: ["Python", "Tableau", "QGIS"],
      icon: ShieldCheck,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/50",
      metrics: ["8 behavioral anomalies found", "3 floors analyzed", "2 major sensor anomalies detected"],
      links: { demo: "#", github: "https://github.com/Nikhil-Surya/GASTech_Analysis" }
    },
    {
      title: "YouTrendify: Real-Time YouTube Trend Analyzer",
      description: "API-powered trend analyzer with NLP-driven classification",
      longDescription: "Built a full-stack web app that fetches and analyzes YouTube trending video data in real-time using the YouTube Data API. Applied NLP techniques including keyword extraction, sentiment analysis, and title summarization. Visualized category trends, regional performance, and emotional tone across videos using interactive Dash plots. Enabled users to track viral content by country and genre with intuitive insights and filtering options.",
      tech: ["Python", "Dash", "Plotly", "YouTube API", "NLP"],
      icon: Globe,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
      glowColor: "shadow-red-500/50",
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
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/50",
      metrics: ["30% time saved on reporting", "Multi-region sales insights", "Automated category KPIs"],
      links: {
        demo: "#",
        github: "https://github.com/Nikhil-Surya/Sales-Performance-Analysis"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Case studies that showcase real business impact
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border border-zinc-900 hover:border-zinc-800 bg-zinc-900/95 backdrop-blur-sm hover:bg-zinc-900 ${project.glowColor} hover:shadow-2xl`}
              onMouseEnter={() => setExpandedProject(index)}
              onMouseLeave={() => setExpandedProject(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-lg ${project.bgColor.replace('20','40')} border ${project.borderColor.replace('30','50')} group-hover:scale-110 transition-all duration-300 shadow-lg ${project.glowColor} animate-pulse`}>
                      <project.icon className={`h-6 w-6 ${project.color} animate-bounce`} style={{ animationDelay: `${index * 0.2}s` }} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white mb-4 leading-relaxed">
                          {expandedProject === index ? project.longDescription : project.description}
                        </p>
                      </div>
                      {/* Expand/Collapse Icon */}
                      <div className="flex-shrink-0 ml-4">
                        {expandedProject === index ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white text-sm rounded-md border border-zinc-700 hover:from-zinc-700 hover:to-zinc-600 hover:text-white transition-all duration-200 shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {expandedProject === index && (
                      <div className="space-y-4 pt-4 border-t border-zinc-800 animate-in slide-in-from-top-2 duration-300">
                        <div>
                          <h4 className="font-medium text-white mb-3 flex items-center">
                            <BarChart className="h-4 w-4 mr-2 text-white" />
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {project.metrics.map((metric) => (
                              <Badge 
                                key={metric} 
                                className="justify-center py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white font-medium border border-zinc-700 hover:from-zinc-700 hover:to-zinc-600 hover:text-white transition-all duration-200 shadow-md"
                              >
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-2">
                          {project.links.demo && project.links.demo.startsWith('http') && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              asChild 
                              className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 hover:text-white transition-all duration-200 shadow-md"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.github.startsWith('http') ? (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              asChild 
                              className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 hover:text-white transition-all duration-200 shadow-md"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          ) : (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-zinc-700 text-white cursor-default opacity-75"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              {project.links.github}
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
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
