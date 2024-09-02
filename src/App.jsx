import React, { Suspense, startTransition, useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { navItems } from "./nav-items";
import Sidebar from "./components/Sidebar";
import { UserProvider, useUser } from './contexts/UserContext';

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const Layout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="flex">
      {user && <Sidebar />}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
};

const LazyRoute = ({ component: Component, requiredRole, ...props }) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    startTransition(() => {
      navigate(props.to);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute requiredRole={requiredRole}>
        <Component {...props} onNavigate={handleNavigation} />
      </ProtectedRoute>
    </Suspense>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider value={{ user, setUser }}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Layout>
              <Routes>
                {navItems.map(({ to, page: Page, role }) => (
                  <Route 
                    key={to} 
                    path={to} 
                    element={<LazyRoute component={Page} to={to} requiredRole={role} />} 
                  />
                ))}
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;