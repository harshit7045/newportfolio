import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function ProjectParkivia() {
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
          <h1 className="text-4xl font-bold mb-4">Parkivia - Parking Lot Aggregator</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Optimizing Urban Parking Spaces for Efficient City Mobility Using RFID(FASTag) Technology
          </p>
          
          <div className="flex flex-wrap gap-2">
            {["MERN Stack", "ESP32", "RFID", "Redis", "Socket.io", "Stripe", "Mapbox", "AWS", "Nginx"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
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
            src="https://pixabay.com/get/gf0cc3ad5be52fcab9e70da21a1c6d8ad99bbfa66cd018e997b78bcc15051435d2e1748dd8b3c3f30c2650301a4b836520aa0e6fc57781b41e44262372b4490d0_1280.jpg" 
            alt="Parkivia system architecture diagram" 
            className="w-full h-64 object-cover filter contrast-150 grayscale"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">System Architecture Overview</p>
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
                Parkivia is a comprehensive parking lot aggregator platform that revolutionizes urban parking management 
                through IoT integration and real-time data processing. The system combines hardware and software solutions 
                to create an efficient, cost-effective parking management ecosystem.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Key Features & Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Cost-Effective Hardware Design:</strong> Designed architecture with minimal hardware cost (Rs 20,000), 
                    using ESP32 microcontrollers for RFID (FASTag)-based automated entry and exit systems.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Real-Time Performance:</strong> Implemented real-time updates with Redis and Socket.io, 
                    enhancing user experience with dynamic dashboards and reducing API response time by 80%.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Multiple Booking Options:</strong> Implemented 3 comprehensive booking types—hour-wise, 
                    date-wise, and walk-in—with real-time notifications via NodeMailer integration.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Payment & Location Services:</strong> Integrated Stripe payment gateway for secure transactions 
                    and Mapbox API for interactive parking lot mapping and navigation.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Production-Ready Deployment:</strong> Included comprehensive edge-case handling (9+ scenarios) 
                    and deployed on AWS with Nginx for optimized server management and scalability.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Stack */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Frontend Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• React.js for dynamic user interfaces</li>
                    <li>• Real-time dashboard with Socket.io</li>
                    <li>• Interactive maps with Mapbox API</li>
                    <li>• Responsive design for mobile compatibility</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Backend & Infrastructure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Node.js & Express.js RESTful API</li>
                    <li>• MongoDB for data persistence</li>
                    <li>• Redis for caching and session management</li>
                    <li>• AWS deployment with Nginx load balancing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">IoT Hardware</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ESP32 microcontroller integration</li>
                    <li>• RFID/FASTag reader modules</li>
                    <li>• Automated barrier control systems</li>
                    <li>• Real-time sensor data processing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Integration Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stripe payment processing</li>
                    <li>• NodeMailer email notifications</li>
                    <li>• Mapbox location services</li>
                    <li>• Socket.io real-time communications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">Explore the Project</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-primary text-primary-foreground px-8 py-3 hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
            >
              <a href="https://github.com/harshit7045/Parking-service-aggregator-.git" target="_blank" rel="noopener noreferrer">
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
        </motion.div>
      </div>
    </div>
  );
}