import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BooksSection from '@/components/BooksSection';
import PapersSection from '@/components/PapersSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home - Urdu Sharah Digital Library | Dars-e-Nizami Books',
  description: 'Access complete Dars-e-Nizami curriculum. Browse 300+ Urdu Sharah books, sharahs, and past papers for all 8 years of Kanzul Madaris studies.',
};

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
