import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import PricingPlans from "@/components/PricingPlans";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Show a welcome toast
    setTimeout(() => {
      toast.info("Welcome to My website - Tahmid!", {
        description: "Explore my website.",
      });
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <AboutSection />
        <PricingPlans />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
