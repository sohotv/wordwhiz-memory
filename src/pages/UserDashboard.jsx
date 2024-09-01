import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, ListChecks, BarChart, Settings, Calendar, Clock, Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserDashboard = () => {
  const [dailyGoal, setDailyGoal] = useState(30);
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/learn');
  };

  const handleReviewWords = () => {
    navigate('/review');
  };

  const recentWords = [
    { word: "Serendipity", mastered: true },
    { word: "Ephemeral", mastered: false },
    { word: "Ubiquitous", mastered: true },
    { word: "Eloquent", mastered: false },
    { word: "Enigma", mastered: true },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">用户仪表板</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              待学单词
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
              已掌握单词
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
              每日目标
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">20/{dailyGoal}</p>
            <Progress value={(20 / dailyGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2" />
              总体进度
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">33%</p>
            <Progress value={33} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="recent">最近学习</TabsTrigger>
          <TabsTrigger value="stats">统计</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>学习概览</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                  <span>连续学习天数: 7天</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-green-500" />
                  <span>今日学习时间: 45分钟</span>
                </div>
              </div>
              <Button className="w-full" onClick={handleStartLearning}>开始今日学习</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>最近学习的单词</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {recentWords.map((word, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{word.word}</span>
                    {word.mastered ? (
                      <Star className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Button variant="outline" size="sm">复习</Button>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>学习统计</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>本周学习单词: 120</p>
                <p>本月学习单词: 450</p>
                <p>总学习时间: 24小时</p>
                <p>平均每日学习时间: 50分钟</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center">
        <div>
          <Button className="mr-4" onClick={handleStartLearning}>开始学习</Button>
          <Button variant="outline" onClick={handleReviewWords}>复习单词</Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              设置
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>用户设置</DialogTitle>
              <DialogDescription>在此调整您的学习偏好。</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dailyGoal" className="text-right">
                  每日目标
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
