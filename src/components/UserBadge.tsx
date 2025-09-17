// src/components/UserBadge.tsx
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface User {
  username: string;
  email: string;
  reward_points: number;
  streak: {
    count: number;
    completed: boolean;
  };
}

export default function UserBadge() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");
  const user: User | null = userStr ? JSON.parse(userStr) : null;

  if (!user) return null; // don't show if not logged in

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex items-center space-x-4 p-2 bg-muted rounded-lg shadow-sm">
      <div>
        <Badge variant="outline" className="mr-2">
          {user.username}
        </Badge>
        <Badge variant="secondary">🔥 Streak: {user.streak.count}</Badge>
      </div>
      <Button size="sm" variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
