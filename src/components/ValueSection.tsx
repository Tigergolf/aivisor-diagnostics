import { Check } from "lucide-react";

export const ValueSection = () => {
  const benefits = [
    "Identification of 5-10 automatable processes",
    "Estimate of monthly hours recoverable",
    "Prioritized implementation roadmap",
    "Specific tool recommendations",
    "Cost-benefit analysis for each opportunity",
    "Risk assessment and mitigation strategies",
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-xl text-primary font-semibold">
              All FREE for waitlist members
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-card-foreground font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
