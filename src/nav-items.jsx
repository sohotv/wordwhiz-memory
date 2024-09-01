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
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: Index,
  },
  {
    title: "User Dashboard",
    to: "/user",
    icon: <UserIcon className="h-4 w-4" />,
    page: UserDashboard,
  },
  {
    title: "Admin Dashboard",
    to: "/admin",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: AdminDashboard,
  },
  {
    title: "Learn Words",
    to: "/learn",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: LearnWords,
  },
  {
    title: "Review Words",
    to: "/review",
    icon: <RepeatIcon className="h-4 w-4" />,
    page: ReviewWords,
  },
  {
    title: "Progress",
    to: "/progress",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: Progress,
  },
];
