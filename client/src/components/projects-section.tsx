import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "iot", label: "IoT" },
    { key: "hardware", label: "Hardware" }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-muted" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="projects-title"
        >
          <span className="text-primary">class</span> Projects <span className="text-primary">{"{"}</span>
        </motion.h2>

        {/* Project Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4 border border-border p-1 bg-card" data-testid="project-filters">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "ghost"}
                className={`px-6 py-2 transition-all duration-200 ${
                  activeFilter === filter.key 
                    ? "bg-primary text-primary-foreground" 
                    : "hover-tech"
                }`}
                data-testid={`filter-${filter.key}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`project-card-${project.id}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold mb-4" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-lg mb-6 leading-relaxed text-muted-foreground" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6" data-testid={`project-highlights-${project.id}`}>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-technologies-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4" data-testid={`project-links-${project.id}`}>
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                        data-testid={`link-live-${project.id}`}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                        data-testid={`link-demo-${project.id}`}
                      >
                        <Play size={16} />
                        <span>Video</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className={`border border-border p-6 bg-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img 
                    src={project.image} 
                    alt={`Technical diagram for ${project.title}`}
                    className="w-full h-64 object-cover filter contrast-150 grayscale mb-4"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="text-sm text-muted-foreground">
                    {project.category.includes("web") && "System Architecture: "}
                    {project.category.includes("iot") && "IoT Integration Design"}
                    {project.category.includes("hardware") && "Hardware Control System"}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xl">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
}
