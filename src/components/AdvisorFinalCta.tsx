import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AdvisorFinalCtaProps {
  onCtaClick: () => void;
}

export const AdvisorFinalCta = ({ onCtaClick }: AdvisorFinalCtaProps) => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Long-Term Client Relationships, Not Just Gigs
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 20 certified advisors helping firms adopt AI with confidence
          </p>
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="bg-white text-brand-navy hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold group"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
