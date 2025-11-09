import { Clock, AlertCircle, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      bgColor: "bg-brand-blue/10",
      iconColor: "text-brand-blue",
      title: "Billable hours lost to admin tasks",
      description: "Your skilled professionals waste valuable time on repetitive work instead of serving clients",
    },
    {
      icon: AlertCircle,
      bgColor: "bg-brand-medium-navy/10",
      iconColor: "text-brand-medium-navy",
      title: "Manual processes creating bottlenecks",
      description: "Inefficient workflows slow down your operations and reduce team productivity",
    },
    {
      icon: DollarSign,
      bgColor: "bg-brand-navy/10",
      iconColor: "text-brand-navy",
      title: "AI confusion—too many tools, no clear path",
      description: "Overwhelming options and unclear ROI make it difficult to know where to start",
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
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full ${problem.bgColor}`}>
                  <IconComponent className={`w-10 h-10 ${problem.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-card-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
