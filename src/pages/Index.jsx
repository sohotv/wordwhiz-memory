import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Brain, ListChecks, Settings, BarChart, Repeat, Volume2, Star, PlusCircle, ArrowRight, Zap, Trophy, Calendar, ChevronRight, Bookmark, Clock, Target } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const QuickAccessButton = ({ icon, label, onClick }) => (
  <Button variant="outline" className="flex flex-col items-center p-4 h-auto" onClick={onClick}>
    {icon}
    <span className="mt-2 text-sm">{label}</span>
  </Button>
);

const FeatureCard = ({ title, description, icon, onClick }) => (
  <Card className="w-full cursor-pointer transition-all hover:shadow-lg" onClick={onClick}>
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const WordCard = ({ word, pronunciation, meaning, example }) => {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{word}</span>
          <Button variant="ghost" size="icon">
            <Volume2 className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>{pronunciation}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <Button 
          variant="outline" 
          className="w-full mb-2"
          onClick={() => setShowMeaning(!showMeaning)}
        >
          {showMeaning ? "隐藏释义" : "显示释义"}
        </Button>
        {showMeaning && (
          <div className="mt-2">
            <p className="font-semibold mb-2">{meaning}</p>
            <p className="text-sm text-gray-600">{example}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const [showWordDialog, setShowWordDialog] = useState(false);
  const [newWord, setNewWord] = useState("");
  const navigate = useNavigate();

  const features = [
    {
      title: "单词库",
      description: "管理您的个人单词库，添加、编辑和删除单词。",
      icon: <BookOpen className="h-6 w-6" />,
      route: "/user",
    },
    {
      title: "学习模式",
      description: "通过展示单词、释义和例句来学习新单词。",
      icon: <Brain className="h-6 w-6" />,
      route: "/learn",
    },
    {
      title: "测试模式",
      description: "多种题型测试，巩固您的单词记忆。",
      icon: <ListChecks className="h-6 w-6" />,
      route: "/review",
    },
    {
      title: "进度统计",
      description: "追踪学习进度，查看详细的统计数据。",
      icon: <BarChart className="h-6 w-6" />,
      route: "/progress",
    },
    {
      title: "复习计划",
      description: "智能安排复习时间，提高记忆效果。",
      icon: <Repeat className="h-6 w-6" />,
      route: "/review",
    },
    {
      title: "收藏夹",
      description: "将难记的单词加入收藏夹，重点复习。",
      icon: <Star className="h-6 w-6" />,
      route: "/user",
    },
  ];

  const sampleWords = [
    {
      word: "Serendipity",
      pronunciation: "/ˌserənˈdipəti/",
      meaning: "The occurrence and development of events by chance in a happy or beneficial way.",
      example: "The discovery of penicillin was a serendipity that revolutionized medicine.",
    },
    {
      word: "Ephemeral",
      pronunciation: "/əˈfem(ə)rəl/",
      meaning: "Lasting for a very short time.",
      example: "The ephemeral nature of fashion trends makes it hard to keep up.",
    },
    {
      word: "Ubiquitous",
      pronunciation: "/yo͞oˈbikwədəs/",
      meaning: "Present, appearing, or found everywhere.",
      example: "Mobile phones have become ubiquitous in modern society.",
    },
    {
      word: "Eloquent",
      pronunciation: "/ˈeləkwənt/",
      meaning: "Fluent or persuasive in speaking or writing.",
      example: "Her eloquent speech moved the audience to tears.",
    },
    {
      word: "Enigma",
      pronunciation: "/iˈniɡmə/",
      meaning: "A person or thing that is mysterious, puzzling, or difficult to understand.",
      example: "The Voynich manuscript remains an enigma to scholars.",
    },
  ];

  const handleAddWord = () => {
    // Logic to add new word
    console.log("Adding new word:", newWord);
    setNewWord("");
    setShowWordDialog(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">欢迎回来，用户名</CardTitle>
          <CardDescription>
            今天是您学习的第 <span className="font-bold">30</span> 天。继续保持！
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">今日学习进度</span>
            <span className="text-lg font-semibold">15/20 词</span>
          </div>
          <Progress value={75} className="w-full h-2" />
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span>连续学习: 7天</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-500 mr-2" />
              <span>本周学习: 5/7天</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <QuickAccessButton icon={<Brain className="h-6 w-6" />} label="开始学习" onClick={() => navigate("/learn")} />
        <QuickAccessButton icon={<ListChecks className="h-6 w-6" />} label="复习单词" onClick={() => navigate("/review")} />
        <QuickAccessButton icon={<Bookmark className="h-6 w-6" />} label="收藏夹" onClick={() => navigate("/user")} />
        <QuickAccessButton icon={<BarChart className="h-6 w-6" />} label="学习统计" onClick={() => navigate("/progress")} />
      </div>

      <Tabs defaultValue="words" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="words">今日单词</TabsTrigger>
          <TabsTrigger value="features">功能</TabsTrigger>
          <TabsTrigger value="progress">进度概览</TabsTrigger>
        </TabsList>
        <TabsContent value="words">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                今日单词
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {sampleWords.map((word, index) => (
                    <CarouselItem key={index}>
                      <WordCard {...word} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Button className="w-full mt-4" onClick={() => navigate("/learn")}>
                开始学习 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                onClick={() => navigate(feature.route)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>学习进度概览</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    总学习时间
                  </span>
                  <span className="font-semibold">24小时</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    已学单词
                  </span>
                  <span className="font-semibold">500词</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    掌握程度
                  </span>
                  <span className="font-semibold">75%</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => navigate("/progress")}>
                查看详细统计 <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mb-8">
        <Dialog open={showWordDialog} onOpenChange={setShowWordDialog}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" /> 添加单词
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>添加新单词</DialogTitle>
              <DialogDescription>
                输入您想要添加到单词库的新单词。
              </DialogDescription>
            </DialogHeader>
            <Input
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder="输入新单词"
              className="mb-4"
            />
            <Button onClick={handleAddWord} className="w-full">添加</Button>
          </DialogContent>
        </Dialog>
        <Button variant="outline" onClick={() => navigate("/user")}>
          <Settings className="mr-2 h-4 w-4" /> 设置
        </Button>
      </div>
    </div>
  );
};

export default Index;
