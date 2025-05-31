
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThamelBranch from "./pages/ThamelBranch";
import PatanBranch from "./pages/PatanBranch";
import BhaktapurBranch from "./pages/BhaktapurBranch";
import PokharaBranch from "./pages/PokharaBranch";
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
          <Route path="/branch/thamel" element={<ThamelBranch />} />
          <Route path="/branch/patan" element={<PatanBranch />} />
          <Route path="/branch/bhaktapur" element={<BhaktapurBranch />} />
          <Route path="/branch/pokhara" element={<PokharaBranch />} />
          <Route path="/order" element={<OrderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
