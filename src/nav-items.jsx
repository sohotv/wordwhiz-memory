import { HomeIcon, UserIcon, ShieldIcon, BookOpenIcon, BarChartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import LearnWords from "./pages/LearnWords.jsx";
import Progress from "./pages/Progress.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "User Dashboard",
    to: "/user",
    icon: <UserIcon className="h-4 w-4" />,
    page: <UserDashboard />,
  },
  {
    title: "Admin Dashboard",
    to: "/admin",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <AdminDashboard />,
  },
  {
    title: "Learn Words",
    to: "/learn",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <LearnWords />,
  },
  {
    title: "Progress",
    to: "/progress",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: <Progress />,
  },
];
