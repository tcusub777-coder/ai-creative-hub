import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Bot, Palette, MessageSquare, LineChart, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Art Generator",
    description: "A creative tool that transforms text prompts into stunning artwork using Stable Diffusion and custom fine-tuned models.",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop",
    tags: ["Python", "Stable Diffusion", "React"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Chatbot Platform",
    description: "Enterprise-grade conversational AI platform with multi-language support and custom knowledge base integration.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tags: ["OpenAI", "LangChain", "TypeScript"],
    icon: MessageSquare,
    color: "from-primary to-accent",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ML Analytics Dashboard",
    description: "Real-time machine learning model monitoring and analytics platform with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Python"],
    icon: LineChart,
    color: "from-cyan-500 to-blue-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Writing Assistant",
    description: "Browser extension that helps writers with AI-powered suggestions, grammar correction, and style improvements.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    tags: ["Chrome Extension", "GPT-4", "React"],
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Neural Code Reviewer",
    description: "Automated code review tool that uses AI to detect bugs, suggest improvements, and ensure best practices.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tags: ["Python", "Transformers", "GitHub API"],
    icon: Code2,
    color: "from-green-500 to-teal-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Companion AI App",
    description: "Mobile app featuring an AI companion that learns from conversations and provides personalized interactions.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    tags: ["React Native", "GPT-4", "Firebase"],
    icon: Bot,
    color: "from-rose-500 to-red-500",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Things I've <span className="gradient-text">built</span> with AI
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects that showcase my passion for combining AI with 
            thoughtful design. Each project is a journey of learning and creation.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-deep hover:border-primary/20 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
