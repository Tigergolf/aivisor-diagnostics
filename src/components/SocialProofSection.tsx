import { Users } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the first 10 firms in our curated pilot program
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Limited spots available—matched with 20 certified advisors
          </p>
        </div>
      </div>
    </section>
  );
};
