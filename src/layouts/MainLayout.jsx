import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
