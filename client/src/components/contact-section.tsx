import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="contact-title"
        >
          <span className="text-primary">function</span> initializeContact() <span className="text-primary">{"{"}</span>
        </motion.h2>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mb-6 leading-relaxed" data-testid="contact-description">
            Ready to collaborate on innovative projects or discuss opportunities? 
            Let's connect and build something extraordinary together.
          </p>

          {/* Geometric pattern for contact section */}
          
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border border-border p-8 bg-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <Mail className="mx-auto text-3xl text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="contact-email"
              >
                {personalInfo.email}
              </a>
            </CardContent>
          </Card>

          <Card className="border border-border p-8 bg-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <Phone className="mx-auto text-3xl text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="contact-phone"
              >
                {personalInfo.phone}
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          data-testid="social-links"
        >
          <a 
            href={personalInfo.github} 
            className="text-3xl hover-tech p-4 transition-all duration-200"
            data-testid="link-github"
          >
            <Github size={32} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            className="text-3xl hover-tech p-4 transition-all duration-200"
            data-testid="link-linkedin"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="#" 
            className="text-3xl hover-tech p-4 transition-all duration-200"
            data-testid="link-resume"
          >
            <FileText size={32} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border border-border p-8 bg-card">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-4" data-testid="status-title">Current Status</h3>
              <div className="text-muted-foreground space-y-1" data-testid="status-info">
                <div>
                  <span className="text-primary">status:</span> "Seeking internship and collaboration opportunities"
                </div>
                <div>
                  <span className="text-primary">location:</span> "IIIT Una, Himachal Pradesh"
                </div>
                <div>
                  <span className="text-primary">availability:</span> "Open to remote and on-site opportunities"
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xl">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
}
