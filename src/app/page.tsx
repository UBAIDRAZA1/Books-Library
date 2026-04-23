import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BooksSection from '@/components/BooksSection';
import PapersSection from '@/components/PapersSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urdu Sharah Digital Library | Dars-e-Nizami Books',
  description: 'Access complete Dars-e-Nizami curriculum. Browse 300+ Urdu Sharah books, sharahs, and past papers for all 8 years of Kanzul Madaris studies. Created by Muhammad Ubaid Raza Agentic Ai Developer',
  alternates: {
    canonical: 'https://books-library-ashy.vercel.app/',
  },
  openGraph: {
    url: 'https://books-library-ashy.vercel.app/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh">
      <Navbar />
      <Hero />

      {/* Ad After Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AdBanner
          adSlot="1179702999"
          className="text-center"
        />
      </div>

      <BooksSection />

      {/* Ad Between Books and Papers */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AdBanner
          adSlot="5857314607"
          className="text-center"
        />
      </div>

      <PapersSection />
      <AboutSection />

      {/* Ad Before Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AdBanner
          adSlot="6895064108"
          className="text-center"
        />
      </div>

      <Footer />
    </main>
  );
}
