import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Claxic"
        description="The page you requested could not be found."
        canonicalPath="/404"
        robots="noindex, follow"
        ogType="website"
      />
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-8xl font-black text-[#FF2B12] mb-4 leading-none">404</div>
      <h1 className="text-3xl font-black text-[#151515] mb-4">Page not found</h1>
      <p className="text-[#555B65] mb-8 max-w-md leading-relaxed">
        The page you're looking for doesn't exist or may have moved. Let's get you back on track.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          Back to Home
          <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border-2 border-[#151515] hover:border-[#FF2B12] hover:text-[#FF2B12] text-[#151515] font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
    </>
  );
}
