import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function ProjectOsint() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 hover-tech">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">OSint SaaS Platform</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Efficient Open-Source Intelligence Gathering with 4 Integrated APIs
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["MERN Stack", "OSINT APIs", "Stripe", "AWS", "Nginx"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Project Links - Moved to top */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 p-6 border border-border bg-card">
            <h2 className="text-xl font-bold mb-4 w-full text-center">Explore the Project</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <Button 
                asChild
                className="bg-primary text-primary-foreground px-8 py-3 hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
              >
                <a href="https://github.com/harshit7045/OSint-SaaS" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  View Code
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border border-border px-8 py-3 hover-tech transition-all duration-200 flex items-center gap-2"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border border-border px-8 py-3 hover-tech transition-all duration-200 flex items-center gap-2"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Play size={18} />
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Technical Diagram */}
        <motion.div 
          className="border border-border p-8 bg-card mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
            alt="OSint platform system architecture" 
            className="w-full h-64 object-cover filter contrast-150 grayscale"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">Intelligence Gathering System Architecture</p>
        </motion.div>

        {/* Project Overview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6 leading-relaxed">
                The OSint SaaS Platform is a comprehensive open-source intelligence gathering solution that consolidates 
                multiple investigation tools into a single, user-friendly platform. Built with security and efficiency 
                in mind, it provides professional investigators, researchers, and security professionals with powerful 
                OSINT capabilities through a modern web interface.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Core Features & Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Multi-API Integration:</strong> Seamlessly integrated 4 specialized OSINT APIs providing 
                    phone number validation, email verification, social media profile retrieval, and reverse image search capabilities.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Secure Payment System:</strong> Implemented Stripe payment processing with a pay-per-search 
                    model, featuring user balance tracking and secure transaction handling for commercial usage.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Production Infrastructure:</strong> Deployed on AWS with Nginx for optimized server management, 
                    ensuring high availability and scalable performance for enterprise-level usage.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>User Management:</strong> Comprehensive user authentication system with role-based access 
                    control, usage tracking, and detailed search history for professional workflows.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* OSINT Services */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Intelligence Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Phone Intelligence</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Carrier and location information</li>
                    <li>• Number validation and formatting</li>
                    <li>• Type detection (mobile/landline)</li>
                    <li>• Historical data analysis</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Email Intelligence</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Email address validation</li>
                    <li>• Domain reputation scoring</li>
                    <li>• Breach detection alerts</li>
                    <li>• Social media account linking</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Social Media Retrieval</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cross-platform profile discovery</li>
                    <li>• Username availability checking</li>
                    <li>• Account creation date analysis</li>
                    <li>• Profile metadata extraction</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Reverse Image Search</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Multi-engine image comparison</li>
                    <li>• Source origin detection</li>
                    <li>• Similar image clustering</li>
                    <li>• Metadata analysis and extraction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• React.js interface</li>
                    <li>• Real-time search results</li>
                    <li>• Export functionality</li>
                    <li>• Mobile responsiveness</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Node.js API server</li>
                    <li>• MongoDB data storage</li>
                    <li>• Redis caching layer</li>
                    <li>• Rate limiting & throttling</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Integration</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stripe payment API</li>
                    <li>• Multiple OSINT APIs</li>
                    <li>• AWS cloud deployment</li>
                    <li>• SSL/TLS security</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}