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
            <Button variant="ghost" className="flex items-center gap-2">
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
          <p className="text-xl text-gray-600 mb-6">
            Optimizing Urban Parking Spaces for Efficient City Mobility Using RFID(FASTag) Technology
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["MERN Stack", "ESP32", "RFID", "Redis", "Socket.io", "Stripe", "Mapbox", "AWS", "Nginx"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm" />
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-col gap-4 p-6 border border-border bg-card rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Explore the Project</h2>
            <div className="flex flex-wrap justify-center gap-4">
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
                className="border border-border px-8 py-3 transition-all duration-200 flex items-center gap-2"
              >
                <a href="http://client.parkivia.harshitmishra.co.in" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  Client Demo
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border border-border px-8 py-3 transition-all duration-200 flex items-center gap-2"
              >
                <a href="http://business.parkivia.harshitmishra.co.in" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  Business Demo
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border border-border px-8 py-3 transition-all duration-200 flex items-center gap-2"
              >
                <a href="https://www.youtube.com/embed/1V2hS91JkyU?si=8H1_kRoFJfOtdo-m" target="_blank" rel="noopener noreferrer">
                  <Play size={18} />
                  Watch Demo
                </a>
              </Button>
            </div>
            <div className="w-full text-center mt-4 text-sm text-gray-500">
              <span className="font-semibold">Demo Credentials:</span> <span className="bg-gray-200 rounded p-1">1234@gmail.com</span> / <span className="bg-gray-200 rounded p-1">12345678</span>
            </div>
          </div>
        </motion.div>

        {/* Technical Diagram */}
        <motion.div 
          className="border border-border p-8 bg-card mb-12 rounded-lg shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="/images/parking.png"
            alt="Parkivia system architecture diagram" 
            className="w-full h-64 object-cover rounded-lg filter contrast-150 grayscale"
          />
          <p className="text-sm text-gray-500 mt-4 text-center">Parkivia </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border border-border p-8 bg-card rounded-lg shadow">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                Parkivia is a comprehensive parking lot aggregator platform that revolutionizes urban parking management 
                through IoT integration and real-time data processing. The system combines hardware and software solutions 
                to create an efficient, cost-effective parking management ecosystem. It is designed to make parking lot booking convenient for customers and management easy for lot owners, integrating IoT (FASTag Solution) for automated parking management and real-time updates.
              </p>
              <h3 className="text-xl font-bold mb-4">Tech Stack & Deployment</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Lot Owner Site:</strong> MERN stack for owner dashboard and management.</li>
                <li><strong>Redis:</strong> Caching for 80% faster response and real-time dashboard.</li>
                <li><strong>Socket.io:</strong> Real-time scalable dashboard for parking status.</li>
                <li><strong>IoT Module:</strong> ESP32 for RFID (FASTag) entry/exit and billing.</li>
                <li><strong>Client Site:</strong> MERN stack for customer bookings and interactions.</li>
                <li><strong>Mapbox API:</strong> Dynamic maps for parking lot locations.</li>
                <li><strong>Stripe:</strong> Secure payment gateway for bookings.</li>
                <li><strong>Nodemailer:</strong> Automated email notifications for bookings.</li>
                <li><strong>AWS & Nginx:</strong> Cloud deployment, load balancing, and scalability.</li>
              </ul>
              <h3 className="text-xl font-bold mb-4">Key Features & Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Cost-Effective Hardware Design:</strong> Minimal hardware cost (Rs 20,000) using ESP32 microcontrollers for RFID (FASTag)-based automated entry and exit systems.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Real-Time Performance:</strong> Redis and Socket.io for dynamic dashboards and 80% faster API response.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Multiple Booking Options:</strong> Hour-wise, date-wise, and walk-in bookings with real-time notifications.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Payment & Location Services:</strong> Stripe for payments, Mapbox for interactive mapping.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Production-Ready Deployment:</strong> 9+ edge-case handling, AWS & Nginx for scalability.
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
          <Card className="border border-border p-8 bg-card rounded-lg shadow">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Frontend Technology</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React.js for dynamic user interfaces</li>
                    <li>• Real-time dashboard with Socket.io</li>
                    <li>• Interactive maps with Mapbox API</li>
                    <li>• Responsive design for mobile compatibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Backend & Infrastructure</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Node.js & Express.js RESTful API</li>
                    <li>• MongoDB for data persistence</li>
                    <li>• Redis for caching and session management</li>
                    <li>• AWS deployment with Nginx load balancing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">IoT Hardware</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ESP32 microcontroller integration</li>
                    <li>• RFID/FASTag reader modules</li>
                    <li>• Automated barrier control systems</li>
                    <li>• Real-time sensor data processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Integration Services</h3>
                  <ul className="space-y-2 text-gray-600">
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

        {/* Features Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="border border-border p-8 bg-card rounded-lg shadow">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Customer and Owner Sites:</strong> Separate sites for customers and owners for booking and management.</li>
                <li><strong>Multiple Booking Methods:</strong> Hourly, date-wise, and on-the-spot offline bookings.</li>
                <li><strong>RFID(FASTag)-Based Automated Entry and Exit:</strong> Automated vehicle entry/exit with IoT sensors.</li>
                <li><strong>Optimized Parking Allocation:</strong> Algorithms to maximize space utilization and resolve booking conflicts.</li>
                <li><strong>Flexible Space Management:</strong> Online/offline space interchange based on demand.</li>
                <li><strong>Real-Time Dashboard:</strong> Owners manage parking status in real time with Redis and Socket.io.</li>
                <li><strong>Email Notifications:</strong> Automated booking notifications for customers.</li>
                <li><strong>Interactive Map Integration:</strong> Mapbox for visual parking lot locations.</li>
                <li><strong>Payment Integration with Stripe:</strong> Secure, seamless transactions for bookings.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Edge Cases Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="border border-border p-8 bg-card rounded-lg shadow">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6">Edge Cases</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Booking Edge Cases</strong>
                  <ul className="list-disc pl-6">
                    <li><strong>Hour-wise vs. Date-wise Conflicts:</strong>
                      <ul className="list-disc pl-6">
                        <li>If there’s an hour-wise booking, a date-wise booking overlapping with that hour is not allowed on the same space.</li>
                        <li>If there’s a date-wise booking, an hour-wise booking for the same space is not allowed during that date.</li>
                      </ul>
                    </li>
                    <li><strong>Multiple Hour-wise Bookings on a Single Day:</strong> Allow multiple hour-wise bookings on the same space, as long as the times don’t overlap.</li>
                    <li><strong>Space Optimization:</strong> Prioritize booking spaces efficiently to use the least possible spaces.</li>
                    <li><strong>Insufficient Balance:</strong> Prevent booking if the user has insufficient funds.</li>
                  </ul>
                </li>
                <li><strong>Vehicle Management Edge Cases</strong>
                  <ul className="list-disc pl-6">
                    <li><strong>Early Entry:</strong> A vehicle arrives before the specified booking time.</li>
                    <li><strong>Unauthorized Entry:</strong> A vehicle enters the lot without a booking.</li>
                    <li><strong>Late Entry:</strong> A vehicle arrives after the specified booking time.</li>
                    <li><strong>Overstay:</strong> A vehicle stays longer than the booking duration.</li>
                  </ul>
                </li>
                <li><strong>Lot Management Edge Case</strong>
                  <ul className="list-disc pl-6">
                    <li><strong>Changing Lot Type with Active Booking:</strong> Prevent changing a walk-in lot to an online lot (and vice versa) if there’s an active booking on that space.</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}