import { useRef } from "react";
import { AdvisorHeroSection } from "@/components/AdvisorHeroSection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { IdealAdvisorSection } from "@/components/IdealAdvisorSection";
import { AdvisorProcessSection } from "@/components/AdvisorProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AdvisorApplicationSection } from "@/components/AdvisorApplicationSection";
import { FaqSection } from "@/components/FaqSection";
import { AdvisorFinalCta } from "@/components/AdvisorFinalCta";
import { Footer } from "@/components/Footer";

const Advisors = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <AdvisorHeroSection onCtaClick={scrollToForm} />
      <OpportunitySection />
      <IdealAdvisorSection />
      <AdvisorProcessSection />
      <ProjectsSection />
      <div ref={formRef}>
        <AdvisorApplicationSection />
      </div>
      <FaqSection />
      <AdvisorFinalCta onCtaClick={scrollToForm} />
      <Footer />
    </div>
  );
};

export default Advisors;
