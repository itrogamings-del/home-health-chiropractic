import { Shield, FileCheck, UserCheck, Lock, BookOpen } from "lucide-react";

const legalInfo = [
  { icon: Shield, text: "Registered Chiropractor (GCC)" },
  { icon: FileCheck, text: "Fully insured (BCA)" },
  { icon: BookOpen, text: "All care provided in accordance with GCC Codes of Practice" },
  { icon: UserCheck, text: "Patient consent obtained prior to treatment" },
  { icon: Lock, text: "Patient information handled in line with UK GDPR" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-foreground text-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
              Ben Walker Mobile Chiropractic
            </h2>
            <p className="text-background/70">
              Professional chiropractic care, delivered to your door.
            </p>
          </div>

          <div className="bg-background/10 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="font-serif font-semibold text-lg text-center mb-6">
              Legal & Professional Information
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {legalInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-background/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8 border-t border-background/10">
            <p className="text-background/60 text-sm">
              © {currentYear} Ben Walker Mobile Chiropractic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
