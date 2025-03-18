//app/page.tsx
import Hero from "@/components/main/hero";
import Features from "@/components/main/features";
import FAQs from "@/components/main/faqs";
import Download from "@/components/main/download";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Features />
      <FAQs />
      <Download />

      <Footer />
    </div>
  );
}