import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton
        message="Hi Claxic, I have a question and would like to connect."
        label="Chat on WhatsApp"
        variant="primary"
        className="fixed bottom-4 right-4 z-50 shadow-[0_12px_30px_rgba(37,211,102,0.35)] sm:bottom-6 sm:right-6"
      />
    </div>
  );
}
