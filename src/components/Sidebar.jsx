import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon } from "lucide-react";
import { navItems } from "@/nav-items";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
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
      <Button variant="outline" className="mt-auto">
        登出
      </Button>
    </div>
  );
};

export default Sidebar;