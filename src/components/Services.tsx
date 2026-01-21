import { Activity, Hand, Move, HeartPulse, UserCheck, BookOpen } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Spinal & Joint Assessment",
    description: "Comprehensive evaluation of your spine and joints to understand your condition.",
  },
  {
    icon: Hand,
    title: "Manual Techniques",
    description: "Appropriate chiropractic adjustments and manual therapy techniques.",
  },
  {
    icon: HeartPulse,
    title: "Soft Tissue Techniques",
    description: "Targeted treatment for muscle tension and soft tissue issues.",
  },
  {
    icon: Move,
    title: "Mobility & Movement Advice",
    description: "Guidance to improve your range of motion and movement patterns.",
  },
  {
    icon: UserCheck,
    title: "Postural Guidance",
    description: "Education on posture and ergonomics for daily activities.",
  },
  {
    icon: BookOpen,
    title: "Self-Management Exercises",
    description: "Personalised exercises and advice for ongoing improvement.",
  },
];

const conditions = [
  "Low back pain",
  "Neck pain",
  "Mid-back pain",
  "Joint stiffness",
  "Muscle tightness",
  "Reduced mobility",
  "General aches and pains",
];

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Mobile Chiropractic Care
          </h2>
          <p className="text-muted-foreground text-lg">
            I provide chiropractic assessments and treatment in your own home using portable 
            professional equipment. All care is tailored to your individual needs following 
            a full consultation and consent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif font-semibold text-foreground text-2xl mb-6 text-center">
              Conditions Commonly Supported
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Chiropractic care may help with a range of musculoskeletal issues:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {conditions.map((condition, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border"
                >
                  {condition}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm text-center mt-8">
              If chiropractic care is not appropriate for you, this will be discussed and you may 
              be signposted to another healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
