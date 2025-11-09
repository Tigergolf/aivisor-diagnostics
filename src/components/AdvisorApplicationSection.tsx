import { AdvisorApplicationForm } from "./AdvisorApplicationForm";

export const AdvisorApplicationSection = () => {
  return (
    <section id="application-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apply for Certification
            </h2>
            <p className="text-lg text-muted-foreground">
              We're accepting 20 certified advisors for our pilot. Apply early.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-elevated">
            <AdvisorApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
};
