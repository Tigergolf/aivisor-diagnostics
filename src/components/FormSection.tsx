import { WaitlistForm } from "./WaitlistForm";

export const FormSection = () => {
  return (
    <section id="waitlist-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Diagnostic
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll be in touch within 48 hours
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-elevated">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};
