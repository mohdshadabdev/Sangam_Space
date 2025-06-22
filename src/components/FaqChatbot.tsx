
import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { MessageSquare, MessageSquareQuote, Zap, Shield, X, Send } from "lucide-react";
import clsx from "clsx";

type Message = { from: "user" | "bot"; text: string };

const FAQS: { question: string; answer: string; keywords: string[] }[] = [
  {
    question: "How do I join a club?",
    answer: "Autobots, roll out! 🚗 To join a club, visit the Clubs section, browse available clubs, and click the join button. It's easier than transforming from a truck to a robot!",
    keywords: ["join", "club", "clubs", "membership", "become member", "sign up"]
  },
  {
    question: "How do I organize an event?",
    answer: "Leadership is earned, not given! 🎖️ Click on the 'Organize Event' button in the navbar or homepage hero section. Remember: 'One shall stand, one shall organize!' 😄",
    keywords: ["organize", "event", "create event", "host", "plan", "arrange"]
  },
  {
    question: "Where can I find the event calendar?",
    answer: "The Matrix of Leadership guides you! ⚡ Access the full event calendar from the navigation bar or visit /calendar. Time to see what adventures await!",
    keywords: ["calendar", "schedule", "events", "dates", "when", "timing"]
  },
  {
    question: "Can I RSVP to events?",
    answer: "Freedom is the right of all sentient beings! 🤖 Yes! Click on any event to view details and RSVP, as long as there are seats available. Till all are one!",
    keywords: ["rsvp", "register", "attend", "book", "reserve", "sign up"]
  },
  {
    question: "Who can see my profile?",
    answer: "Your privacy is protected like the AllSpark! 🔒 Currently only you and club organizers can view your profile information. We believe in transparency, not surveillance!",
    keywords: ["profile", "privacy", "personal", "data", "information", "visible"]
  },
  {
    question: "How can I contact support?",
    answer: "🤖 **Need to reach our human allies?** You can contact Sangam Space support through:\n\n📧 **Email:** hello@sangamspace.com\n📞 **Phone:** +91 (555) 123-4567\n📍 **Location:** Prayagraj, Uttar Pradesh, India\n\nOr scroll down to the Contact Us section on the homepage to send us a message directly! Remember: 'Communication is the key to victory!' ⚡",
    keywords: ["contact", "support", "help", "reach", "email", "phone", "get in touch", "assistance", "customer service"]
  },
  {
    question: "What is Sangam Space?",
    answer: "Sangam Space is more than meets the eye! 🚛➡️🤖 We're a vibrant community platform connecting students across 25+ colleges in Prayagraj. With 50+ active clubs, 10K+ students, and 500+ events hosted, we're the ultimate destination for academic collaboration, cultural events, and student networking! 'Autobots, unite for education!' 🎓",
    keywords: ["sangam space", "about", "what is", "platform", "community", "colleges"]
  },
  {
    question: "How do I report a problem or bug?",
    answer: "Even Autobots encounter glitches! 🔧 If you find a bug or technical issue:\n\n1. Try refreshing the page first\n2. Clear your browser cache\n3. Contact our support team at hello@sangamspace.com with details\n4. Use the Contact Us form on our homepage\n\n'Sometimes the greatest battles are fought against the smallest bugs!' 🐛⚡",
    keywords: ["bug", "problem", "issue", "error", "technical", "glitch", "report", "broken"]
  },
  {
    question: "Where are you located?",
    answer: "🏛️ **Our headquarters are in the historic city of Prayagraj!** 📍\n\n**Location:** Prayagraj, Uttar Pradesh, India\n\nWe serve students across 25+ colleges in this educational hub. Prayagraj is where knowledge meets tradition, and where Autobots meet academia! 🎓🤖",
    keywords: ["location", "address", "where", "prayagraj", "uttar pradesh", "india", "based", "headquarters"]
  },
  {
    question: "What are your contact details?",
    answer: "🤖 **Ready to connect with the Autobot command center?** Here are all our contact channels:\n\n📧 **Email:** hello@sangamspace.com\n📞 **Phone:** +91 (555) 123-4567\n📍 **Address:** Prayagraj, Uttar Pradesh, India\n💬 **Contact Form:** Available on our homepage\n\n'The greatest strength is knowing when to ask for help!' ⚡",
    keywords: ["contact details", "contact information", "phone number", "email address", "reach out", "communicate"]
  }
];

const SUGGESTED_QUESTIONS = [
  "How do I join a club?",
  "How can I contact support?",
  "Where can I find events?"
];

const PRIME_GREETINGS = [
  "Greetings, human! 🤖",
  "Autobots, welcome this new ally! 🚗",
  "By the AllSpark! Another friend joins us! ⚡",
  "Transform and roll out with your questions! 🔄",
];

const PRIME_RESPONSES = [
  "Processing your request with Cybertronian wisdom... 🧠",
  "Consulting the Matrix of Leadership... ⚡",
  "Scanning databases with Autobot precision... 🔍",
  "Activating prime directive protocols... 🤖",
];

function getBotAnswer(userQ: string): string {
  userQ = userQ.toLowerCase().trim();
  
  // Enhanced keyword matching with scoring
  let bestMatch = null;
  let highestScore = 0;
  
  for (const faq of FAQS) {
    let score = 0;
    
    // Check if question matches directly
    if (userQ.includes(faq.question.toLowerCase().split("?")[0]) || 
        faq.question.toLowerCase().includes(userQ)) {
      score += 10;
    }
    
    // Check keyword matches
    for (const keyword of faq.keywords) {
      if (userQ.includes(keyword.toLowerCase())) {
        score += keyword.length > 4 ? 3 : 2; // Longer keywords get higher score
      }
    }
    
    // Bonus for exact word matches
    const userWords = userQ.split(/\s+/);
    const keywordWords = faq.keywords.join(' ').toLowerCase().split(/\s+/);
    
    for (const userWord of userWords) {
      if (keywordWords.includes(userWord) && userWord.length > 2) {
        score += 1;
      }
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }
  
  // Return best match if score is high enough
  if (bestMatch && highestScore >= 2) {
    return bestMatch.answer;
  }

  // Fallback responses with helpful suggestions
  const randomResponse = [
    "Even Optimus Prime doesn't have all the answers! 🤖 Try asking about:\n• **Clubs** - How to join or create\n• **Events** - Calendar, RSVP, organizing\n• **Contact** - Support, location, details\n• **Profile** - Privacy and settings\n\n'One shall stand, one shall... ask better questions!' 😄",
    "My circuits are still learning! ⚡ I can help you with:\n• **Club membership** and activities\n• **Event organization** and attendance\n• **Contact information** and support\n• **Platform features** and navigation\n\nRemember: 'Freedom is the right of all sentient beings to ask questions!'",
    "That's beyond my current programming, friend! 🛠️ But I excel at answering questions about:\n• **Joining clubs** and communities\n• **Finding events** and calendar\n• **Getting support** and contact info\n• **Understanding Sangam Space** features\n\n'Transform and roll out' with a new question!",
  ];
  
  return randomResponse[Math.floor(Math.random() * randomResponse.length)];
}

const FaqChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<Message[]>([
    {
      from: "bot",
      text: "🤖 **Greetings, I am Optimus Prime!** 🚛✨\n\nI am here to solve your queries and guide you through Sangam Space. As I always say: *'Freedom is the right of all sentient beings!'* \n\nAsk me anything, or try one of these sample questions below. Together, we shall stand! 💪",
    },
  ]);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        setTimeout(() => {
          scrollContainer.scrollTo({
            top: scrollContainer.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [chat]);

  const sendQuestion = (question: string) => {
    if (!question.trim()) return;
    setChat((msgs) => [...msgs, { from: "user", text: question }]);
    setPending(true);
    
    const randomGreeting = PRIME_GREETINGS[Math.floor(Math.random() * PRIME_GREETINGS.length)];
    const randomProcess = PRIME_RESPONSES[Math.floor(Math.random() * PRIME_RESPONSES.length)];
    
    setTimeout(() => {
      const answer = getBotAnswer(question);
      setChat((msgs) => [...msgs, { from: "bot", text: answer }]);
      setPending(false);
    }, 800);
    setInput("");
  };

  return (
    <>
      <button
        className={clsx(
          "fixed z-40 bottom-6 right-6 rounded-full p-1 bg-gradient-to-br from-red-500 via-blue-600 to-purple-700 shadow-2xl border-4 border-white/20 hover:scale-110 transition-all duration-300",
          open ? "scale-95" : "scale-100"
        )}
        aria-label={open ? "Close Optimus Prime chatbot" : "Open Optimus Prime chatbot"}
        onClick={() => setOpen((o) => !o)}
        style={{ 
          boxShadow: "0 20px 60px 0 rgba(239,68,68,0.4), 0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(147,51,234,0.2)"
        }}
      >
        <div className="bg-gray-900 rounded-full flex items-center justify-center size-16 md:size-18 border-2 border-cyan-400/50">
          {open ? (
            <Shield className="text-cyan-400 size-8 md:size-10" />
          ) : (
            <MessageSquare className="text-red-400 size-8 md:size-10" />
          )}
        </div>
      </button>
      
      {open && (
        <div className="fixed z-50 bottom-28 right-4 md:right-12 w-[95vw] max-w-md transition-all animate-fade-in-up">
          <Card 
            className="border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: "url('https://imgs.search.brave.com/JiVQH6p8xjwnp_0NZ2eBWJWZ9iUCNBXjYnlFgLET2uM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC84Lzcv/ZS81NTk0MTEtMTQ0/MHgyNTYwLXNhbXN1/bmctaGQtb3B0aW11/cy1wcmltZS13YWxs/cGFwZXItaW1hZ2Uu/anBn')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <CardHeader 
              className="flex flex-row items-center gap-3 pb-2 px-3 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red rounded-t-lg border-b border-cyan-400/30 relative z-10 shadow-lg"
            >
              <div className="relative">
                <Zap className="text-cyan-300 size-6 animate-pulse-glow drop-shadow-[0_0_8px_cyan]" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"></div>
              </div>
              <CardTitle 
                className="font-heading text-xl md:text-2xl font-medium text-cyan-200 tracking-normal whitespace-nowrap"
                style={{
                  letterSpacing: '0.02em'
                }}
              >
                🤖 Optimus Prime
              </CardTitle>
              <div className="ml-auto flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-300 font-mono">ONLINE</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:text-red-300"
                  aria-label="Close chatbot"
                >
                  <X className="size-5" />
                </button>
              </div>
            </CardHeader>
            
            <CardContent className="flex flex-col p-3 pt-2 relative z-10 font-heading">
              <ScrollArea
                ref={scrollAreaRef}
                className="h-[280px] md:h-[320px] w-full pr-2 mb-3 rounded-lg"
              >
                <div className="flex flex-col gap-3 p-2">
                  {chat.map((m, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "flex",
                        m.from === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={clsx(
                          "px-4 py-3 rounded-2xl max-w-[85%] leading-relaxed shadow-lg border relative overflow-hidden",
                          m.from === "user"
                            ? "bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white font-medium border-blue-400/30 shadow-blue-500/20 text-sm font-sans"
                            : "bg-black/60 border-cyan-400/30 shadow-cyan-500/10 text-white font-medium text-sm font-heading"
                        )}
                      >
                        <div className="relative z-10">
                          {m.from === "bot" ? (
                            <div className="whitespace-pre-wrap font-medium">{m.text}</div>
                          ) : (
                            <div className="font-medium">{m.text}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {pending && (
                    <div className="flex justify-start">
                      <div className="px-4 py-3 rounded-2xl shadow-lg border border-cyan-400/30 text-sm text-white font-medium animate-pulse-glow flex items-center gap-2 bg-black/60 relative overflow-hidden">
                        <div className="relative z-10 flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          <span className="font-heading">Optimus is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="flex flex-wrap gap-2 pb-3">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q, idx) => (
                  <Button
                    key={q}
                    variant="secondary"
                    className="rounded-xl text-xs md:text-sm px-3 py-2 bg-black/60 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-200 hover:bg-black/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 font-heading font-medium"
                    onClick={() => sendQuestion(q)}
                    tabIndex={-1}
                  >
                    {q}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-black/40 border border-cyan-400/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm text-cyan-100 placeholder-cyan-400/60 font-heading font-medium"
                  placeholder="Ask Optimus Prime anything..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") sendQuestion(input);
                  }}
                  disabled={pending}
                />
                <Button
                  size="icon"
                  className={clsx(
                    "rounded-xl transition-all duration-300 border-2 relative overflow-hidden",
                    input.trim() && !pending
                      ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 animate-pulse-glow"
                      : "bg-black/60 border-cyan-400/30 hover:bg-black/70"
                  )}
                  disabled={pending || !input.trim()}
                  onClick={() => sendQuestion(input)}
                  aria-label="Send to Optimus Prime"
                >
                  {input.trim() && !pending ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-shimmer"></div>
                      <Send className="size-5 text-white relative z-10" />
                    </>
                  ) : (
                    <MessageSquare className="size-5" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default FaqChatbot;
