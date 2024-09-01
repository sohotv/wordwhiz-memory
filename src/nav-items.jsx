import React, { lazy } from 'react';
import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon, RepeatIcon, Settings, Folder } from "lucide-react";

const Index = lazy(() => import("./pages/Index.jsx"));
const UserDashboard = lazy(() => import("./pages/UserDashboard.jsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));
const LearnWords = lazy(() => import("./pages/LearnWords.jsx"));
const ReviewWords = lazy(() => import("./pages/ReviewWords.jsx"));
const Progress = lazy(() => import("./pages/Progress.jsx"));

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "首页",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: Index,
  },
  {
    title: "学习中心",
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        title: "学习单词",
        to: "/learn",
        icon: <BookOpenIcon className="h-4 w-4" />,
        page: LearnWords,
      },
      {
        title: "复习单词",
        to: "/review",
        icon: <RepeatIcon className="h-4 w-4" />,
        page: ReviewWords,
      },
    ],
  },
  {
    title: "个人中心",
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        title: "用户仪表板",
        to: "/user",
        icon: <UserIcon className="h-4 w-4" />,
        page: UserDashboard,
      },
      {
        title: "学习进度",
        to: "/progress",
        icon: <BarChartIcon className="h-4 w-4" />,
        page: Progress,
      },
    ],
  },
  {
    title: "管理中心",
    to: "/admin",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: AdminDashboard,
  },
  {
    title: "设置",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: null, // 假设设置页面还未创建
  },
];
