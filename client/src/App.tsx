import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ProjectParkivia from "@/pages/project-parkivia";
import ProjectOsint from "@/pages/project-osint";
import ProjectCooling from "@/pages/project-cooling";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/projects/parkivia" component={ProjectParkivia}/>
      <Route path="/projects/osint" component={ProjectOsint}/>
      <Route path="/projects/cooling" component={ProjectCooling}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
