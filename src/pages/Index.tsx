import { DoseCalculator } from "@/components/DoseCalculator";
import { AboutSection } from "@/components/AboutSection";
import { Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Drug Dose Calculator</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Calculate Drug Dosages Safely
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple and educational tool for understanding weight-based drug dose calculations
          </p>
        </div>

        <DoseCalculator />
        <AboutSection />
      </main>

      <footer className="border-t mt-16 py-6 bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Drug Dose Calculator - Educational Mini Project</p>
          <p className="mt-1">Not for clinical use. Always consult healthcare professionals.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
