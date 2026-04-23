'use client';

import { useState } from 'react';
import { Book } from '@/lib/data';
import BookCard from './BookCard';
import { ChevronDown, BookOpen, FileText, GraduationCap } from 'lucide-react';

interface YearBookGridProps {
  books: Book[];
  title: string;
  iconName: 'book' | 'file' | 'grad';
  iconBgColor: string;
  lineColor: string;
  buttonColor: string;
}

const iconMap = {
  book: BookOpen,
  file: FileText,
  grad: GraduationCap,
};

export default function YearBookGrid({ books, title, iconName, iconBgColor, lineColor, buttonColor }: YearBookGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[iconName];
  const displayedBooks = isExpanded ? books : books.slice(0, 6);
  const hasMore = books.length > 6;

  const getButtonStyles = (color: string) => {
    switch(color) {
      case 'blue':
        return 'hover:bg-blue-600 text-blue-600 border-blue-600 hover:shadow-blue-500/40 from-blue-600 to-cyan-600';
      case 'emerald':
        return 'hover:bg-emerald-600 text-emerald-600 border-emerald-600 hover:shadow-emerald-500/40 from-emerald-600 to-green-600';
      case 'purple':
        return 'hover:bg-purple-600 text-purple-600 border-purple-600 hover:shadow-purple-500/40 from-purple-600 to-pink-600';
      default:
        return 'hover:bg-blue-600 text-blue-600 border-blue-600 hover:shadow-blue-500/40 from-blue-600 to-cyan-600';
    }
  };

  const getLineStyles = (color: string) => {
    switch(color) {
      case 'blue': return 'via-blue-500 to-blue-500';
      case 'emerald': return 'via-emerald-500 to-emerald-500';
      case 'purple': return 'via-purple-500 to-purple-500';
      default: return 'via-blue-500 to-blue-500';
    }
  };

  const buttonStyles = getButtonStyles(buttonColor);
  const lineStyles = getLineStyles(buttonColor);

  return (
    <section className="animate-fade-in-up">
      <div className="flex items-center gap-4 mb-8">
        <div className={`h-px w-8 md:w-16 bg-gradient-to-r from-transparent ${lineStyles}`} />
        <div className="flex items-center gap-3">
          <div className={`bg-gradient-to-br ${iconBgColor} p-3 rounded-xl`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            {title}
          </h2>
        </div>
        <div className={`h-px w-8 md:w-16 bg-gradient-to-l from-transparent ${lineStyles}`} />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
        {displayedBooks.map((book, index) => (
          <div
            key={book.id}
            className="animate-reveal"
            style={{ animationDelay: `${Math.min(index * 80, 500)}ms`, animationFillMode: 'backwards' }}
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`group relative inline-flex items-center gap-3 bg-white ${buttonStyles} px-10 py-4 rounded-2xl border-2 font-bold transition-all duration-500 shadow-lg active:scale-95 overflow-hidden hover:text-white hover:scale-105 animate-pulse-glow`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${buttonStyles.split(' ').find(s => s.startsWith('from-'))} ${buttonStyles.split(' ').find(s => s.startsWith('to-'))} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <span className="relative z-10 flex items-center gap-2">
              {isExpanded ? 'Show Less' : 'More Books'}
              {isExpanded ? (
                <ChevronDown className="w-5 h-5 transition-transform duration-500 rotate-180" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-transform duration-500 group-hover:translate-y-1" />
              )}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
