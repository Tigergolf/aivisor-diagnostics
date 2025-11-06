import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ValueSection } from "@/components/ValueSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FormSection } from "@/components/FormSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <ProblemSection />
      <ProcessSection />
      <ValueSection />
      <SocialProofSection />
      <FormSection />
      <FinalCtaSection onCtaClick={scrollToForm} />
      <Footer />
    </main>
  );
};

export default Index;
