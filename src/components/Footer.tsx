import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground text-sm font-bold shadow-glow">
              AI
            </span>
            <span className="gradient-text">Developer</span>
          </motion.a>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Alex AI. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-accent fill-accent" />
            </motion.span>
            <span>and</span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
