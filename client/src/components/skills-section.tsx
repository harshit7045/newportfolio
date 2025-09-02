import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Globe, Bolt, Lightbulb, GraduationCap } from "lucide-react";
import { skills } from "@/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="skills-title"
        >
          <span className="text-primary">const</span> skills = <span className="text-primary">{"{"}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-6 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center" data-testid="programming-title">
                  <Code className="mr-3 text-primary" size={24} />
                  Programming Languages
                </h3>
                <div className="space-y-4" data-testid="programming-skills">
                  {skills.programming.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 filter grayscale contrast-150"
                            data-testid={`skill-icon-${skill.name.toLowerCase()}`}
                          />
                          <span data-testid={`skill-name-${skill.name.toLowerCase()}`}>{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground" data-testid={`skill-level-${skill.name.toLowerCase()}`}>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" data-testid={`skill-progress-${skill.name.toLowerCase()}`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-6 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center" data-testid="web-title">
                  <Globe className="mr-3 text-primary" size={24} />
                  Web Development
                </h3>
                <div className="grid grid-cols-2 gap-3" data-testid="web-skills">
                  {skills.webDevelopment.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center p-3 border border-border hover-tech transition-all duration-200">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-12 h-12 mb-2 filter grayscale contrast-150"
                        data-testid={`web-icon-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <span className="text-sm text-center" data-testid={`web-tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-6 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center" data-testid="databases-title">
                  <Bolt className="mr-3 text-primary" size={24} />
                  Databases
                </h3>
                <div className="grid grid-cols-2 gap-3" data-testid="database-skills">
                  {skills.databases.map((db) => (
                    <div key={db.name} className="flex flex-col items-center p-3 border border-border hover-tech transition-all duration-200">
                      <img 
                        src={db.icon} 
                        alt={db.name} 
                        className="w-12 h-12 mb-2 filter grayscale contrast-150"
                        data-testid={`db-icon-${db.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <span className="text-sm text-center" data-testid={`db-name-${db.name.toLowerCase().replace(/\s+/g, '-')}`}>{db.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-6 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center" data-testid="tools-title">
                  <Lightbulb className="mr-3 text-primary" size={24} />
                  Tools & DevOps
                </h3>
                <div className="grid grid-cols-2 gap-3" data-testid="tools-skills">
                  {skills.tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center p-3 border border-border hover-tech transition-all duration-200">
                      <img 
                        src={tool.icon} 
                        alt={tool.name} 
                        className="w-12 h-12 mb-2 filter grayscale contrast-150"
                        data-testid={`tool-icon-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <span className="text-sm text-center" data-testid={`tool-name-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Innovation Areas */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-8 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 flex items-center" data-testid="innovation-title">
                  <Lightbulb className="mr-3 text-primary" size={24} />
                  Innovation Focus
                </h3>
                <ul className="space-y-2 text-muted-foreground" data-testid="innovation-areas">
                  <li>• IoT & Hardware Integration</li>
                  <li>• Healthcare Technology Solutions</li>
                  <li>• Military & Security Systems</li>
                  <li>• Smart City Infrastructure</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border p-8 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 flex items-center" data-testid="academic-title">
                  <GraduationCap className="mr-3 text-primary" size={24} />
                  Academic Foundation
                </h3>
                <ul className="space-y-2 text-muted-foreground" data-testid="academic-courses">
                  {skills.courses.map((course) => (
                    <li key={course}>• {course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xl">{"};"}</span>
        </motion.div>
      </div>
    </section>
  );
}
