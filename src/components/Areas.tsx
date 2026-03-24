import { MapPin } from "lucide-react";

const areas = [
  "Beverley",
  "Surrounding areas",
];

export const Areas = () => {
  return (
    <section id="areas" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Areas Covered
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Service Area
            </h2>
            <p className="text-muted-foreground text-lg">
              I currently provide mobile chiropractic care in:
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/50 to-secondary/50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground">
                If you're unsure whether I cover your location,{" "}
                <a href="#register" className="text-primary hover:underline font-medium">
                  please get in touch
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
