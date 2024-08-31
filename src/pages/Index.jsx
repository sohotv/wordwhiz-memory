import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, ListChecks, Settings, BarChart } from "lucide-react";

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

const Index = () => {
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
  ];

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
        <div className="flex justify-center">
          <Button className="mr-4">开始学习</Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> 设置
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
