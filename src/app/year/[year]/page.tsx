import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { allData } from '@/lib/data';
import { BookOpen, ArrowLeft, FileText, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface YearPageProps {
  params: {
    year: string;
  };
}

export function generateStaticParams() {
  return allData.map((data) => ({
    year: data.year.toString(),
  }));
}

export default function YearPage({ params }: YearPageProps) {
  const yearNum = parseInt(params.year);
  const yearData = allData.find((d) => d.year === yearNum);

  if (!yearData) {
    return (
      <div className="min-h-screen bg-mesh">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <BookOpen className="w-20 h-20 mx-auto text-gray-300 mb-4" />
            <p className="text-2xl font-bold text-gray-600">Year not found</p>
            <Link href="/#books" className="text-primary-600 hover:underline mt-4 inline-block">
              Back to All Books
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const totalItems = yearData.books.length + yearData.sharahs.length + (yearData.papers?.length || 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Navbar />

      {/* Hero Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back Button */}
          <Link
            href="/#books"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group animate-fade-in-left"
          >
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl group-hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">Back to All Books</span>
          </Link>

          {/* Year Header Card */}
          <div className="relative group animate-fade-in-up">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-r from-navy-900 via-primary-900 to-navy-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 islamic-pattern" />
              
              {/* Animated Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
                <div className="flex items-center gap-6">
                  {/* Year Number */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-amber-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow" />
                    <div className="relative bg-gradient-to-br from-gold-400 to-amber-500 rounded-2xl p-5 shadow-xl">
                      <span className="text-5xl font-bold text-white">{yearData.year}</span>
                    </div>
                  </div>
                  
                  {/* Year Names */}
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {yearData.name}
                    </h1>
                    <p className="text-xl text-gold-300/90 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.2' }} dir="rtl">
                      {yearData.urduName}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4">
                  <StatBox 
                    number={yearData.books.length} 
                    label="Books" 
                    icon={BookOpen}
                    color="from-blue-500 to-cyan-500"
                  />
                  <StatBox 
                    number={yearData.sharahs.length} 
                    label="Sharahs" 
                    icon={FileText}
                    color="from-emerald-500 to-green-500"
                  />
                  <StatBox 
                    number={yearData.papers?.length || 0} 
                    label="Papers" 
                    icon={GraduationCap}
                    color="from-purple-500 to-pink-500"
                  />
                </div>
              </div>

              {/* Total Count */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  <p className="text-white/70">
                    Total <span className="font-bold text-gold-300">{totalItems}</span> resources available for this year
                  </p>
                  <Sparkles className="w-5 h-5 text-gold-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Books Section */}
        {yearData.books.length > 0 && (
          <section className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Textbooks
                </h2>
              </div>
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
              {yearData.books.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-reveal"
                  style={{ animationDelay: `${Math.min(index * 80, 500)}ms`, animationFillMode: 'backwards' }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sharahs Section */}
        {yearData.sharahs.length > 0 && (
          <section className="animate-fade-in-up delay-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-emerald-500 to-emerald-500" />
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Sharahs
                </h2>
              </div>
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent via-emerald-500 to-emerald-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
              {yearData.sharahs.map((sharah, index) => (
                <div
                  key={sharah.id}
                  className="animate-reveal"
                  style={{ animationDelay: `${Math.min(index * 80, 500)}ms`, animationFillMode: 'backwards' }}
                >
                  <BookCard book={sharah} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Papers Section */}
        {yearData.papers && yearData.papers.length > 0 && (
          <section className="animate-fade-in-up delay-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Past Papers
                </h2>
              </div>
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent via-purple-500 to-purple-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
              {yearData.papers.map((paper, index) => (
                <div
                  key={paper.id}
                  className="animate-reveal"
                  style={{ animationDelay: `${Math.min(index * 80, 500)}ms`, animationFillMode: 'backwards' }}
                >
                  <BookCard book={paper} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}

// Stat Box Component
function StatBox({ number, label, icon: Icon, color }: {
  number: number;
  label: string;
  icon: any;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className={`relative w-14 h-14 mx-auto mb-2 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <p className="text-2xl font-bold text-white">{number}</p>
      <p className="text-xs text-white/60 uppercase tracking-wider">{label}</p>
    </div>
  );
}
