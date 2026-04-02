'use client';

import { Book } from '@/lib/data';
import { Download, ExternalLink, BookOpen, FileText, GraduationCap, Star, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'book': return <BookOpen className="w-3 h-3" />;
      case 'sharah': return <FileText className="w-3 h-3" />;
      case 'paper': return <GraduationCap className="w-3 h-3" />;
      default: return <BookOpen className="w-3 h-3" />;
    }
  };

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'book':
        return {
          gradient: 'from-blue-600 via-blue-500 to-cyan-500',
          glow: 'shadow-blue-500/50',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-400'
        };
      case 'sharah':
        return {
          gradient: 'from-emerald-600 via-emerald-500 to-green-500',
          glow: 'shadow-emerald-500/50',
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400'
        };
      case 'paper':
        return {
          gradient: 'from-purple-600 via-purple-500 to-pink-500',
          glow: 'shadow-purple-500/50',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400'
        };
      default:
        return {
          gradient: 'from-gray-600 via-gray-500 to-slate-500',
          glow: 'shadow-gray-500/50',
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/30',
          text: 'text-gray-400'
        };
    }
  };

  const config = getCategoryConfig(book.category);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with 3D effect */}
      <div className={`
        relative bg-white rounded-3xl overflow-hidden
        shadow-lg hover:shadow-2xl ${config.glow}
        transition-all duration-500 ease-out
        hover:-translate-y-3 hover:scale-[1.03]
        border border-gray-100 hover:border-transparent
      `}>
        {/* Animated Border Glow */}
        <div className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500 pointer-events-none
          bg-gradient-to-br ${config.gradient}
        `} style={{ padding: '2px' }}>
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Book Cover Image Section */}
          <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
            {/* Loading State */}
            {!imageLoaded && (
              <div className="absolute inset-0 skeleton animate-pulse" />
            )}
            
            <Image
              src={book.image || 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=500&fit=crop'}
              alt={book.title}
              fill
              className={`object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Gradient Overlay */}
            <div className={`
              absolute inset-0 bg-gradient-to-t 
              from-black/90 via-black/40 to-transparent
              transition-opacity duration-500
              ${isHovered ? 'opacity-100' : 'opacity-70'}
            `} />

            {/* Shine Effect on Hover */}
            <div className={`
              absolute inset-0 opacity-0 group-hover:opacity-100
              transition-opacity duration-700 pointer-events-none
            `} style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
              backgroundSize: '200% 200%'
            }} />

            {/* Category Badge */}
            <div className={`
              absolute top-3 right-3 
              bg-gradient-to-r ${config.gradient}
              text-white px-3 py-1.5 rounded-full
              text-xs font-bold shadow-lg
              flex items-center gap-1.5
              backdrop-blur-sm
              transform transition-all duration-300
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}>
              {getCategoryIcon(book.category)}
              <span className="capitalize hidden sm:inline">{book.category}</span>
              {book.category === 'book' && <Star className="w-3 h-3" />}
              {book.category === 'paper' && <Zap className="w-3 h-3" />}
            </div>

            {/* Year Badge */}
            <div className={`
              absolute top-3 left-3 
              bg-white/95 backdrop-blur-md
              text-primary-700 px-3 py-1.5 rounded-full
              text-xs font-bold shadow-lg
              flex items-center gap-1.5
              transform transition-all duration-300
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}>
              <span className={`w-2 h-2 bg-gradient-to-r ${config.gradient} rounded-full animate-pulse`} />
              Year {book.year}
            </div>

            {/* Quick View Button (appears on hover) */}
            <div className={`
              absolute inset-0 flex items-center justify-center
              transition-all duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className={`
                bg-white/95 backdrop-blur-md rounded-full p-4 shadow-2xl
                transform transition-all duration-500
                ${isHovered ? 'scale-100 translate-y-0' : 'scale-75 translate-y-4'}
              `}>
                <BookOpen className={`w-8 h-8 ${config.text}`} />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center gap-2">
                <span className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-white">
                  PDF
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-white">
                  HD
                </span>
              </div>
            </div>
          </div>

          {/* Book Info Section */}
          <div className="p-4 sm:p-5">
            {/* English Title */}
            <h3 className={`
              text-sm sm:text-base font-bold text-gray-800 mb-2
              line-clamp-2 min-h-[2.75rem]
              group-hover:${config.text} transition-colors duration-300
            `}>
              {book.title}
            </h3>

            {/* Urdu Title */}
            <p 
              className={`
                text-sm text-gray-600 urdu-font mb-4 text-right leading-relaxed
                ${config.text}
              `} 
              dir="rtl" 
              style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}
            >
              {book.urduTitle}
            </p>

            {/* Decorative Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4 group-hover:via-gray-300 transition-colors" />

            {/* Download Button */}
            <a
              href={book.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative overflow-hidden
                flex items-center justify-center gap-2
                bg-gradient-to-r ${config.gradient}
                text-white py-3 rounded-xl
                text-sm font-semibold
                shadow-lg ${config.glow}
                hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.02] active:scale-95
                group/btn
              `}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 
          bg-gradient-to-bl ${config.gradient} 
          opacity-0 group-hover:opacity-20 
          rounded-bl-full transition-opacity duration-500
        `} />
        <div className={`
          absolute bottom-0 left-0 w-16 h-16 
          bg-gradient-to-tr ${config.gradient} 
          opacity-0 group-hover:opacity-10 
          rounded-tr-full transition-opacity duration-500
        `} />
      </div>
    </div>
  );
}
