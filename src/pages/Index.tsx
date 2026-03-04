import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Areas } from "@/components/Areas";
import { Reviews } from "@/components/Reviews";
import { RegisterForm } from "@/components/RegisterForm";
import { Pricing } from "@/components/Pricing";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Areas />
        <Reviews />
        <RegisterForm />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
