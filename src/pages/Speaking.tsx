import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Home, Mic, Square, Play } from "lucide-react";
import { toast } from "sonner";

const Speaking = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success("Recording started");
    } else {
      toast.info("Recording stopped. AI analysis coming soon!");
    }
  };

  const part1Questions = [
    "Do you work or are you a student?",
    "What do you like to do in your free time?",
    "Tell me about your hometown.",
    "Do you prefer to stay at home or go out in the evening?"
  ];

  const part2Topics = [
    "Describe a memorable journey you have made.",
    "Describe a person who has influenced you.",
    "Describe a skill you would like to learn.",
    "Describe an important decision you made."
  ];

  const part3Questions = [
    "How has technology changed the way people communicate?",
    "What are the advantages and disadvantages of working from home?",
    "Do you think social media has a positive or negative impact on society?",
    "How important is it for young people to learn about their country's history?"
  ];

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
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
              <Mic className="h-10 w-10 text-accent" />
              Speaking Module
            </h1>
            <p className="text-lg text-muted-foreground">
              Practice speaking with AI examiner and get instant feedback on fluency and pronunciation
            </p>
          </div>

          <Tabs defaultValue="part1" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 h-12">
              <TabsTrigger value="part1" className="text-base">Part 1</TabsTrigger>
              <TabsTrigger value="part2" className="text-base">Part 2</TabsTrigger>
              <TabsTrigger value="part3" className="text-base">Part 3</TabsTrigger>
            </TabsList>

            <TabsContent value="part1" className="space-y-6">
              <Card className="p-8 bg-gradient-card border-border/50 text-center">
                <h3 className="text-2xl font-semibold mb-6">Part 1: Introduction & Interview</h3>
                <div className="space-y-4 mb-8">
                  {part1Questions.map((question, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50 text-left">
                      <p className="font-medium">{question}</p>
                    </div>
                  ))}
                </div>
                
                {/* Recording Interface */}
                <div className="max-w-sm mx-auto">
                  <Button
                    onClick={handleRecord}
                    size="lg"
                    className={`w-full h-20 text-lg font-semibold ${
                      isRecording 
                        ? "bg-destructive hover:bg-destructive/90" 
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <Square className="h-6 w-6 mr-2" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="h-6 w-6 mr-2" />
                        Start Recording
                      </>
                    )}
                  </Button>
                  
                  {isRecording && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="h-8 w-1 bg-accent animate-wave"></div>
                      <div className="h-12 w-1 bg-accent animate-wave" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-10 w-1 bg-accent animate-wave" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-14 w-1 bg-accent animate-wave" style={{ animationDelay: '0.3s' }}></div>
                      <div className="h-8 w-1 bg-accent animate-wave" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="part2" className="space-y-6">
              <Card className="p-8 bg-gradient-card border-border/50 text-center">
                <h3 className="text-2xl font-semibold mb-6">Part 2: Individual Long Turn</h3>
                <div className="space-y-4 mb-8">
                  {part2Topics.map((topic, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      <p className="font-medium">{topic}</p>
                    </button>
                  ))}
                </div>
                
                <div className="max-w-sm mx-auto">
                  <Button
                    onClick={handleRecord}
                    size="lg"
                    className={`w-full h-20 text-lg font-semibold ${
                      isRecording 
                        ? "bg-destructive hover:bg-destructive/90" 
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <Square className="h-6 w-6 mr-2" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="h-6 w-6 mr-2" />
                        Start Recording
                      </>
                    )}
                  </Button>
                  
                  {isRecording && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="h-8 w-1 bg-accent animate-wave"></div>
                      <div className="h-12 w-1 bg-accent animate-wave" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-10 w-1 bg-accent animate-wave" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-14 w-1 bg-accent animate-wave" style={{ animationDelay: '0.3s' }}></div>
                      <div className="h-8 w-1 bg-accent animate-wave" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="part3" className="space-y-6">
              <Card className="p-8 bg-gradient-card border-border/50 text-center">
                <h3 className="text-2xl font-semibold mb-6">Part 3: Two-Way Discussion</h3>
                <div className="space-y-4 mb-8">
                  {part3Questions.map((question, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50 text-left">
                      <p className="font-medium">{question}</p>
                    </div>
                  ))}
                </div>
                
                <div className="max-w-sm mx-auto">
                  <Button
                    onClick={handleRecord}
                    size="lg"
                    className={`w-full h-20 text-lg font-semibold ${
                      isRecording 
                        ? "bg-destructive hover:bg-destructive/90" 
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <Square className="h-6 w-6 mr-2" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="h-6 w-6 mr-2" />
                        Start Recording
                      </>
                    )}
                  </Button>
                  
                  {isRecording && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="h-8 w-1 bg-accent animate-wave"></div>
                      <div className="h-12 w-1 bg-accent animate-wave" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-10 w-1 bg-accent animate-wave" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-14 w-1 bg-accent animate-wave" style={{ animationDelay: '0.3s' }}></div>
                      <div className="h-8 w-1 bg-accent animate-wave" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Info Card */}
          <Card className="mt-6 p-6 bg-accent/5 border-accent/20">
            <h4 className="font-semibold mb-2 text-accent">🚀 AI Analysis Coming Soon</h4>
            <p className="text-sm text-muted-foreground">
              Connect Lovable Cloud to enable speech recognition, pronunciation analysis, fluency scoring, and real-time AI examiner feedback.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Speaking;
