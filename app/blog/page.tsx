// app/blog/page.tsx
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'TalkMate Blog - Tips and Insights for Language Learning',
  description: 'Explore our blog for language learning tips, success stories, and insights on how to improve your English speaking skills with TalkMate.'
};

export default function Blog() {
  return (
    <div>
      <BlogContent />
      <Footer />
    </div>
  );
}