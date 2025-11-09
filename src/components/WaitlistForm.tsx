import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  firmName: z.string().trim().min(2, "Firm name required").max(100, "Firm name must be less than 100 characters"),
  sector: z.enum(["consulting", "accounting", "legal", "other"], {
    required_error: "Please select a sector",
  }),
  employeeCount: z.enum(["10-50", "50-100", "100-250", "250+"], {
    required_error: "Please select employee count",
  }),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  variant?: "default" | "inline";
}

export const WaitlistForm = ({ variant = "default" }: WaitlistFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<WaitlistFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = waitlistSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Waitlist submission:", validated);
      
      setIsSubmitted(true);
      toast({
        title: "Application received!",
        description: "We'll contact you within 48 hours with next steps.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof WaitlistFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof WaitlistFormData] = err.message;
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
          We'll contact you within 48 hours with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={variant === "inline" ? "space-y-4" : "space-y-6 max-w-md mx-auto"}>
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
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
            placeholder="john@yourfirm.com"
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="firmName">Firm Name *</Label>
          <Input
            id="firmName"
            type="text"
            value={formData.firmName || ""}
            onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
            className={errors.firmName ? "border-destructive" : ""}
            placeholder="Your Firm Name"
          />
          {errors.firmName && <p className="text-sm text-destructive mt-1">{errors.firmName}</p>}
        </div>

        <div>
          <Label htmlFor="sector">Sector *</Label>
          <Select value={formData.sector} onValueChange={(value) => setFormData({ ...formData, sector: value as any })}>
            <SelectTrigger className={errors.sector ? "border-destructive" : ""}>
              <SelectValue placeholder="Select your sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="accounting">Accounting</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="other">Other Professional Services</SelectItem>
            </SelectContent>
          </Select>
          {errors.sector && <p className="text-sm text-destructive mt-1">{errors.sector}</p>}
        </div>

        <div>
          <Label htmlFor="employeeCount">Number of Employees *</Label>
          <Select value={formData.employeeCount} onValueChange={(value) => setFormData({ ...formData, employeeCount: value as any })}>
            <SelectTrigger className={errors.employeeCount ? "border-destructive" : ""}>
              <SelectValue placeholder="Select employee count" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10-50">10-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="100-250">100-250</SelectItem>
              <SelectItem value="250+">250+</SelectItem>
            </SelectContent>
          </Select>
          {errors.employeeCount && <p className="text-sm text-destructive mt-1">{errors.employeeCount}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Requesting..." : "Request Pilot Access"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Your data is secure. We use read-only connections and encryption.
      </p>
    </form>
  );
};
