import processBg from "@/assets/process-bg.jpg";
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
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={processBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="backdrop-blur-md bg-white/50 rounded-2xl p-8 md:p-12 shadow-elevated border border-white/20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Rapid AI Diagnostic
            </h2>
            <p className="text-lg text-brand-navy/80 max-w-2xl mx-auto">
              Get actionable insights in just 48 hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-brand-blue/20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy">
                  {step.title}
                </h3>
                <p className="text-brand-navy/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
