import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Palette, Cpu, Sparkles, Rocket } from "lucide-react";

const skills = [
  {
    icon: Brain,
    name: "AI & Machine Learning",
    description: "Building intelligent systems with TensorFlow, PyTorch, and OpenAI APIs",
  },
  {
    icon: Code2,
    name: "Full-Stack Development",
    description: "React, TypeScript, Node.js, and modern web technologies",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces with Figma and modern CSS",
  },
  {
    icon: Cpu,
    name: "Prompt Engineering",
    description: "Crafting effective prompts for LLMs and generative AI models",
  },
  {
    icon: Sparkles,
    name: "Creative AI",
    description: "Generative art, AI-powered tools, and experimental projects",
  },
  {
    icon: Rocket,
    name: "Product Development",
    description: "From concept to launch, building products people love",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text content */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Passionate about making{" "}
              <span className="gradient-text">AI accessible</span> and delightful
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Hey there! 👋 I'm Alex, a developer and designer who fell in love with AI 
                the moment I saw my first neural network come to life. There's something 
                magical about teaching machines to learn and create.
              </p>
              <p>
                With 5+ years of experience in web development and 3 years diving deep 
                into AI/ML, I bridge the gap between complex algorithms and beautiful, 
                user-friendly interfaces. I believe AI should feel like magic, not 
                intimidation.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with generative art, 
                contributing to open-source projects, or teaching others about AI 
                through workshops and blog posts. Let's create something amazing! 🚀
              </p>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <skill.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
