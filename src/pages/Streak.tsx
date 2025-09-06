import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, Play, Pause, RotateCcw, Trophy, Flame, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Streak = () => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const durations = [
    { label: "Quick Focus", minutes: 25, description: "Perfect for quick study sessions" },
    { label: "Deep Work", minutes: 45, description: "Ideal for focused learning" },
    { label: "Extended Study", minutes: 60, description: "For comprehensive practice" },
    { label: "Marathon", minutes: 90, description: "For intensive skill building" }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            setIsActive(false);
            setIsCompleted(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, timeRemaining]);

  const startTimer = (minutes: number) => {
    setSelectedDuration(minutes);
    setTimeRemaining(minutes * 60);
    setIsActive(true);
    setIsPaused(false);
    setIsCompleted(false);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(0);
    setSelectedDuration(null);
    setIsCompleted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = selectedDuration 
    ? ((selectedDuration * 60 - timeRemaining) / (selectedDuration * 60)) * 100 
    : 0;

  if (isCompleted) {
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
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-elegant border-card-border">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-success" />
                </div>
                <CardTitle className="text-2xl">Streak Complete! 🎉</CardTitle>
                <CardDescription>
                  Congratulations! You've successfully completed your study session.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-success">
                    {selectedDuration} minutes
                  </div>
                  <p className="text-muted-foreground">
                    Study time completed
                  </p>
                </div>

                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-center space-x-2 text-success">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">Streak +1 Day</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-success mt-1">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm">+{selectedDuration} Reward Points</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link to="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Back to Dashboard
                    </Button>
                  </Link>
                  <Button variant="hero" className="flex-1" onClick={resetTimer}>
                    Start New Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2 text-primary hover:scale-105 transition-transform">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Flame className="h-4 w-4 text-reward" />
              <span>7 day streak</span>
            </Badge>
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Birjuram.ai</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Study Timer</h1>
            <p className="text-muted-foreground">
              Set a study timer to maintain your learning streak and earn reward points
            </p>
          </div>

          {!isActive ? (
            /* Timer Selection */
            <div className="space-y-6">
              <Card className="shadow-elegant border-card-border">
                <CardHeader>
                  <CardTitle>Choose Your Study Duration</CardTitle>
                  <CardDescription>
                    Select how long you want to focus on learning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {durations.map((duration) => (
                      <Card 
                        key={duration.minutes}
                        className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-card-border"
                        onClick={() => startTimer(duration.minutes)}
                      >
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold text-lg mb-1">{duration.label}</h3>
                            <div className="text-2xl font-bold text-primary mb-2">
                              {duration.minutes} min
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {duration.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Streak Info */}
              <Card className="border-card-border">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-reward/10 rounded-lg">
                        <Flame className="h-5 w-5 text-reward" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Current Streak</h3>
                        <p className="text-sm text-muted-foreground">Keep it going!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-reward">7</div>
                      <div className="text-sm text-muted-foreground">days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Active Timer */
            <div className="space-y-6">
              <Card className="shadow-elegant border-card-border">
                <CardHeader className="text-center">
                  <CardTitle>Study Session Active</CardTitle>
                  <CardDescription>
                    Stay focused! Leaving early won't count towards your streak.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-6xl font-bold text-primary animate-pulse-glow">
                    {formatTime(timeRemaining)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={pauseTimer}
                      className="flex items-center space-x-2"
                    >
                      {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                      <span>{isPaused ? 'Resume' : 'Pause'}</span>
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="lg"
                      onClick={resetTimer}
                      className="flex items-center space-x-2"
                    >
                      <RotateCcw className="h-5 w-5" />
                      <span>Reset</span>
                    </Button>
                  </div>

                  {isPaused && (
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        Timer paused. Resume when you're ready to continue learning.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Motivation */}
              <Card className="border-card-border">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Trophy className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Stay Focused</h3>
                      <p className="text-xs text-muted-foreground">
                        Complete this session to earn {selectedDuration} points and extend your streak!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Streak;