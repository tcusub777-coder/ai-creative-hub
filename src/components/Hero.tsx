import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Bot, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const floatingIcons = [
    { Icon: Bot, delay: 0, position: "top-20 left-[10%]" },
    { Icon: Brain, delay: 0.5, position: "top-32 right-[15%]" },
    { Icon: Sparkles, delay: 1, position: "bottom-32 left-[15%]" },
    { Icon: Zap, delay: 1.5, position: "bottom-20 right-[10%]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Floating AI icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay }}
            className="p-4 rounded-2xl glass shadow-soft"
          >
            <Icon className="h-8 w-8 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-soft mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Hi, I'm <span className="gradient-text">Alex</span>
            <br />
            <span className="text-muted-foreground">AI Developer & Designer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I craft intelligent, beautiful digital experiences that blend cutting-edge AI 
            with thoughtful design. Let's build something amazing together! ✨
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                <Sparkles className="h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Robot illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto relative">
              {/* Robot face */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-3xl bg-gradient-primary shadow-glow flex items-center justify-center"
              >
                <div className="relative">
                  {/* Eyes */}
                  <div className="flex gap-8 mb-4">
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="w-6 h-8 rounded-full bg-background"
                    />
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="w-6 h-8 rounded-full bg-background"
                    />
                  </div>
                  {/* Smile */}
                  <motion.div
                    animate={{ scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-4 rounded-full bg-background mx-auto"
                    style={{ borderRadius: "0 0 100px 100px" }}
                  />
                </div>
              </motion.div>
              
              {/* Antenna */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-primary rounded-full origin-bottom"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
