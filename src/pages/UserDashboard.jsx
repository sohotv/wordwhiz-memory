import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, ListChecks, BarChart } from "lucide-react";

const UserDashboard = () => {
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
            <p className="text-3xl font-bold">20/30</p>
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
      <div className="mt-8">
        <Button className="mr-4">Start Learning</Button>
        <Button variant="outline">Review Words</Button>
      </div>
    </div>
  );
};

export default UserDashboard;