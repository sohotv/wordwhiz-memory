import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, BookOpen, BarChart3, Settings, LogOut } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">管理后台</h1>
          <nav className="space-y-2">
            <Link to="/admin" className="flex items-center p-2 hover:bg-gray-200 rounded">
              <BarChart3 className="mr-2 h-4 w-4" />
              概览
            </Link>
            <Link to="/admin/users" className="flex items-center p-2 hover:bg-gray-200 rounded">
              <Users className="mr-2 h-4 w-4" />
              用户管理
            </Link>
            <Link to="/admin/words" className="flex items-center p-2 hover:bg-gray-200 rounded">
              <BookOpen className="mr-2 h-4 w-4" />
              词汇管理
            </Link>
            <Link to="/admin/settings" className="flex items-center p-2 hover:bg-gray-200 rounded">
              <Settings className="mr-2 h-4 w-4" />
              系统设置
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 p-4 w-64">
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            登出
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6">
            <Input
              placeholder="搜索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;