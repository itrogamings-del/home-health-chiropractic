import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-chiropractic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-secondary/30" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm animate-fade-in">
                Professional Chiropractic Care
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Chiropractic care that comes{" "}
                <span className="text-primary">to you</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Safe, evidence-informed chiropractic care delivered to your door. 
                No travel. No waiting rooms. Just focused, one-to-one care in the comfort of your own home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="cta" size="lg" asChild>
                <a href="#register">Register Your Interest</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Beverley & Surrounding Local Areas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Flexible Appointments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>GCC Registered</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/40 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden aspect-[4/5]">
              <img
                src={heroImage}
                alt="Mobile chiropractic care in your home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
