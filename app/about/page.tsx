// app/about/page.tsx
import AboutContent from "@/components/about/AboutContent";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'About TalkMate - AI-Powered Language Learning',
  description: 'Learn about TalkMate, the AI-powered language learning app that helps you learn a language 5x faster through natural conversations and personalized feedback.'
};

export default function About() {
  return (
    <div>
      <AboutContent />
      <Footer />
    </div>
  );
}