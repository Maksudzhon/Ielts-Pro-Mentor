import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Home, TrendingUp, Award, Target, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              IELTS Pro Mentor
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-3">Your Progress Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Track your improvement and see detailed analytics
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-full w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <span className="text-3xl font-bold text-accent">7.5</span>
              </div>
              <h3 className="font-semibold mb-1">Overall Band</h3>
              <p className="text-sm text-muted-foreground">Average score</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold">+0.5</span>
              </div>
              <h3 className="font-semibold mb-1">Monthly Growth</h3>
              <p className="text-sm text-muted-foreground">Last 30 days</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-full w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <span className="text-3xl font-bold">24</span>
              </div>
              <h3 className="font-semibold mb-1">Practice Sessions</h3>
              <p className="text-sm text-muted-foreground">Total completed</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold">12</span>
              </div>
              <h3 className="font-semibold mb-1">Day Streak</h3>
              <p className="text-sm text-muted-foreground">Keep it up!</p>
            </Card>
          </div>

          {/* Band Scores */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-6">Writing Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Task Achievement</span>
                    <span className="text-sm font-bold text-accent">7.5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Coherence & Cohesion</span>
                    <span className="text-sm font-bold text-accent">7.0</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Lexical Resource</span>
                    <span className="text-sm font-bold text-accent">8.0</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Grammar</span>
                    <span className="text-sm font-bold text-accent">7.5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-6">Speaking Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Fluency & Coherence</span>
                    <span className="text-sm font-bold text-accent">7.5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Lexical Resource</span>
                    <span className="text-sm font-bold text-accent">7.0</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Pronunciation</span>
                    <span className="text-sm font-bold text-accent">8.0</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Grammar</span>
                    <span className="text-sm font-bold text-accent">7.5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* AI Recommendations */}
          <Card className="p-6 bg-gradient-hero text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6 text-accent" />
              AI Recommendations
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">Focus on Complex Sentences</p>
                <p className="text-sm text-primary-foreground/80">
                  Try using more subordinate clauses to improve your grammatical range
                </p>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">Expand Academic Vocabulary</p>
                <p className="text-sm text-primary-foreground/80">
                  Practice using more formal expressions in your writing
                </p>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">Work on Pronunciation</p>
                <p className="text-sm text-primary-foreground/80">
                  Focus on word stress patterns in longer words
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
