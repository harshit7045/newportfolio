import { motion } from "framer-motion";
import { Trophy, FileText, Code } from "lucide-react";
import { personalInfo, achievements } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="about-title"
        >
          <span className="text-primary">function</span> getAbout() <span className="text-primary">{"{"}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6" data-testid="about-subtitle">Software Devloper × Inventor</h3>
            <p className="text-lg mb-6 leading-relaxed" data-testid="about-description-1">
              B.Tech Information Technology student at {personalInfo.education.institution} (CGPA: {personalInfo.education.cgpa}) with a passion for 
              transforming innovative ideas into practical solutions. My dual expertise spans 
              cutting-edge invention and full-stack development.
            </p>
            <p className="text-lg mb-6 leading-relaxed" data-testid="about-description-2">
              Selected as one of 60 students across India for Maker Bhavan Foundation (IITGN) 
              innovation program, where I developed breakthrough wearable technology for 
              healthcare applications.
            </p>

            <div className="space-y-4" data-testid="achievements-list">
              <div className="flex items-center space-x-3">
                <Trophy className="text-primary" size={20} />
                <span>Special Jury Award ₹50,000 for Outstanding Innovation</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="text-primary" size={20} />
                <span>2 Patents Filed in Military Tech & Healthcare</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="text-primary" size={20} />
                <span>MERN Stack Expert with IoT Integration</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Engineering blueprint style diagram */}
            <div className="border border-border p-6 bg-card" data-testid="about-diagram">
              <img 
                src="../../assets/images/profile.jpeg" 
                alt="Technical engineering blueprint with detailed measurements" 
                className="w-full h-48 object-cover filter contrast-150 grayscale"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Harshit Mishra</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-border bg-card" data-testid="stat-graduation">
                <div className="text-2xl font-bold text-primary">2026</div>
                <div className="text-sm">Graduation Year</div>
              </div>
              <div className="text-center p-4 border border-border bg-card" data-testid="stat-projects">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm">Major Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xl">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
}
