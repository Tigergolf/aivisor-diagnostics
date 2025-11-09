import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  linkedinUrl: z.string().trim().url("Please enter a valid LinkedIn URL").refine(
    (url) => url.includes("linkedin.com"),
    "Must be a LinkedIn profile URL"
  ),
  experience: z.enum(["1-2", "3-5", "5-10", "10+"], {
    required_error: "Please select your experience level",
  }),
  specialization: z.array(z.string()).min(1, "Please select at least one specialization"),
  hasImplemented: z.enum(["yes", "no"], {
    required_error: "Please answer this question",
  }),
  portfolioUrl: z.string().trim().url("Please enter a valid URL").max(500),
  motivation: z.string().trim().max(1000).optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export const AdvisorApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({
    specialization: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSpecializationChange = (value: string, checked: boolean) => {
    const current = formData.specialization || [];
    const updated = checked 
      ? [...current, value]
      : current.filter(item => item !== value);
    setFormData({ ...formData, specialization: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = applicationSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Application submission:", validated);
      
      setIsSubmitted(true);
      toast({
        title: "Application received!",
        description: "We're reviewing 20 advisors for our pilot and will respond within 3-5 business days.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ApplicationFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ApplicationFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      toast({
        title: "Validation Error",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-6 bg-muted rounded-lg">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-muted-foreground">
          We're reviewing 20 advisors for our pilot and will respond within 3-5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName || ""}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={errors.fullName ? "border-destructive" : ""}
            placeholder="John Smith"
          />
          {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="linkedinUrl">LinkedIn Profile *</Label>
          <Input
            id="linkedinUrl"
            type="url"
            value={formData.linkedinUrl || ""}
            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            className={errors.linkedinUrl ? "border-destructive" : ""}
            placeholder="https://linkedin.com/in/yourprofile"
          />
          {errors.linkedinUrl && <p className="text-sm text-destructive mt-1">{errors.linkedinUrl}</p>}
        </div>

        <div>
          <Label htmlFor="experience">Years of AI/Automation Experience *</Label>
          <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value as any })}>
            <SelectTrigger className={errors.experience ? "border-destructive" : ""}>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
          {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience}</p>}
        </div>

        <div>
          <Label>Specialization *</Label>
          <div className="space-y-3 mt-2">
            {["Consulting", "Accounting", "Legal", "Other Professional Services"].map((spec) => (
              <div key={spec} className="flex items-center space-x-2">
                <Checkbox
                  id={spec}
                  checked={formData.specialization?.includes(spec)}
                  onCheckedChange={(checked) => handleSpecializationChange(spec, checked as boolean)}
                />
                <label htmlFor={spec} className="text-sm cursor-pointer">
                  {spec}
                </label>
              </div>
            ))}
          </div>
          {errors.specialization && <p className="text-sm text-destructive mt-1">{errors.specialization}</p>}
        </div>

        <div>
          <Label htmlFor="hasImplemented">Have you implemented automation in professional services firms? *</Label>
          <Select value={formData.hasImplemented} onValueChange={(value) => setFormData({ ...formData, hasImplemented: value as any })}>
            <SelectTrigger className={errors.hasImplemented ? "border-destructive" : ""}>
              <SelectValue placeholder="Select answer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
          {errors.hasImplemented && <p className="text-sm text-destructive mt-1">{errors.hasImplemented}</p>}
        </div>

        <div>
          <Label htmlFor="portfolioUrl">Portfolio or Case Studies URL *</Label>
          <Input
            id="portfolioUrl"
            type="url"
            value={formData.portfolioUrl || ""}
            onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
            className={errors.portfolioUrl ? "border-destructive" : ""}
            placeholder="https://yourportfolio.com or Google Drive link"
          />
          <p className="text-xs text-muted-foreground mt-1">Link to portfolio showing measurable ROI</p>
          {errors.portfolioUrl && <p className="text-sm text-destructive mt-1">{errors.portfolioUrl}</p>}
        </div>

        <div>
          <Label htmlFor="motivation">Why do you want to join AIVisors? (Optional)</Label>
          <Textarea
            id="motivation"
            value={formData.motivation || ""}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            className={errors.motivation ? "border-destructive" : ""}
            placeholder="Share your motivation..."
            rows={4}
          />
          {errors.motivation && <p className="text-sm text-destructive mt-1">{errors.motivation}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};
