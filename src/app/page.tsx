import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BooksSection from '@/components/BooksSection';
import PapersSection from '@/components/PapersSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh">
      <Navbar />
      <Hero />
      <BooksSection />
      <PapersSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
