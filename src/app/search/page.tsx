'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { getAllBooks } from '@/lib/data';
import { Search, BookOpen, Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';

const allBooks = getAllBooks();

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.urduTitle.includes(searchQuery);
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All', count: allBooks.length },
    { value: 'book', label: 'Books', count: allBooks.filter(b => b.category === 'book').length },
    { value: 'sharah', label: 'Sharahs', count: allBooks.filter(b => b.category === 'sharah').length },
    { value: 'paper', label: 'Papers', count: allBooks.filter(b => b.category === 'paper').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 px-5 py-2.5 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="font-semibold text-primary-700">Discover Resources</span>
            </div>

            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-primary-500 to-primary-500" />
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl" />
                <div className="relative bg-gradient-to-r from-primary-600 to-purple-600 p-4 rounded-2xl">
                  <Search className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
                Search Library
              </h1>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent via-primary-500 to-primary-500" />
            </div>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Find any book, sharah, or past paper from our comprehensive collection
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <Search className="w-6 h-6 text-gray-400 ml-5" />
                <input
                  type="text"
                  placeholder="Search by title (English or Urdu)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-5 py-5 text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-5 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <span className="text-gray-400 hover:text-gray-600 text-sm font-medium">Clear</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.value
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center animate-fade-in-up delay-300">
            <p className="text-slate-600">
              Showing <span className="font-bold text-primary-600">{filteredBooks.length}</span> resources
              {searchQuery && (
                <span> for &quot;<span className="font-medium text-purple-600">{searchQuery}</span>&quot;</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-reveal"
                style={{ animationDelay: `${Math.min(index * 50, 500)}ms`, animationFillMode: 'backwards' }}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full animate-pulse" />
              <BookOpen className="relative w-12 h-12 mx-auto text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or filter category
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
