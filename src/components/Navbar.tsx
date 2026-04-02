'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, BookOpen, GraduationCap, Home, ChevronDown, Users, ArrowRight } from 'lucide-react';
import { allData } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['', 'books', 'papers', 'about'];
      for (const section of sections) {
        const element = document.getElementById(section === '' ? 'home' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.year-dropdown') && !target.closest('.year-button')) {
        setShowYearDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const results: any[] = [];
      allData.forEach(year => {
        year.books.forEach(book => {
          if (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.urduTitle.includes(searchQuery)) {
            results.push({ ...book, year: year.year, type: 'book' });
          }
        });
      });
      setSearchResults(results.slice(0, 8));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#books', label: 'Books', icon: BookOpen },
    { href: '/#papers', label: 'Papers', icon: GraduationCap },
    { href: '/#about', label: 'About', icon: Users },
  ];

  const yearLinks = [
    { year: 1, label: '1st', urdu: 'اولیٰ' },
    { year: 2, label: '2nd', urdu: 'ثانیہ' },
    { year: 3, label: '3rd', urdu: 'جالسہ' },
    { year: 4, label: '4th', urdu: 'رابعہ' },
    { year: 5, label: '5th', urdu: 'خامسہ' },
    { year: 6, label: '6th', urdu: 'سادسہ' },
    { year: 7, label: '7th', urdu: 'سابعہ' },
    { year: 8, label: '8th', urdu: 'دورة الحديث' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-primary-500/10 border-b border-white/10'
        : 'bg-transparent'
    }`}>
      {/* Top Bar - Bismillah */}
      <div className={`overflow-hidden transition-all duration-500 ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'}`}>
        <div className="bg-gradient-to-r from-navy-900 via-primary-900 to-navy-900 text-center py-2 border-b border-white/5">
          <h3 className="text-base md:text-lg urdu-font text-gold-300" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
            بِسْمِ اللہِ الرَّحْمٰنِ الرَّحِیْمِ
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/20 group-hover:border-gold-400/50 transition-all">
                <img
                  src="/image/logo.png dawateislami.png"
                  alt="Dawate Islami"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden md:block ml-2">
              <p className="text-xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                Urdu Sharah
              </p>
              <p className="text-xs text-gold-300/80 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
                اردو شروح ڈیجیٹل لائبریری
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center px-5 py-2.5 rounded-xl transition-all duration-300 group ${
                  activeSection === link.href.replace('/#', '').replace('/', '')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {activeSection === link.href.replace('/#', '').replace('/', '') && (
                  <div className="absolute inset-0 bg-white/10 rounded-xl" />
                )}
                <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform text-gold-400" />
                <span className="font-medium">{link.label}</span>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace('/#', '').replace('/', '') ? 'opacity-100' : 'opacity-0'
                }`} />
              </Link>
            ))}
          </div>

          {/* Quick Year Navigation & Search */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Year Dropdown */}
            <div className="relative year-button">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/50 transition-all duration-300 group"
              >
                <GraduationCap className="w-4 h-4 text-gold-400" />
                <span className="font-medium text-white">Years</span>
                <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${showYearDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <div
                className={`year-dropdown absolute right-0 top-full mt-3 bg-navy-900/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary-500/20 py-3 min-w-[280px] border border-white/10 transition-all duration-300 z-50 ${
                  showYearDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="px-4 py-2 border-b border-white/5 mb-2">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Select Academic Year</p>
                </div>
                <div className="grid grid-cols-2 gap-2 px-2">
                  {yearLinks.map((year) => (
                    <a
                      key={year.year}
                      href={`/#year-${year.year}`}
                      className="flex flex-col items-center px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-purple-500/20 transition-all duration-300 group border border-transparent hover:border-gold-400/30"
                    >
                      <span className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        {year.label}
                      </span>
                      <span className="text-xs text-gold-300/60 urdu-font">{year.urdu}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                  className="pl-11 pr-4 py-2.5 w-64 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 bg-white/95 backdrop-blur-md border border-white/20 transition-all duration-300"
                />
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Search Results Dropdown */}
              {showSearch && (
                <div className={`absolute right-0 top-full mt-3 w-[450px] bg-navy-900/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary-500/20 border border-white/10 overflow-hidden transition-all duration-300 z-50 ${
                  searchResults.length > 0 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="px-5 py-3 border-b border-white/5 bg-gradient-to-r from-primary-500/10 to-purple-500/10">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">Search Results</p>
                      <span className="text-xs text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded-full">{searchResults.length} found</span>
                    </div>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="max-h-96 overflow-y-auto py-2">
                      {searchResults.map((result, idx) => (
                        <a
                          key={result.id}
                          href={result.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 px-5 py-3 hover:bg-white/5 transition-colors group"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-2.5 rounded-xl flex-shrink-0">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate">{result.title}</p>
                            <p className="text-xs text-white/50 truncate mt-0.5">{result.urduTitle}</p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded-full font-medium">
                                Year {result.year}
                              </span>
                              <span className="text-xs bg-white/10 text-white/50 px-2 py-0.5 rounded-full capitalize">{result.type}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 transition-colors self-center" />
                        </a>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="px-5 py-12 text-center">
                      <Search className="w-12 h-12 text-white/10 mx-auto mb-3" />
                      <p className="text-sm text-white/50">No books found for "<span className="text-gold-400">{searchQuery}</span>"</p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-2.5 rounded-xl mr-3">
                    <link.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{link.label}</span>
                </Link>
              ))}

              {/* Mobile Year Navigation */}
              <div className="px-4 py-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Academic Years</p>
                <div className="grid grid-cols-4 gap-2">
                  {yearLinks.map((year) => (
                    <a
                      key={year.year}
                      href={`/#year-${year.year}`}
                      onClick={() => setIsOpen(false)}
                      className="bg-gradient-to-br from-white/5 to-white/10 text-white text-center py-3 rounded-xl text-sm hover:from-primary-500/20 hover:to-purple-500/20 border border-white/5 hover:border-gold-400/30 transition-all duration-300"
                    >
                      <span className="block font-bold">{year.label}</span>
                      <span className="block text-xs text-gold-300/60 urdu-font">{year.urdu}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Search */}
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 bg-white border border-gray-200"
                />
                {searchResults.length > 0 && (
                  <div className="mt-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 max-h-64 overflow-y-auto">
                    {searchResults.map((result) => (
                      <a
                        key={result.id}
                        href={result.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-0"
                      >
                        <p className="text-sm font-medium text-white truncate">{result.title}</p>
                        <p className="text-xs text-white/50">Year {result.year}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
