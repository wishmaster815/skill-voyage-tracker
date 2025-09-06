import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Calendar, CheckCircle, Flame, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Generated Roadmaps",
    description: "Get personalized learning paths tailored to your current skills, goals, and preferred timeline.",
    badge: "Smart",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Progress Tracking",
    description: "Visual progress indicators and milestone achievements to keep you motivated and on track.",
    badge: "Visual",
    color: "text-success"
  },
  {
    icon: Zap,
    title: "Adaptive Quizzes",
    description: "Interactive quizzes that adjust difficulty based on your learning progress and comprehension.",
    badge: "Dynamic",
    color: "text-primary"
  },
  {
    icon: Flame,
    title: "Streak System",
    description: "Build learning habits with daily streaks, timer challenges, and consistency rewards.",
    badge: "Gamified",
    color: "text-reward"
  },
  {
    icon: Trophy,
    title: "Reward Points",
    description: "Earn points for completing quizzes, maintaining streaks, and achieving learning milestones.",
    badge: "Motivating",
    color: "text-reward"
  },
  {
    icon: Calendar,
    title: "Weekly Structure",
    description: "Organized weekly learning modules that break down complex skills into manageable chunks.",
    badge: "Structured",
    color: "text-success"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Learn Effectively</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines AI-powered personalization with proven learning techniques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-card-border"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;