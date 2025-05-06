
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import ExploreSection from "@/components/Home/ExploreSection";
import CTASection from "@/components/Home/CTASection";
import Footer from "@/components/Home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      <Hero />
      <Features />
      <ExploreSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
