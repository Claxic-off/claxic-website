import { useState, useEffect } from 'react';
import { fetchCourses } from '../lib/coursesApi';
import CourseCard from './CourseCard';
import { BookOpen, RefreshCw, AlertCircle } from 'lucide-react';

/**
 * Fetches and renders the course catalogue from Google Sheets.
 * Handles loading, empty, and error states.
 */
export default function CourseCatalogue() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'empty' | 'error' | 'unconfigured'
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_COURSES_API_URL;

  const load = async () => {
    if (!API_URL || API_URL === 'YOUR_PUBLIC_COURSE_CATALOGUE_ENDPOINT') {
      setStatus('unconfigured');
      return;
    }
    setStatus('loading');
    setError(null);
    try {
      const data = await fetchCourses();
      if (data.length === 0) {
        setStatus('empty');
      } else {
        setCourses(data);
        setStatus('success');
      }
    } catch (err) {
      console.error('[CourseCatalogue] Failed to fetch courses:', err);
      setError(err.message);
      setStatus('error');
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4" role="status" aria-live="polite">
        <div className="w-10 h-10 rounded-full border-4 border-[#FF2B12] border-t-transparent animate-spin" aria-hidden="true" />
        <p className="text-sm text-[#555B65]">Loading available courses…</p>
      </div>
    );
  }

  if (status === 'unconfigured') {
    return (
      <div className="mx-auto max-w-5xl rounded-[22px] border border-[#f0c8b1] bg-[#fff5ef] px-6 py-10 text-center md:px-12 md:py-14">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#ff2b12] bg-[#fff7f3] text-[#ff2b12]">
          <BookOpen size={26} strokeWidth={2.1} aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-[1.05rem] font-bold text-[#171717] md:text-[1.2rem]" style={{ fontFamily: 'Roboto Slab, Georgia, serif' }}>
          Course catalogue coming soon
        </h3>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
          Our course catalogue will be available here shortly. In the meantime, feel free to ask about specific courses via WhatsApp.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-[#FFF0EC] border border-red-100 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <AlertCircle size={36} className="text-[#FF2B12] mx-auto mb-3" />
        <h3 className="text-base font-bold text-[#151515] mb-2">Couldn't load courses</h3>
        <p className="text-sm text-[#555B65] mb-4">
          {error || 'There was an issue loading the course catalogue. Please try again.'}
        </p>
        <button
          onClick={load}
          className="inline-flex items-center gap-2 bg-[#FF2B12] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#e02410] transition-colors"
        >
          <RefreshCw size={15} aria-hidden="true" />
          Try Again
        </button>
      </div>
    );
  }

  if (status === 'empty') {
    return (
      <div className="mx-auto max-w-5xl rounded-[22px] border border-[#f0c8b1] bg-[#fff5ef] px-6 py-10 text-center md:px-12 md:py-14">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#ff2b12] bg-[#fff7f3] text-[#ff2b12]">
          <BookOpen size={26} strokeWidth={2.1} aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-[1.05rem] font-bold text-[#171717] md:text-[1.2rem]" style={{ fontFamily: 'Roboto Slab, Georgia, serif' }}>
          No courses published yet
        </h3>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
          We're currently preparing our first courses. Contact us on WhatsApp to find out what's coming soon.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-label={`${courses.length} available courses`}
    >
      {courses.map((course) => (
        <CourseCard key={course.slug || course.title} course={course} />
      ))}
    </div>
  );
}
