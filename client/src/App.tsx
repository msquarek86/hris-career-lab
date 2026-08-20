import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./hris.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LessonViewer from "./pages/LessonViewer";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/learn/:lessonId" component={LessonViewer} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function GitHubPagesRouteBridge() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const route = new URLSearchParams(window.location.search).get("route");
    if (route && route.startsWith("/")) {
      setLocation(route, { replace: true });
    }
  }, [setLocation]);

  return null;
}

function App() {
  const basePath = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><WouterRouter base={basePath}><GitHubPagesRouteBridge /><AppRoutes /></WouterRouter></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
