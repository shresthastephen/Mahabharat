
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LagankhelBranch from "./pages/LagankhelBranch";
import PatanBranch from "./pages/PatanBranch";
import PulchowkBranch from "./pages/PulchowkBranch";
import GwarkoBranch from "./pages/GwarkoBranch";
import PutalisadakBranch from "./pages/PutalisadakBranch";
import SundarijalBranch from "./pages/SundarijalBranch";
import OrderPage from "./pages/OrderPage";
import BranchesPage from "./pages/BranchesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/branch/lagankhel" element={<LagankhelBranch />} />
          <Route path="/branch/patan" element={<PatanBranch />} />
          <Route path="/branch/pulchowk" element={<PulchowkBranch />} />
          <Route path="/branch/gwarko" element={<GwarkoBranch />} />
          <Route path="/branch/putalisadak" element={<PutalisadakBranch />} />
          <Route path="/branch/sundarijal" element={<SundarijalBranch />} />
          <Route path="/order" element={<OrderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
