
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Placeholder components for new routes
const Etudiants = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Page Étudiants</h1><p className="mt-4">En construction...</p></div>;
const Parents = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Page Parents</h1><p className="mt-4">En construction...</p></div>;
const AVI = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">AVI</h1><p className="mt-4">En construction...</p></div>;
const Hebergement = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Hébergement</h1><p className="mt-4">En construction...</p></div>;
const JobEtudiant = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Job Étudiant</h1><p className="mt-4">En construction...</p></div>;
const Assurances = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Assurances</h1><p className="mt-4">En construction...</p></div>;
const Tarifs = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">Tarifs</h1><p className="mt-4">En construction...</p></div>;
const About = () => <div className="container mx-auto px-4 pt-24 pb-16"><h1 className="text-3xl font-bold">À propos de nous</h1><p className="mt-4">En construction...</p></div>;
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
              <Route path="/etudiants" element={<Etudiants />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/visa/avi" element={<AVI />} />
              <Route path="/visa/hebergement" element={<Hebergement />} />
              <Route path="/vivre-en-france/job-etudiant" element={<JobEtudiant />} />
              <Route path="/vivre-en-france/assurances" element={<Assurances />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
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
