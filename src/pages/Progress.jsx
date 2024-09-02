import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, BookOpen, Brain, Target, TrendingUp } from "lucide-react";

const ProgressPage = () => {
  const weeklyData = [
    { name: '周一', wordsLearned: 12, reviewedWords: 20 },
    { name: '周二', wordsLearned: 19, reviewedWords: 25 },
    { name: '周三', wordsLearned: 3, reviewedWords: 15 },
    { name: '周四', wordsLearned: 5, reviewedWords: 22 },
    { name: '周五', wordsLearned: 2, reviewedWords: 18 },
    { name: '周六', wordsLearned: 15, reviewedWords: 30 },
    { name: '周日', wordsLearned: 21, reviewedWords: 35 },
  ];

  const monthlyData = [
    { name: '第1周', wordsLearned: 50, reviewedWords: 100 },
    { name: '第2周', wordsLearned: 70, reviewedWords: 130 },
    { name: '第3周', wordsLearned: 45, reviewedWords: 90 },
    { name: '第4周', wordsLearned: 60, reviewedWords: 110 },
  ];

  const wordCategoryData = [
    { name: '名词', value: 120 },
    { name: '动词', value: 80 },
    { name: '形容词', value: 60 },
    { name: '副词', value: 40 },
    { name: '其他', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">学习进度</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总学习天数</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30天</div>
            <p className="text-xs text-muted-foreground">连续学习: 7天</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总学习时间</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24小时</div>
            <p className="text-xs text-muted-foreground">日均: 48分钟</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">已学单词</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320词</div>
            <p className="text-xs text-muted-foreground">本周新增: 50词</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">掌握程度</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">周数据</TabsTrigger>
          <TabsTrigger value="monthly">月数据</TabsTrigger>
          <TabsTrigger value="wordTypes">词性分布</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <CardTitle>本周学习情况</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="wordsLearned" name="新学单词" fill="#8884d8" />
                  <Bar dataKey="reviewedWords" name="复习单词" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>本月学习趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="wordsLearned" name="新学单词" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="reviewedWords" name="复习单词" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wordTypes">
          <Card>
            <CardHeader>
              <CardTitle>词性分布</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wordCategoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wordCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              学习目标
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span>每日新词目标</span>
                  <Badge>20词</Badge>
                </div>
                <Progress value={75} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span>每周复习目标</span>
                  <Badge>100词</Badge>
                </div>
                <Progress value={60} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span>月度掌握目标</span>
                  <Badge>500词</Badge>
                </div>
                <Progress value={45} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              学习效率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>平均记忆时间</span>
                <Badge variant="outline">2.5分钟/词</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>复习正确率</span>
                <Badge variant="outline">85%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>长期记忆率</span>
                <Badge variant="outline">70%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>词汇应用能力</span>
                <Badge variant="outline">中级</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;