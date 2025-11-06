import processTimeline from "@/assets/process-timeline.png";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "48h: Process analysis",
      description: "We analyze your current workflows and identify inefficiencies",
    },
    {
      number: "02",
      title: "We identify automation opportunities",
      description: "Our experts pinpoint 5-10 processes ready for AI implementation",
    },
    {
      number: "03",
      title: "Clear implementation roadmap",
      description: "Receive a prioritized plan with specific tools and timeline",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Rapid AI Diagnostic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get actionable insights in just 48 hours
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <img 
            src={processTimeline} 
            alt="Process timeline" 
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl font-bold text-primary/10 mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
