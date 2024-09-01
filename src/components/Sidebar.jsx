import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { navItems } from "@/nav-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const NavItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center w-full p-2 hover:bg-gray-200">
          {item.icon}
          <span className="ml-2 flex-1">{item.title}</span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.children.map((child) => (
            <NavItem key={child.to} item={child} depth={depth + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `flex items-center p-2 ${depth > 0 ? 'pl-8' : ''} ${
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
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">用户名</h2>
          <p className="text-sm text-gray-500">学习天数: 30</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">词汇大师</h1>
      <nav className="flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </nav>
      <Button variant="outline" className="mt-auto">
        <LogOut className="mr-2 h-4 w-4" />
        登出
      </Button>
    </div>
  );
};

export default Sidebar;
