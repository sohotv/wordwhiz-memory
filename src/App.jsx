import React, { Suspense, startTransition } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { navItems } from "./nav-items";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-8 overflow-auto">{children}</main>
  </div>
);

const LazyRoute = ({ component: Component, ...props }) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    startTransition(() => {
      navigate(props.to);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} onNavigate={handleNavigation} />
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Routes>
            {navItems.map(({ to, page: Page }) => (
              <Route 
                key={to} 
                path={to} 
                element={<LazyRoute component={Page} to={to} />} 
              />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
