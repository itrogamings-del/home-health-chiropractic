import { CheckCircle } from "lucide-react";
import benPortrait from "@/assets/ben-walker-portrait.jpg";

export const About = () => {
  const credentials = [
    "Registered with the General Chiropractic Council (GCC)",
    "Fully insured through the British Chiropractic Association (BCA)",
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl blur-xl" />
            <div className="relative bg-secondary rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
              <img
                src={benPortrait}
                alt="Ben Walker - Mobile Chiropractor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                About Ben Walker
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm Ben Walker, a registered chiropractor providing mobile chiropractic 
                care to individuals who value convenience, privacy, and personalised treatment.
              </p>
              <p>
                My approach focuses on understanding how your body moves, what may be 
                contributing to your pain or discomfort, and supporting you with appropriate 
                chiropractic care, advice, and reassurance.
              </p>
              <p>
                By offering a mobile service, I aim to remove common barriers to care such as 
                travel difficulties, busy schedules, pain limiting movement, or discomfort in 
                clinical waiting environments.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">
                Registration & Insurance
              </h3>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
