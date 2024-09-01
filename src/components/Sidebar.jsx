import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon, Settings, LogOut, ChevronDown, ChevronRight } from "lucide-react";
import { navItems } from "@/nav-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-200">
          <div className="flex items-center">
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </div>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              className={({ isActive }) =>
                `flex items-center p-2 pl-8 ${
                  isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-200'
                }`
              }
            >
              {child.icon}
              <span className="ml-2">{child.title}</span>
            </NavLink>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `flex items-center p-2 ${
          isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-200'
        }`
      }
    >
      {item.icon}
      <span className="ml-2">{item.title}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>用户</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">用户名</h2>
          <p className="text-sm text-gray-500">学习天数: 30</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">词汇大师</h1>
      <nav className="flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
      </nav>
      <div className="mt-auto space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          设置
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          登出
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
