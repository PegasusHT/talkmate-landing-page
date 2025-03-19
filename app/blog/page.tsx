// app/blog/page.tsx
import { Suspense } from 'react';
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/footer/Footer";

function BlogLoading() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-6 max-w-md mx-auto"></div>
        <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-4 max-w-sm mx-auto"></div>
      </div>
      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-72 md:h-96 w-full bg-blue-100 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-8 bg-gray-200 rounded-md animate-pulse max-w-lg"></div>
              <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'TalkMate Blog - Tips and Insights for Language Learning',
  description: 'Explore our blog for language learning tips, success stories, and insights on how to improve your English speaking skills with TalkMate.',
};

export default function Blog() {
  return (
    <div>
      <Suspense fallback={<BlogLoading />}>
        <BlogContent />
      </Suspense>
      <Footer />
    </div>
  );
}