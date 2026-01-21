import { MapPin, Stethoscope, Check } from "lucide-react";

const factors = [
  {
    icon: MapPin,
    title: "Location",
    description: "Distance to your home",
  },
  {
    icon: Stethoscope,
    title: "Appointment Type",
    description: "Initial consultation or follow-up visit",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Fees
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Pricing will be discussed when you make contact, based on:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                  {factor.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Check className="w-6 h-6 text-primary" />
              <span className="font-serif font-semibold text-foreground text-xl">
                No Hidden Costs
              </span>
            </div>
            <p className="text-muted-foreground">
              You will be informed of fees before your appointment is confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
