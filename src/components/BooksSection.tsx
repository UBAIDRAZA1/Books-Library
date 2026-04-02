'use client';

import { allData } from '@/lib/data';
import BookCard from './BookCard';
import { BookOpen, Library, Sparkles, ArrowRight } from 'lucide-react';

export default function BooksSection() {
  const totalBooks = allData.reduce((acc, year) => acc + year.books.length, 0);

  return (
    <section id="books" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-5 py-2.5 rounded-full text-sm mb-6">
            <Library className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-blue-700">Complete Collection</span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl" />
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Complete Book Collection
            </h2>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Comprehensive textbooks for all 8 years of Dars-e-Nizami curriculum, featuring classical Islamic sciences with detailed explanations
          </p>

          {/* Stats Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
            <BookOpen className="w-5 h-5" />
            <span>{totalBooks}+ Books Available</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Year-wise Books */}
        <div className="space-y-20">
          {allData.map((yearData, yearIndex) => (
            <div 
              key={yearData.year} 
              className="scroll-mt-20" 
              id={`year-${yearData.year}`}
            >
              {/* Year Header Card */}
              <div className="relative group scroll-mt-24" id={`year-${yearData.year}-header`}>
                {/* Subtle Border Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 text-white rounded-2xl p-5 md:p-6 shadow-xl border border-white/5 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-3">
                    <div className="absolute inset-0 islamic-pattern" />
                  </div>

                  {/* Animated Orbs */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl" />

                  <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Year Number */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-amber-500 rounded-xl blur opacity-40 animate-pulse-slow" />
                        <div className="relative bg-gradient-to-br from-gold-400 to-amber-500 rounded-xl p-3 shadow-lg">
                          <span className="text-2xl md:text-3xl font-bold text-white">{yearData.year}</span>
                        </div>
                      </div>

                      {/* Year Names */}
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {yearData.name}
                        </h3>
                        <p className="text-sm md:text-base text-gold-300/90 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.2' }} dir="rtl">
                          {yearData.urduName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Book Count */}
                      <div className="text-center bg-white/5 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10 hover:border-gold-400/40 transition-all group-hover:scale-105">
                        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold-300 to-amber-300 bg-clip-text text-transparent">{yearData.books.length}</p>
                        <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider mt-0.5">Books</p>
                      </div>

                      {/* Quick Nav Arrow */}
                      {yearIndex < allData.length - 1 && (
                        <a
                          href={`#year-${allData[yearIndex + 1].year}-header`}
                          className="hidden md:flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-gold-400/15 rounded-lg border border-white/10 hover:border-gold-400/40 transition-all group-hover:scale-105"
                        >
                          <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-gold-400 transition-colors rotate-90" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Books Grid */}
              {yearData.books.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 mt-8">
                  {yearData.books.map((book, index) => (
                    <div
                      key={book.id}
                      className="animate-reveal"
                      style={{ animationDelay: `${Math.min(index * 80, 800)}ms`, animationFillMode: 'backwards' }}
                    >
                      <BookCard book={book} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl shadow-xl border border-gray-100">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gray-100 rounded-full animate-pulse" />
                    <BookOpen className="relative w-12 h-12 mx-auto text-gray-300" />
                  </div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</p>
                  <p className="text-gray-500">Books for this year will be added shortly</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 px-8 py-4 rounded-2xl">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-medium">All books are free to download • No registration required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
