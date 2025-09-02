import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      <div className="tech-grid absolute inset-0 opacity-30"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            <span className="text-primary">HARSHIT</span><br />
            <span className="text-secondary">MISHRA</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-subtitle"
          >
            <span className="text-primary">class</span> Professional <span className="text-primary">extends</span> Inventor, Developer <span className="text-primary">{"{"}</span><br />
            &nbsp;&nbsp;<span className="text-secondary">constructor()</span> <span className="text-primary">{"{"}</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted-foreground">this.passion = ["Innovation", "Code", "Problem-Solving"];</span><br />
            &nbsp;&nbsp;<span className="text-primary">{"}"}</span><br />
            <span className="text-primary">{"}"}</span>
          </motion.div>
        </motion.div>

        {/* Technical line diagram illustration */}
        <motion.div 
          className="border border-border p-8 bg-card mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="hero-diagram"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Technical schematic diagram with circuit patterns" 
            className="w-full h-64 object-cover filter contrast-150 grayscale"
          />
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection("#projects")}
            className="bg-primary text-primary-foreground px-8 py-3 hover:bg-secondary transition-colors duration-200"
            data-testid="button-view-work"
          >
            View Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border border-border px-8 py-3 hover-tech transition-all duration-200"
            data-testid="button-contact"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
