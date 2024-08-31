import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Brain, ListChecks, Settings, BarChart, Repeat, Volume2, Star, PlusCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FeatureCard = ({ title, description, icon }) => (
  <Card className="w-full">
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

const WordCard = ({ word, pronunciation, meaning, example }) => (
  <Card className="w-full mb-4">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>{word}</span>
        <Button variant="ghost" size="icon">
          <Volume2 className="h-4 w-4" />
        </Button>
      </CardTitle>
      <CardDescription>{pronunciation}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="font-semibold mb-2">{meaning}</p>
      <p className="text-sm text-gray-600">{example}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [showWordDialog, setShowWordDialog] = useState(false);
  const [newWord, setNewWord] = useState("");

  const features = [
    {
      title: "单词库",
      description: "管理您的个人单词库，添加、编辑和删除单词。",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "学习模式",
      description: "通过展示单词、释义和例句来学习新单词。",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "测试模式",
      description: "多种题型测试，巩固您的单词记忆。",
      icon: <ListChecks className="h-6 w-6" />,
    },
    {
      title: "进度统计",
      description: "追踪学习进度，查看详细的统计数据。",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "复习计划",
      description: "智能安排复习时间，提高记忆效果。",
      icon: <Repeat className="h-6 w-6" />,
    },
    {
      title: "收藏夹",
      description: "将难记的单词加入收藏夹，重点复习。",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  const sampleWord = {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipəti/",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way.",
    example: "The discovery of penicillin was a serendipity that revolutionized medicine.",
  };

  const handleAddWord = () => {
    // Logic to add new word
    console.log("Adding new word:", newWord);
    setNewWord("");
    setShowWordDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">词汇大师</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          提升您的词汇量，掌握语言的力量
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">今日单词</h2>
          <WordCard {...sampleWord} />
        </div>
        <div className="flex justify-center mb-8">
          <Button className="mr-4">开始学习</Button>
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
              />
              <Button onClick={handleAddWord}>添加</Button>
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="ml-4">
            <Settings className="mr-2 h-4 w-4" /> 设置
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
