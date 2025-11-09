import { Target, Clock, MapPin, Wrench, DollarSign, Shield } from "lucide-react";

export const ValueSection = () => {
  const benefits = [
    {
      text: "10-minute discovery to identify opportunities",
      icon: Clock,
    },
    {
      text: "Instant match with the right AI expert for your firm",
      icon: Target,
    },
    {
      text: "Ready-to-run automation packs (not just recommendations)",
      icon: Wrench,
    },
    {
      text: "60-day ROI tracking to prove results",
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get:
            </h2>
            <p className="text-xl text-muted-foreground">
              All included with platform access
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <p className="text-card-foreground font-medium">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
