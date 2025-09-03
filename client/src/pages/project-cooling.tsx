import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function ProjectCooling() {
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
          <h1 className="text-4xl font-bold mb-4">Automatic PC Cooling Pad Adapter</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Optimized cooling solution for laptops based on CPU usage using Python and Arduino
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["Python", "Arduino Uno", "Psutil", "Serial Communication"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Project Links - Moved to top */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 p-6 border border-border bg-card">
            <h2 className="text-xl font-bold mb-4 w-full text-center">Explore the Project</h2>
            <div className="flex justify-center w-full">
              <Button 
                asChild
                className="bg-primary text-primary-foreground px-8 py-3 hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
              >
                <a href="https://github.com/harshit7045/Automated-cooling-fan-adapter" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  View Code & Documentation
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
            src="/images/cooling.png"
            alt="Automatic cooling system" 
            className="w-full h-64 object-cover filter contrast-150 grayscale"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">Hardware Control System Architecture</p>
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
                The Automatic PC Cooling Pad Adapter is an innovative hardware-software solution that transforms 
                regular laptop cooling pads into intelligent, CPU-responsive cooling systems. By monitoring real-time 
                CPU usage and automatically adjusting fan speeds, this project optimizes laptop thermal management 
                while significantly improving energy efficiency.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Innovation & Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Smart Automation:</strong> Developed an intelligent adapter that automatically activates 
                    cooling based on CPU usage patterns, eliminating manual fan control and optimizing thermal performance.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>System Monitoring:</strong> Utilized Psutil and Serial libraries in Python to create a 
                    robust driver system that monitors CPU usage data and transmits control signals to the cooling hardware.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Efficiency Breakthrough:</strong> Successfully designed an adapter that transforms regular 
                    cooling pads into smart systems, achieving up to 62% improvement in power efficiency and thermal management.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Cost-Effective Solution:</strong> Created a retrofit solution that upgrades existing cooling 
                    pads rather than requiring complete hardware replacement, making smart cooling accessible and affordable.
                  </div>
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Software Components</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong>Python Driver System:</strong> Core application built in Python for cross-platform compatibility 
                      and efficient system resource monitoring.
                    </li>
                    <li>
                      <strong>Psutil Library:</strong> Real-time CPU usage monitoring, temperature sensing, and system 
                      performance metrics collection for intelligent decision making.
                    </li>
                    <li>
                      <strong>Serial Communication:</strong> Robust serial communication protocol for reliable data 
                      transmission between the Python driver and Arduino microcontroller.
                    </li>
                    <li>
                      <strong>Control Algorithms:</strong> Advanced algorithms for CPU usage pattern recognition and 
                      predictive cooling activation based on workload analysis.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Hardware Integration</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong>Arduino Uno Controller:</strong> Central microcontroller managing fan speed control, 
                      power regulation, and communication with the host computer system.
                    </li>
                    <li>
                      <strong>Power Management Circuit:</strong> Efficient power distribution system with variable 
                      voltage output for precise fan speed control and energy optimization.
                    </li>
                    <li>
                      <strong>Adapter Interface:</strong> Universal connector system compatible with standard cooling 
                      pads, enabling easy installation and removal without hardware modifications.
                    </li>
                    <li>
                      <strong>Feedback Sensors:</strong> Temperature and fan speed sensors for closed-loop control 
                      and performance monitoring to ensure optimal cooling efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Benefits */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">System Benefits & Performance</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">62%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Automated Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Universal</div>
                  <div className="text-sm text-muted-foreground">Cooling Pad Compatibility</div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Key Advantages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Automatic CPU-based activation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Significant power savings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Extended laptop lifespan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Reduced noise pollution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cost-effective retrofit solution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Real-time performance monitoring</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}