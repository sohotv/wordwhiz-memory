import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Settings, LogOut, Users, BookOpen, BarChart } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

const AdminSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">管理后台</h1>
      <nav className="flex-1 overflow-y-auto">
        <NavLink to="/admin/users" className="flex items-center p-2 hover:bg-gray-200">
          <Users className="mr-2 h-4 w-4" />
          用户管理
        </NavLink>
        <NavLink to="/admin/words" className="flex items-center p-2 hover:bg-gray-200">
          <BookOpen className="mr-2 h-4 w-4" />
          词汇管理
        </NavLink>
        <NavLink to="/admin/statistics" className="flex items-center p-2 hover:bg-gray-200">
          <BarChart className="mr-2 h-4 w-4" />
          统计分析
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

export default AdminSidebar;