import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { patents } from "@/data/portfolio-data";

export default function PatentsSection() {
  return (
    <section id="patents" className="py-20" data-testid="patents-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="patents-title"
        >
          <span className="text-primary">const</span> patents = <span className="text-primary">[</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border p-8 bg-card hover:shadow-lg transition-shadow duration-300" data-testid={`patent-card-${patent.id}`}>
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2" data-testid={`patent-title-${patent.id}`}>{patent.title}</h3>
                    <span className="text-sm text-muted-foreground" data-testid={`patent-period-${patent.id}`}>{patent.period}</span>
                  </div>

                  {/* Technical diagram */}
                  <div className="mb-6 diagram-pattern p-4" data-testid={`patent-diagram-${patent.id}`}>
                    <img 
                      src={patent.image} 
                      alt={`Technical diagram for ${patent.title}`}
                      className="w-full h-32 object-cover filter contrast-150 grayscale"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4" data-testid={`patent-description-${patent.id}`}>
                    {patent.description}
                  </p>

                  <div className="flex flex-wrap gap-2" data-testid={`patent-tags-${patent.id}`}>
                    {patent.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground text-sm">
                        {tag}
                      </Badge>
                    ))}
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
