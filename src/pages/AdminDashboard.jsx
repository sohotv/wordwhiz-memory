import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, BookOpen, BarChart3, Settings, LogOut, Search } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  const navItems = [
    { to: "/admin", icon: <BarChart3 className="h-5 w-5" />, label: "概览" },
    { to: "/admin/users", icon: <Users className="h-5 w-5" />, label: "用户管理" },
    { to: "/admin/words", icon: <BookOpen className="h-5 w-5" />, label: "词汇管理" },
    { to: "/admin/settings", icon: <Settings className="h-5 w-5" />, label: "系统设置" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 flex-grow">
          <h1 className="text-2xl font-bold mb-6">管理后台</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-4">
          <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="mr-2 h-5 w-5" />
            登出
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="搜索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-sm"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;