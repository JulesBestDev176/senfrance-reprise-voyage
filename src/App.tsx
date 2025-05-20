
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { Contact } from "lucide-react";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import Pricing from "./components/home/Pricing";
import StudentPage from "./pages/StudentPage";
import ParentsPage from "./pages/ParentsPage";
import PricingPage from "./pages/PricingPage";
import AVIPage from "./pages/AviPage";
import HousingPage from "./pages/HousingPage";
import PageJobEtudiant from "./pages/PageJobEtudiant";
import PageAssurances from "./pages/PageAssurances";

// Placeholder components for new routes

const AVI = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">AVI</h1><p className="mt-4">En construction...</p></div>;
// const About = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">À propos de nous</h1><p className="mt-4">En construction...</p></div>;
const Services = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Nos Services</h1><p className="mt-4">En construction...</p></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/etudiants" element={<StudentPage />} />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/visa/avi" element={<AVIPage />} />
              <Route path="/visa/hebergement" element={<HousingPage />} />
              <Route path="/vivre-en-france/job-etudiant" element={<PageJobEtudiant />} />
              <Route path="/vivre-en-france/assurances" element={<PageAssurances />} />
              <Route path="/tarifs" element={<PricingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/tours" element={<Tours />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
