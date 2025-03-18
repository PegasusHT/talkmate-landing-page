// app/terms/page.tsx
import TermsContent from '@/components/terms'
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'Terms and Conditions - TalkMate AI',
  description: 'Read the Terms and Conditions for using the TalkMate AI language learning application.'
};

export default function Terms() {
  return (
    <div>
      <TermsContent />
      <Footer />
    </div>
  );
}