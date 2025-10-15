import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Home, Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Sarah Chen", score: 8.5, improvement: "+1.0", sessions: 45 },
    { rank: 2, name: "Mohammed Ali", score: 8.3, improvement: "+0.8", sessions: 42 },
    { rank: 3, name: "Elena Rodriguez", score: 8.0, improvement: "+0.9", sessions: 38 },
    { rank: 4, name: "David Kim", score: 7.8, improvement: "+0.7", sessions: 35 },
    { rank: 5, name: "Priya Sharma", score: 7.7, improvement: "+0.6", sessions: 32 },
    { rank: 6, name: "John Smith", score: 7.5, improvement: "+0.5", sessions: 30 },
    { rank: 7, name: "Mei Wang", score: 7.4, improvement: "+0.6", sessions: 28 },
    { rank: 8, name: "Ahmed Hassan", score: 7.3, improvement: "+0.4", sessions: 26 },
    { rank: 9, name: "Yuki Tanaka", score: 7.2, improvement: "+0.5", sessions: 24 },
    { rank: 10, name: "Sofia Garcia", score: 7.1, improvement: "+0.4", sessions: 22 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-accent" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">{rank}</span>;
    }
  };

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
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in text-center">
            <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
              <Trophy className="h-10 w-10 text-accent" />
              Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Top performers this week - compete and stay motivated!
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* 2nd Place */}
            <Card className="p-6 bg-gradient-card border-border/50 order-2 md:order-1 mt-8 md:mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Medal className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-1">{topUsers[1].name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{topUsers[1].score}</div>
                <p className="text-sm text-muted-foreground">
                  {topUsers[1].sessions} sessions • {topUsers[1].improvement}
                </p>
              </div>
            </Card>

            {/* 1st Place */}
            <Card className="p-6 bg-gradient-hero text-primary-foreground order-1 md:order-2 shadow-glow">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-xl mb-1">{topUsers[0].name}</h3>
                <div className="text-4xl font-bold text-accent mb-2">{topUsers[0].score}</div>
                <p className="text-sm text-primary-foreground/80">
                  {topUsers[0].sessions} sessions • {topUsers[0].improvement}
                </p>
              </div>
            </Card>

            {/* 3rd Place */}
            <Card className="p-6 bg-gradient-card border-border/50 order-3 mt-8 md:mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-700/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="font-bold text-lg mb-1">{topUsers[2].name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{topUsers[2].score}</div>
                <p className="text-sm text-muted-foreground">
                  {topUsers[2].sessions} sessions • {topUsers[2].improvement}
                </p>
              </div>
            </Card>
          </div>

          {/* Full Leaderboard */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-4">All Rankings</h3>
            <div className="space-y-2">
              {topUsers.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                    user.rank <= 3
                      ? "bg-accent/5 border border-accent/20"
                      : "bg-secondary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="w-12 flex items-center justify-center">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user.sessions} practice sessions
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{user.score}</div>
                    <p className="text-sm text-green-600 font-medium">{user.improvement}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Motivation Card */}
          <Card className="mt-6 p-6 bg-accent/5 border-accent/20 text-center">
            <h4 className="font-semibold mb-2 text-accent">Keep Practicing!</h4>
            <p className="text-sm text-muted-foreground">
              Complete more sessions to climb the leaderboard and achieve your target band score.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
