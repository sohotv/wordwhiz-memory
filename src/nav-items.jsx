import React, { lazy } from 'react';
import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon, RepeatIcon } from "lucide-react";

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
    title: "用户中心",
    to: "/user",
    icon: <UserIcon className="h-4 w-4" />,
    page: UserDashboard,
  },
  {
    title: "管理后台",
    to: "/admin",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: AdminDashboard,
  },
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
  {
    title: "学习进度",
    to: "/progress",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: Progress,
  },
];
