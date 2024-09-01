import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon, Settings } from "lucide-react";
import { navItems } from "@/nav-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">用户名</h2>
          <p className="text-sm text-gray-500">学习天数: 30</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">词汇大师</h1>
      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center p-2 mb-2 ${
                isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-200'
              }`
            }
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <Button variant="outline" className="mt-auto mb-2">
        <Settings className="mr-2 h-4 w-4" />
        设置
      </Button>
      <Button variant="outline">
        登出
      </Button>
    </div>
  );
};

export default Sidebar;
