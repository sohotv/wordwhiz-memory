import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminSidebar from './components/AdminSidebar';
import UserSidebar from './components/UserSidebar';

const queryClient = new QueryClient();

// 懒加载路由组件
const Login = lazy(() => import('./pages/Login'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const LearnWords = lazy(() => import('./pages/LearnWords'));
const ReviewWords = lazy(() => import('./pages/ReviewWords'));
const Progress = lazy(() => import('./pages/Progress'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const WordManagement = lazy(() => import('./pages/WordManagement'));
const Statistics = lazy(() => import('./pages/Statistics'));

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin/*" element={
                  <ProtectedRoute requiredRole="admin">
                    <div className="flex">
                      <AdminSidebar />
                      <main className="flex-1 p-8 overflow-auto">
                        <Routes>
                          <Route index element={<AdminDashboard />} />
                          <Route path="users" element={<UserManagement />} />
                          <Route path="words" element={<WordManagement />} />
                          <Route path="statistics" element={<Statistics />} />
                        </Routes>
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/*" element={
                  <ProtectedRoute>
                    <div className="flex">
                      <UserSidebar />
                      <main className="flex-1 p-8 overflow-auto">
                        <Routes>
                          <Route index element={<Navigate to="/dashboard" replace />} />
                          <Route path="dashboard" element={<UserDashboard />} />
                          <Route path="learn" element={<LearnWords />} />
                          <Route path="review" element={<ReviewWords />} />
                          <Route path="progress" element={<Progress />} />
                        </Routes>
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;