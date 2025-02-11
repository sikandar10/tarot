import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { BottomNav } from "@/components/BottomNav";
import TarotReadingPage from "@/pages/TarotReadingPage";
import HistoryPage from "@/pages/HistoryPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/not-found";

const base = import.meta.env.VITE_BASE_URL || '';

function Router() {
  return (
    <Switch base={base}>
      <Route path="/" component={TarotReadingPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-background">
        <Router />
        <BottomNav />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;