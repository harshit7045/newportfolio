import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/data/portfolio-data";

export default function BlogsSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="py-20" data-testid="blogs-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="blogs-title"
        >
          <span className="text-primary">const</span> blogs = <span className="text-primary">{"{"}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full" data-testid={`blog-card-${blog.id}`}>
                <CardContent className="p-0">
                  {/* Technical diagram style header */}
                  <div className="border-b border-border p-4 bg-muted" data-testid={`blog-diagram-${blog.id}`}>
                    <img 
                      src={blog.image} 
                      alt={`Technical illustration for ${blog.title}`}
                      className="w-full h-32 object-cover filter contrast-150 grayscale"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2" data-testid={`blog-title-${blog.id}`}>
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`blog-excerpt-${blog.id}`}>
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span data-testid={`blog-date-${blog.id}`}>{formatDate(blog.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span data-testid={`blog-readtime-${blog.id}`}>{blog.readTime} min read</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4" data-testid={`blog-tags-${blog.id}`}>
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full hover-tech transition-all duration-200 flex items-center justify-center gap-2"
                      data-testid={`blog-read-button-${blog.id}`}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </Button>
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
          <span className="text-primary text-xl">{"};"}</span>
        </motion.div>
      </div>
    </section>
  );
}