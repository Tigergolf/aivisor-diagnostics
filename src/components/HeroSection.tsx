import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/aivisors-logo.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional using mobile technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-brand-navy/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <img src={logo} alt="AIVisors" className="h-10 md:h-12" />
        </div>
        
        <div className="max-w-3xl">
          <div className="text-white space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              How Many Billable Hours Are You Losing to Admin Tasks?
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Discover what AI can do for your firm in 48 hours. Free diagnostic.
            </p>
            <div className="pt-4">
              <Button 
                onClick={onCtaClick}
                size="lg" 
                className="bg-white text-brand-navy hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Request Free Diagnostic
              </Button>
            </div>
            <p className="text-sm text-white/80">
              For consulting, accounting, and legal services firms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
