// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Brain, Trophy, Flame, BookOpen, ArrowRight, PlayCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   // Mock data - this would come from Supabase in real app
//   const hasRoadmap = false; // Set to true to show roadmap view
//   const userStats = {
//     rewardPoints: 1250,
//     currentStreak: 7,
//     completedQuizzes: 12,
//     weekProgress: 3
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b border-border bg-card">
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           <Link to="/" className="flex items-center space-x-2">
//             <Brain className="h-6 w-6 text-primary" />
//             <span className="text-lg font-bold">Birjuram.ai</span>
//           </Link>
//           <div className="flex items-center space-x-4">
//             <Badge variant="secondary" className="flex items-center space-x-1">
//               <Trophy className="h-4 w-4 text-reward" />
//               <span>{userStats.rewardPoints} pts</span>
//             </Badge>
//             <Badge variant="secondary" className="flex items-center space-x-1">
//               <Flame className="h-4 w-4 text-reward" />
//               <span>{userStats.currentStreak} day streak</span>
//             </Badge>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-2">Welcome back, Learner!</h1>
//           <p className="text-muted-foreground">Continue your learning journey or start a new roadmap</p>
//         </div>

//         {!hasRoadmap ? (
//           // No roadmap state
//           <div className="max-w-2xl mx-auto text-center">
//             <Card className="shadow-elegant border-card-border">
//               <CardHeader>
//                 <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
//                   <BookOpen className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-2xl">Ready to Start Learning?</CardTitle>
//                 <CardDescription className="text-base">
//                   Generate your first AI-powered roadmap and begin mastering any skill with personalized guidance.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link to="/generate-roadmap">
//                   <Button variant="hero" size="lg" className="group">
//                     Generate Your Roadmap
//                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         ) : (
//           // Has roadmap state
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Current Week */}
//               <Card className="border-card-border">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle>Week {userStats.weekProgress}: React Fundamentals</CardTitle>
//                       <CardDescription>Components, Props, and State Management</CardDescription>
//                     </div>
//                     <Badge variant="outline" className="text-success border-success">
//                       In Progress
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between text-sm mb-2">
//                         <span>Progress</span>
//                         <span>65%</span>
//                       </div>
//                       <Progress value={65} className="h-2" />
//                     </div>
//                     <div className="flex space-x-4">
//                       <Button variant="success" className="flex-1">
//                         <PlayCircle className="mr-2 h-4 w-4" />
//                         Continue Learning
//                       </Button>
//                       <Link to="/quiz" className="flex-1">
//                         <Button variant="outline" className="w-full">
//                           Take Quiz
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Roadmap Overview */}
//               <Card className="border-card-border">
//                 <CardHeader>
//                   <CardTitle>Learning Roadmap: React Development</CardTitle>
//                   <CardDescription>12-week comprehensive course</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {[1, 2, 3, 4, 5].map((week) => (
//                       <div key={week} className="flex items-center space-x-4 p-3 rounded-lg border border-card-border">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                           week <= userStats.weekProgress 
//                             ? 'bg-success text-success-foreground' 
//                             : week === userStats.weekProgress + 1 
//                             ? 'bg-primary text-primary-foreground' 
//                             : 'bg-muted text-muted-foreground'
//                         }`}>
//                           {week}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-medium">Week {week}: {
//                             week === 1 ? 'Getting Started' :
//                             week === 2 ? 'Components & JSX' :
//                             week === 3 ? 'State & Props' :
//                             week === 4 ? 'Event Handling' :
//                             'Advanced Concepts'
//                           }</h4>
//                         </div>
//                         {week <= userStats.weekProgress && (
//                           <Badge variant="secondary" className="text-success">
//                             ✓ Complete
//                           </Badge>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Stats */}
//               <Card className="border-card-border">
//                 <CardHeader>
//                   <CardTitle className="text-lg">Your Progress</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-muted-foreground">Reward Points</span>
//                     <span className="font-semibold text-reward">{userStats.rewardPoints}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-muted-foreground">Current Streak</span>
//                     <span className="font-semibold text-reward">{userStats.currentStreak} days</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-muted-foreground">Quizzes Completed</span>
//                     <span className="font-semibold">{userStats.completedQuizzes}</span>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Actions */}
//               <Card className="border-card-border">
//                 <CardHeader>
//                   <CardTitle className="text-lg">Quick Actions</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Link to="/streak" className="block">
//                     <Button variant="outline" className="w-full justify-start">
//                       <Flame className="mr-2 h-4 w-4" />
//                       Start Study Timer
//                     </Button>
//                   </Link>
//                   <Link to="/generate-roadmap" className="block">
//                     <Button variant="outline" className="w-full justify-start">
//                       <BookOpen className="mr-2 h-4 w-4" />
//                       New Roadmap
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserBadge from "@/components/UserBadge";

export default function Dashboard() {
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/5 p-6">
      {/* Top header with user badge */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Birjuram.ai Dashboard</h1>
        <UserBadge />
      </div>

      {/* Grid layout for features */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Roadmaps */}
        <Card className="shadow-elegant border-card-border hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>📚 Roadmaps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access your personalized learning roadmaps and track your progress.
            </p>
            <button
              onClick={() => navigate("/roadmap")}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              View Roadmaps
            </button>
          </CardContent>
        </Card>

        {/* Quizzes */}
        <Card className="shadow-elegant border-card-border hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>📝 Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Test your knowledge and reinforce concepts with interactive quizzes.
            </p>
            <button
              onClick={() => navigate("/quiz")}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Take a Quiz
            </button>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="shadow-elegant border-card-border hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>📊 Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Check your learning streaks, reward points, and overall growth.
            </p>
            <button
              onClick={() => navigate("/progress")}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              View Progress
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
