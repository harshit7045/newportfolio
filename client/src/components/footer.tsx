import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground" data-testid="footer-copyright">
            <span className="text-primary">©</span> 2024 Harshit Mishra. 
            <span className="text-primary"> console.log(</span>"Innovating the future"<span className="text-primary">);</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
