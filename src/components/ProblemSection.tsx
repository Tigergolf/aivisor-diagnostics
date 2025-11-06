import iconTime from "@/assets/icon-time.png";
import iconErrors from "@/assets/icon-errors.png";
import iconBilling from "@/assets/icon-billing.png";

export const ProblemSection = () => {
  const problems = [
    {
      icon: iconTime,
      title: "30% of time spent on admin tasks",
      description: "Your skilled professionals waste valuable billable hours on repetitive administrative work",
    },
    {
      icon: iconErrors,
      title: "Manual processes that create errors",
      description: "Human error in data entry and document processing leads to costly mistakes and rework",
    },
    {
      icon: iconBilling,
      title: "Lost billing opportunities",
      description: "Time tracking gaps and administrative overhead reduce your firm's revenue potential",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services firms lose thousands of billable hours every month to inefficient processes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mb-6 mx-auto">
                <img src={problem.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-card-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
