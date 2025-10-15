import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenLine, Mic, BarChart3, Trophy, Brain, Sparkles } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: PenLine,
      title: "AI Writing Coach",
      description: "Get instant band scores for Task 1 & 2 with detailed feedback on grammar, vocabulary, and structure.",
      link: "/writing"
    },
    {
      icon: Mic,
      title: "Speaking Practice",
      description: "Practice all three parts with AI examiner. Receive pronunciation, fluency, and coherence analysis.",
      link: "/speaking"
    },
    {
      icon: BarChart3,
      title: "Progress Dashboard",
      description: "Track your improvement with detailed analytics, growth charts, and personalized recommendations.",
      link: "/dashboard"
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description: "Compete with other learners and stay motivated by climbing the weekly rankings.",
      link: "/leaderboard"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              IELTS Pro Mentor
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/writing" className="text-sm font-medium hover:text-accent transition-colors">
              Writing
            </Link>
            <Link to="/speaking" className="text-sm font-medium hover:text-accent transition-colors">
              Speaking
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">
              Dashboard
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium hover:text-accent transition-colors">
              Leaderboard
            </Link>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Powered by Advanced AI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Master IELTS Writing & Speaking
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Get real band scores, detailed feedback, and personalized recommendations from our AI examiner.
            Practice anytime, improve faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-glow"
            >
              Start Free Practice
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Excel</h2>
          <p className="text-xl text-muted-foreground">
            Professional IELTS preparation powered by cutting-edge AI technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <Card className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 group">
                <div className="rounded-full w-14 h-14 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center shadow-elevated">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-slide-up">
              <div className="text-5xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-primary-foreground/80 text-lg">Practice Sessions</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-accent mb-2">8.5</div>
              <div className="text-primary-foreground/80 text-lg">Average Band Score</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/80 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Achieve Your Target Band Score?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful IELTS candidates who improved their scores with AI-powered practice.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-6 shadow-glow"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg">IELTS Pro Mentor</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 IELTS Pro Mentor. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
