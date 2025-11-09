import processBg from "@/assets/process-bg.jpg";
export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "10 minutes: Quick discovery process",
      description: "Complete a brief assessment to identify where AI can help your firm most",
    },
    {
      number: "02",
      title: "Instant match with certified AI advisor",
      description: "Get connected with the right expert who understands your specific needs",
    },
    {
      number: "03",
      title: "Access ready-to-run automation packs",
      description: "Receive pre-built solutions you can implement immediately, not just recommendations",
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
              How AIVisors Works
            </h2>
            <p className="text-lg text-brand-navy/80 max-w-2xl mx-auto">
              From discovery to expert match in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-white mb-2">
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
