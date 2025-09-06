import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, CheckCircle, XCircle, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  // Mock quiz data - this would come from AI generation based on roadmap
  const quizData = {
    title: "React Fundamentals Quiz",
    week: 3,
    totalQuestions: 5,
    questions: [
      {
        question: "What is JSX in React?",
        options: [
          "A JavaScript framework",
          "A syntax extension for JavaScript",
          "A type of component",
          "A state management tool"
        ],
        correct: 1
      },
      {
        question: "Which hook is used to manage state in functional components?",
        options: [
          "useEffect",
          "useContext",
          "useState",
          "useCallback"
        ],
        correct: 2
      },
      {
        question: "What is the purpose of props in React?",
        options: [
          "To style components",
          "To pass data between components",
          "To manage component lifecycle",
          "To handle events"
        ],
        correct: 1
      },
      {
        question: "How do you handle events in React?",
        options: [
          "Using inline event handlers",
          "Using addEventListener",
          "Using jQuery",
          "Using event delegation"
        ],
        correct: 0
      },
      {
        question: "What is the virtual DOM?",
        options: [
          "A real DOM element",
          "A browser API",
          "A JavaScript representation of the real DOM",
          "A CSS framework"
        ],
        correct: 2
      }
    ]
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === quizData.questions[index].correct ? 1 : 0);
    }, 0);
  };

  const score = showResult ? calculateScore() : 0;
  const percentage = showResult ? Math.round((score / quizData.questions.length) * 100) : 0;
  const passed = percentage >= 70;

  if (showResult) {
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
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  passed ? 'bg-success/10' : 'bg-destructive/10'
                }`}>
                  {passed ? (
                    <Trophy className="h-10 w-10 text-success" />
                  ) : (
                    <XCircle className="h-10 w-10 text-destructive" />
                  )}
                </div>
                <CardTitle className="text-2xl">
                  {passed ? 'Congratulations!' : 'Keep Learning!'}
                </CardTitle>
                <CardDescription>
                  {passed 
                    ? 'You passed the quiz and earned reward points!'
                    : 'Review the material and try again to earn points.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {score}/{quizData.questions.length}
                  </div>
                  <p className="text-muted-foreground">
                    {percentage}% Score
                  </p>
                </div>

                {passed && (
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center justify-center space-x-2 text-success">
                      <Trophy className="h-5 w-5" />
                      <span className="font-semibold">+50 Reward Points Earned!</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-success">{score}</div>
                    <div className="text-muted-foreground">Correct</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-destructive">{quizData.questions.length - score}</div>
                    <div className="text-muted-foreground">Incorrect</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link to="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Back to Dashboard
                    </Button>
                  </Link>
                  <Button variant="hero" className="flex-1" onClick={() => window.location.reload()}>
                    Retake Quiz
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
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Birjuram.ai</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Quiz Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline">Week {quizData.week}</Badge>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizData.totalQuestions}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{quizData.title}</h1>
            <Progress 
              value={((currentQuestion + 1) / quizData.totalQuestions) * 100} 
              className="h-2"
            />
          </div>

          {/* Question Card */}
          <Card className="shadow-elegant border-card-border">
            <CardHeader>
              <CardTitle className="text-lg">
                {quizData.questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quizData.questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "quiz"}
                    className="w-full text-left justify-start h-auto py-4 px-4"
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="mr-3 text-sm font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Button 
                  variant="outline" 
                  disabled={currentQuestion === 0}
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1);
                    setSelectedAnswer(null);
                  }}
                >
                  Previous
                </Button>
                <Button 
                  variant="hero" 
                  disabled={selectedAnswer === null}
                  onClick={handleNext}
                >
                  {currentQuestion === quizData.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mt-6 border-card-border">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">Quiz Tips</h3>
                  <p className="text-xs text-muted-foreground">
                    Score 70% or higher to earn reward points and unlock the next week's content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;