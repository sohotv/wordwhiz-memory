import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, BookOpen, BarChart3, Settings, Activity, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from './UserManagement';
import WordManagement from './WordManagement';
import SystemSettings from './SystemSettings';
import Statistics from './Statistics';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overviewStats = [
    { title: '总用户数', value: '1,234', icon: Users, change: '+5%' },
    { title: '活跃用户', value: '892', icon: Activity, change: '+2%' },
    { title: '总词汇量', value: '5,000', icon: BookOpen, change: '+100' },
    { title: '系统收入', value: '¥9,876', icon: DollarSign, change: '+8%' },
  ];

  const userActivityData = [
    { name: '周一', 用户数: 400 },
    { name: '周二', 用户数: 300 },
    { name: '周三', 用户数: 500 },
    { name: '周四', 用户数: 280 },
    { name: '周五', 用户数: 590 },
    { name: '周六', 用户数: 800 },
    { name: '周日', 用户数: 700 },
  ];

  const wordLearningData = [
    { name: '第1周', 学习单词数: 1000 },
    { name: '第2周', 学习单词数: 1200 },
    { name: '第3周', 学习单词数: 1500 },
    { name: '第4周', 学习单词数: 1800 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">管理后台</h2>
        </div>
        <nav className="mt-4">
          {['概览', '用户管理', '词汇管理', '数据统计', '系统设置'].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left"
              onClick={() => setActiveTab(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto p-8">
        <h1 className="text-3xl font-bold mb-6">管理员仪表板</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="hidden">
            <TabsTrigger value="概览">概览</TabsTrigger>
            <TabsTrigger value="用户管理">用户管理</TabsTrigger>
            <TabsTrigger value="词汇管理">词汇管理</TabsTrigger>
            <TabsTrigger value="数据统计">数据统计</TabsTrigger>
            <TabsTrigger value="系统设置">系统设置</TabsTrigger>
          </TabsList>

          <TabsContent value="概览">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {overviewStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.change} 较上月</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>用户活跃度</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="用户数" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>单词学习趋势</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={wordLearningData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="学习单词数" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="用户管理">
            <UserManagement />
          </TabsContent>

          <TabsContent value="词汇管理">
            <WordManagement />
          </TabsContent>

          <TabsContent value="数据统计">
            <Statistics />
          </TabsContent>

          <TabsContent value="系统设置">
            <SystemSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;