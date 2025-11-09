import { CheckCircle2 } from "lucide-react";

export const IdealAdvisorSection = () => {
  const criteria = [
    "Have implemented AI/automation in professional services firms",
    "Understand tools like Make.com, QuickBooks integrations, CRMs",
    "Can deliver measurable results within 60 days",
    "Value governance, data privacy, and client trust",
    "Want recurring project relationships, not one-off gigs",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We're Looking For Advisors Who:
            </h2>
          </div>
          
          <div className="space-y-6">
            {criteria.map((criterion, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <p className="text-card-foreground text-lg">
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
