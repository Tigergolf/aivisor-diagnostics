import { Compass, Wrench, TrendingUp, Users } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      text: "Guide firms through 10-minute discovery process",
      icon: Compass,
    },
    {
      text: "Implement ready-to-run automation packs",
      icon: Wrench,
    },
    {
      text: "Deliver 60-day ROI proof for client renewal",
      icon: TrendingUp,
    },
    {
      text: "Build long-term advisory relationships",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Projects Include:
            </h2>
            <p className="text-lg text-muted-foreground">
              You're not just consulting—you're implementing with proven tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
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
                    {project.text}
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
