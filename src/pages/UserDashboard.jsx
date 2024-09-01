import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, ListChecks, BarChart, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [dailyGoal, setDailyGoal] = useState(30);
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/learn');
  };

  const handleReviewWords = () => {
    navigate('/review');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Words to Learn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">150</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2" />
              Words Mastered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">75</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ListChecks className="mr-2" />
              Daily Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">20/{dailyGoal}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2" />
              Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">33%</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <Button className="mr-4" onClick={handleStartLearning}>Start Learning</Button>
          <Button variant="outline" onClick={handleReviewWords}>Review Words</Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>User Settings</DialogTitle>
              <DialogDescription>Adjust your learning preferences here.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dailyGoal" className="text-right">
                  Daily Goal
                </Label>
                <Input
                  id="dailyGoal"
                  type="number"
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UserDashboard;
