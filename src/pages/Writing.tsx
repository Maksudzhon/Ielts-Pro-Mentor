import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Home, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Writing = () => {
  const [essay, setEssay] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!essay.trim()) {
      toast.error("Please write your essay first");
      return;
    }
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Essay analyzed! AI features coming soon with Cloud integration.");
    }, 2000);
  };

  const task1Topics = [
    "The chart shows the percentage of households in different income brackets in four countries.",
    "The diagram illustrates the process of recycling plastic bottles.",
    "The table compares the average monthly temperatures in three cities."
  ];

  const task2Topics = [
    "Some people think that university students should study whatever they like. Others believe they should only study subjects that will be useful in the future. Discuss both views and give your opinion.",
    "In many countries, the proportion of older people is increasing. Do you think the advantages of this trend outweigh the disadvantages?",
    "Some people believe that the government should invest more money in public transportation, while others think it should spend more on roads. Discuss both views and give your opinion."
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
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
              <FileText className="h-10 w-10 text-accent" />
              Writing Module
            </h1>
            <p className="text-lg text-muted-foreground">
              Practice IELTS Writing tasks and get instant AI feedback with band scores
            </p>
          </div>

          <Tabs defaultValue="task1" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="task1" className="text-base">Task 1</TabsTrigger>
              <TabsTrigger value="task2" className="text-base">Task 2</TabsTrigger>
            </TabsList>

            <TabsContent value="task1" className="space-y-6">
              {/* Topic Selection */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Select a Topic
                </h3>
                <div className="space-y-3">
                  {task1Topics.map((topic, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      <p className="text-sm">{topic}</p>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Writing Area */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-semibold mb-4">Your Response</h3>
                <Textarea
                  placeholder="Start writing your Task 1 response here..."
                  className="min-h-[400px] text-base resize-none"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">
                    Word count: {essay.split(/\s+/).filter(Boolean).length}
                  </span>
                  <div className="flex gap-3">
                    <Button variant="outline">Clear</Button>
                    <Button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="animate-pulse mr-2">Analyzing...</div>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Analyze Essay
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="task2" className="space-y-6">
              {/* Topic Selection */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Select a Topic
                </h3>
                <div className="space-y-3">
                  {task2Topics.map((topic, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      <p className="text-sm">{topic}</p>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Writing Area */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-semibold mb-4">Your Response</h3>
                <Textarea
                  placeholder="Start writing your Task 2 essay here..."
                  className="min-h-[400px] text-base resize-none"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">
                    Word count: {essay.split(/\s+/).filter(Boolean).length}
                  </span>
                  <div className="flex gap-3">
                    <Button variant="outline">Clear</Button>
                    <Button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="animate-pulse mr-2">Analyzing...</div>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Analyze Essay
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Info Card */}
          <Card className="mt-6 p-6 bg-accent/5 border-accent/20">
            <h4 className="font-semibold mb-2 text-accent">🚀 AI Analysis Coming Soon</h4>
            <p className="text-sm text-muted-foreground">
              Connect Lovable Cloud to enable instant band score analysis, grammar checking, vocabulary assessment, and personalized feedback.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Writing;
