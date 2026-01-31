import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const greetings = [
  "Hey there! 👋 I'm Alex's AI assistant. How can I help you today?",
  "Welcome! Looking for something specific? I'd love to help!",
  "Hi! Curious about Alex's work? Ask me anything!",
];

const quickReplies = [
  "Tell me about Alex",
  "View projects",
  "Get in touch",
];

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ id: 1, text: randomGreeting, isBot: true }]);
        setIsTyping(false);
        setHasGreeted(true);
      }, 1000);
    }
  }, [isOpen, hasGreeted]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "That's a great question! Feel free to explore Alex's projects or reach out directly through the contact form. I'm here to help! 🤖";

      const lowerText = text.toLowerCase();
      if (lowerText.includes("about") || lowerText.includes("alex") || lowerText.includes("tell me")) {
        response = "Alex is a passionate AI developer and designer with 5+ years of experience. They specialize in creating intelligent, beautiful digital experiences that blend cutting-edge AI with thoughtful design! 🎨✨";
      } else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("portfolio")) {
        response = "Check out the Projects section to see Alex's latest work! From AI art generators to smart chatbot platforms, there's a lot of exciting stuff to explore. 🚀";
      } else if (lowerText.includes("contact") || lowerText.includes("reach") || lowerText.includes("touch") || lowerText.includes("hire")) {
        response = "You can reach Alex through the contact form below, or connect on social media. They typically respond within 24 hours! 📬";
      } else if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
        response = "Hello! Nice to meet you! 😊 How can I assist you today?";
      }

      const botMessage: Message = {
        id: Date.now(),
        text: response,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <Button
          variant="hero"
          size="icon"
          className="h-14 w-14 rounded-full shadow-glow"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </Button>

        {/* Notification dot */}
        {!isOpen && !hasGreeted && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background"
          />
        )}
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] sm:w-96 h-[28rem] bg-card rounded-2xl shadow-deep border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-primary text-primary-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Online now
                </p>
              </div>
              <Sparkles className="h-5 w-5 ml-auto opacity-60" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      message.isBot
                        ? "bg-muted text-foreground rounded-bl-md"
                        : "bg-gradient-primary text-primary-foreground rounded-br-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick replies */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-sm rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="icon"
                  className="rounded-full shrink-0"
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
