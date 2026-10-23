import { BookOpen, Clock, Monitor, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_CLAXIC_WHATSAPP || '';

function buildWhatsAppUrl(courseTitle) {
  const msg = `Hi Claxic Academy, I'm interested in the "${courseTitle}" course. Please share more details.`;
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    : '#contact';
}

const LEVEL_COLOURS = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
};

/**
 * Course card component.
 *
 * Props: course object from Google Sheets:
 *  { slug, title, category, level, description, duration, format, price, status, coverImage }
 */
export default function CourseCard({ course }) {
  const {
    title,
    category,
    level,
    description,
    duration,
    format,
    price,
  } = course;

  const levelColor = LEVEL_COLOURS[level] || 'bg-gray-100 text-gray-600';
  const whatsappUrl = buildWhatsAppUrl(title);

  return (
    <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Header strip */}
      <div className="bg-[#FFF0EC] px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            {category && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FF2B12] mb-1.5">
                {category}
              </span>
            )}
            <h3 className="text-base font-bold text-[#151515] leading-snug">{title}</h3>
          </div>
          {level && (
            <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${levelColor}`}>
              {level}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col flex-1 gap-4">
        {description && (
          <p className="text-sm text-[#555B65] leading-relaxed">{description}</p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-[#555B65]">
          {duration && (
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" className="text-[#FF2B12]" />
              {duration}
            </span>
          )}
          {format && (
            <span className="flex items-center gap-1.5">
              <Monitor size={13} aria-hidden="true" className="text-[#FF2B12]" />
              {format}
            </span>
          )}
          {price && (
            <span className="flex items-center gap-1.5">
              <BookOpen size={13} aria-hidden="true" className="text-[#FF2B12]" />
              {price}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-200 hover:shadow-md active:scale-95"
          >
            <MessageCircle size={15} strokeWidth={2.5} aria-hidden="true" />
            Enquire About This Course
          </a>
        </div>
      </div>
    </article>
  );
}
