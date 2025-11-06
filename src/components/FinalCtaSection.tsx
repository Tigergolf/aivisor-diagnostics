import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Recovering Billable Hours
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free diagnostic with no commitment
          </p>
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="bg-white text-brand-navy hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold group"
          >
            Request My Diagnostic
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
