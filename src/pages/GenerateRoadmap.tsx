import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowLeft, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GenerateRoadmap = () => {
  const [skillName, setSkillName] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [knownSkills, setKnownSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !knownSkills.includes(newSkill.trim())) {
      setKnownSkills([...knownSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setKnownSkills(knownSkills.filter(s => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: This will need Supabase integration for AI roadmap generation
    alert("Roadmap generation requires Supabase integration with AI capabilities. Please connect to Supabase first!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2 text-primary hover:scale-105 transition-transform">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Birjuram.ai</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Generation
            </Badge>
            <h1 className="text-3xl font-bold mb-2">Generate Your Learning Roadmap</h1>
            <p className="text-muted-foreground">
              Tell us about your goals and we'll create a personalized learning path just for you
            </p>
          </div>

          <Card className="shadow-elegant border-card-border">
            <CardHeader>
              <CardTitle>Roadmap Details</CardTitle>
              <CardDescription>
                Provide information about what you want to learn and your current experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Skill Name */}
                <div className="space-y-2">
                  <Label htmlFor="skill">What skill do you want to learn?</Label>
                  <Input
                    id="skill"
                    placeholder="e.g., Python Programming, UI/UX Design, Data Science"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    required
                    className="border-card-border focus:border-primary"
                  />
                </div>

                {/* Current Level */}
                <div className="space-y-2">
                  <Label htmlFor="level">What's your current level?</Label>
                  <Select value={currentLevel} onValueChange={setCurrentLevel} required>
                    <SelectTrigger className="border-card-border focus:border-primary">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - I'm completely new to this</SelectItem>
                      <SelectItem value="intermediate">Intermediate - I have some experience</SelectItem>
                      <SelectItem value="advanced">Advanced - I'm quite experienced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration">How long do you want to spend learning?</Label>
                  <Select value={duration} onValueChange={setDuration} required>
                    <SelectTrigger className="border-card-border focus:border-primary">
                      <SelectValue placeholder="Select learning duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 Month - Intensive learning</SelectItem>
                      <SelectItem value="3-months">3 Months - Balanced approach</SelectItem>
                      <SelectItem value="6-months">6 Months - Comprehensive mastery</SelectItem>
                      <SelectItem value="12-months">12 Months - Deep expertise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Known Skills */}
                <div className="space-y-2">
                  <Label>What skills do you already know?</Label>
                  <p className="text-sm text-muted-foreground">
                    Add any related skills or experience you have
                  </p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="e.g., JavaScript, HTML, CSS"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      className="border-card-border focus:border-primary"
                    />
                    <Button type="button" variant="outline" onClick={addSkill}>
                      Add
                    </Button>
                  </div>
                  
                  {knownSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {knownSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="pr-1">
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate My Roadmap
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <Card className="border-card-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI-Powered</h3>
                    <p className="text-xs text-muted-foreground">
                      Our AI analyzes your input to create the most effective learning path
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-card-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Sparkles className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Personalized</h3>
                    <p className="text-xs text-muted-foreground">
                      Every roadmap is tailored to your specific experience and goals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateRoadmap;