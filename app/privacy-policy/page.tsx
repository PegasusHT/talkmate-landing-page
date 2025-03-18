// app/privacy/page.tsx
import PrivacyContent from '@/components/privacy/PrivacyContent'
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'Contact TalkMate - Get in Touch with Our Team',
  description: 'Contact the TalkMate team for support, partnership inquiries, or feedback about our AI-powered language learning app.'
};

export default function Contact() {
  return (
    <div>
      <PrivacyContent />
      <Footer />
    </div>
  );
}