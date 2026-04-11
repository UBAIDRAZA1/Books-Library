import Link from 'next/link';
import { BookOpen, Home, Search, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Urdu Sharah Library',
  description: 'The page you are looking for could not be found. Return to Urdu Sharah Digital Library homepage.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Number */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 blur-3xl" />
          <h1 className="relative text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-gold-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">Page Not Found</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Oops! The page you're looking for is missing
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Book Icon */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <BookOpen className="w-20 h-20 text-gold-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl hover:from-primary-500 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-medium hover:-translate-y-0.5"
          >
            <Search className="w-5 h-5" />
            Search Books
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">You might be looking for:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/year/1"
              className="text-gold-400 hover:text-gold-300 text-sm transition-colors"
            >
              Year 1 Books
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/year/2"
              className="text-gold-400 hover:text-gold-300 text-sm transition-colors"
            >
              Year 2 Books
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact-us"
              className="text-gold-400 hover:text-gold-300 text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back Arrow */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
