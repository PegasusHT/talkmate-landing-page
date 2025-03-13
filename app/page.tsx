import Hero from "@/components/main/hero";
import Features from "@/components/main/features";
import FAQs from "@/components/main/faqs";
import Download from "@/components/main/download";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <FAQs />
      <Download />
      
      <Footer />
    </div>
  );
}