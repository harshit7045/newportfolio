import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="experience-title"
        >
          <span className="text-primary">const</span> experience = <span className="text-primary">[</span>
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border p-8 bg-card hover:shadow-lg transition-shadow duration-300" data-testid={`experience-card-${exp.id}`}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Building2 className="text-primary" size={18} />
                        <h3 className="text-lg font-bold" data-testid={`experience-company-${exp.id}`}>{exp.company}</h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-3" data-testid={`experience-title-${exp.id}`}>{exp.title}</h4>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm" data-testid={`experience-period-${exp.id}`}>{exp.period}</span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="md:col-span-2">
                        <div className="border border-border p-1 bg-background mb-4" data-testid={`experience-diagram-${exp.id}`}>
                          {/* Replace the 'diagram-pattern' div with your image,
            and adjust the image's classes to match the 'h-24 w-full' */}
                          <img
                            className="h-30 w-full object-cover filter contrast-150 grayscale"
                            src={exp.img}
                            alt={`${exp.company} - ${exp.title} diagram`}
                          />
                        </div>
                      </div>

                      <div className="space-y-3" data-testid={`experience-highlights-${exp.id}`}>
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xl">];</span>
        </motion.div>
      </div>
    </section>
  );
}