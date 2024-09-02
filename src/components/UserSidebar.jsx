import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Settings, LogOut, BookOpen, Brain, BarChart, Star } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

const UserSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">词汇大师</h1>
      <nav className="flex-1 overflow-y-auto">
        <NavLink to="/dashboard" className="flex items-center p-2 hover:bg-gray-200">
          <BookOpen className="mr-2 h-4 w-4" />
          仪表板
        </NavLink>
        <NavLink to="/learn" className="flex items-center p-2 hover:bg-gray-200">
          <Brain className="mr-2 h-4 w-4" />
          学习单词
        </NavLink>
        <NavLink to="/review" className="flex items-center p-2 hover:bg-gray-200">
          <Star className="mr-2 h-4 w-4" />
          复习单词
        </NavLink>
        <NavLink to="/progress" className="flex items-center p-2 hover:bg-gray-200">
          <BarChart className="mr-2 h-4 w-4" />
          学习进度
        </NavLink>
      </nav>
      <div className="mt-auto space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          设置
        </Button>
        <Button variant="outline" className="w-full justify-start" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          登出
        </Button>
      </div>
    </div>
  );
};

export default UserSidebar;