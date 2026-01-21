import { ClipboardList, Phone, Home, Calendar } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Register Your Interest",
    description: "Complete the online form with your contact details and address.",
  },
  {
    icon: Phone,
    step: "02",
    title: "I Contact You Directly",
    description: "I'll get in touch by phone or email to discuss your needs and arrange an appointment.",
  },
  {
    icon: Home,
    step: "03",
    title: "I Visit Your Home",
    description: "I arrive with all required equipment and complete your consultation and treatment.",
  },
  {
    icon: Calendar,
    step: "04",
    title: "Ongoing Care If Required",
    description: "Follow-up visits can be arranged based on your goals and preferences.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Simple, convenient, and professional
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started with mobile chiropractic care is straightforward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent rounded-full mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-foreground text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
