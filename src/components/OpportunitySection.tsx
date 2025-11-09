import { Target, Package, Shield } from "lucide-react";

export const OpportunitySection = () => {
  const opportunities = [
    {
      icon: Target,
      bgColor: "bg-brand-blue/10",
      iconColor: "text-brand-blue",
      title: "Pre-Qualified Clients",
      description: "Firms that completed discovery and are ready to invest",
    },
    {
      icon: Package,
      bgColor: "bg-brand-medium-navy/10",
      iconColor: "text-brand-medium-navy",
      title: "Ready-to-Run Packs",
      description: "Pre-built automation tools, not just consulting hours",
    },
    {
      icon: Shield,
      bgColor: "bg-brand-navy/10",
      iconColor: "text-brand-navy",
      title: "Governed Platform",
      description: "ROI tracking, compliance built-in, long-term relationships",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Join AIVisors?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full ${opportunity.bgColor}`}>
                  <IconComponent className={`w-10 h-10 ${opportunity.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-card-foreground">
                  {opportunity.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {opportunity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
