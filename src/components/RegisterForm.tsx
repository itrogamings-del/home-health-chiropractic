import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Shield, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RegisterForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    postcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgjqyop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          address: formData.address,
          postcode: formData.postcode,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for registering!",
          description: "I will contact you directly to discuss your needs and arrange an appointment.",
        });

        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          address: "",
          postcode: "",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoReasons = [
    "To contact you about your enquiry or appointment",
    "To confirm service availability in your area",
    "To meet professional record-keeping requirements",
  ];

  return (
    <section id="register" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Register Your Interest
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete the secure form below and I will contact you directly to discuss 
              your needs and arrange an appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="mt-1.5"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="mobile" className="text-foreground font-medium">
                        Mobile Number *
                      </Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="mt-1.5"
                        placeholder="07xxx xxxxxx"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1.5"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-foreground font-medium">
                      Home Address *
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1.5"
                      placeholder="Street address"
                    />
                  </div>

                  <div className="max-w-[200px]">
                    <Label htmlFor="postcode" className="text-foreground font-medium">
                      Postcode *
                    </Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      className="mt-1.5"
                      placeholder="e.g. HU17 0AA"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="gdprConsent"
                      checked={consentGiven}
                      onCheckedChange={(checked) => setConsentGiven(checked === true)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="gdprConsent" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
                      I consent to Ben Walker Mobile Chiropractic collecting and processing my personal data to respond to my enquiry and arrange appointments, in accordance with UK GDPR.
                    </Label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !consentGiven}
                    >
                      {isSubmitting ? "Submitting..." : "Register Now"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-accent/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-primary" />
                  <h3 className="font-serif font-semibold text-foreground">
                    Why This Information Is Needed
                  </h3>
                </div>
                <ul className="space-y-3">
                  {infoReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-serif font-semibold text-foreground">
                    Your Privacy
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your personal information is handled confidentially and processed in 
                  accordance with UK GDPR and the General Chiropractic Council (GCC) Codes of Practice.
                </p>
              </div>

              <p className="text-xs text-muted-foreground text-center lg:text-left">
                Submitting the form does not commit you to treatment. Chiropractic care 
                will only proceed following a full consultation and informed consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
