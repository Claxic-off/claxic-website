import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechnologiesPage from './pages/TechnologiesPage';
import AcademyPage from './pages/AcademyPage';
import MembersPage from './pages/MembersPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Scroll to top on every route change and update document title.
 */
const PAGE_TITLES = {
  '/': 'Claxic — Technology, Innovation & Education',
  '/about': 'About Claxic — Technology & Education',
  '/technologies': 'Claxic Technologies — Web Development & Software',
  '/academy': 'Claxic Academy — Online Courses & Live Classes',
  '/faq': 'FAQ — Claxic Help Centre',
  '/contact': 'Contact Claxic',
  '/privacy': 'Privacy Policy — Claxic',
  '/terms': 'Terms of Use — Claxic',
};

function ScrollAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = PAGE_TITLES[pathname] || 'Claxic';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollAndTitle />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}
