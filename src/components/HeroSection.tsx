import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logoWhite from "@/assets/aivisors-logo-white.png";

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
          className="w-full h-full object-cover object-[30%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-brand-navy/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <img src={logoWhite} alt="AIVisors" className="h-12 md:h-16" />
        </div>
        
        <div className="max-w-3xl">
          <div className="text-white space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Where AI Can Save You Time or Money—In 10 Minutes
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Match instantly with certified AI advisors and ready-to-run automation packs. Built for professional services firms.
            </p>
            <div className="pt-4">
              <Button 
                onClick={onCtaClick}
                size="lg" 
                className="bg-white text-brand-navy hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Start Your Discovery
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
