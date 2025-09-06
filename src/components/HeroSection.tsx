import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/20 to-primary/5">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-6 animate-slide-up">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Learning Platform
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up [animation-delay:0.2s]">
          Master Any Skill with
          <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Roadmaps</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:0.4s]">
          Your AI-powered roadmap to mastering any skill. Get personalized learning paths, 
          track progress with quizzes, and stay consistent with our gamified streak system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up [animation-delay:0.6s]">
          <Link to="/signup">
            <Button variant="hero" size="lg" className="group">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="flex items-start space-x-4 animate-slide-up [animation-delay:0.8s]">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Personalized Roadmaps</h3>
              <p className="text-muted-foreground text-sm">AI generates custom learning paths based on your current skills and goals.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 animate-slide-up [animation-delay:1s]">
            <div className="p-3 bg-success/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Smart Quizzes</h3>
              <p className="text-muted-foreground text-sm">Interactive quizzes that adapt to your learning progress and reinforce knowledge.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 animate-slide-up [animation-delay:1.2s]">
            <div className="p-3 bg-reward/10 rounded-lg">
              <Trophy className="h-6 w-6 text-reward" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Streak Rewards</h3>
              <p className="text-muted-foreground text-sm">Stay motivated with daily streaks, achievements, and reward points.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;