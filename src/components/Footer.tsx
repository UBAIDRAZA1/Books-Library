'use client';

import { BookOpen, Mail, Phone, MapPin, Heart, Github, Linkedin, Twitter, Instagram, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Books', href: '/#books' },
    { label: 'Past Papers', href: '/#papers' },
    { label: 'About Me', href: '/#about' },
  ];

  const yearLinks = [
    { label: '1st Year', href: '/#year-1', urdu: 'اولیٰ' },
    { label: '2nd Year', href: '/#year-2', urdu: 'ثانیہ' },
    { label: '3rd Year', href: '/#year-3', urdu: 'جالسہ' },
    { label: '4th Year', href: '/#year-4', urdu: 'رابعہ' },
    { label: '5th Year', href: '/#year-5', urdu: 'خامسہ' },
    { label: '6th Year', href: '/#year-6', urdu: 'سادسہ' },
    { label: '7th Year', href: '/#year-7', urdu: 'سابعہ' },
    { label: '8th Year', href: '/#year-8', urdu: 'ثامنہ' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/UBAIDRAZA1', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-ubaid-raza-21b850300/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Animated Orbs */}
      <div className="absolute top-40 right-20 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Brand & Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="group">
                {/* Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-amber-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                      <BookOpen className="w-8 h-8 text-gold-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                      Urdu Sharah
                    </h3>
                    <p className="text-sm text-gold-300/80 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
                      اردو شروح ڈیجیٹل لائبریری
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                  Complete digital library for Dars-e-Nizami students. Access comprehensive books, sharahs, and past papers for all 8 years of study. Built with love for the pursuit of knowledge.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <social.icon className="relative w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="mt-6">
                  <p className="text-sm text-white/50 mb-3">Stay updated with new additions</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20 transition-all"
                    />
                    <button className="bg-gradient-to-r from-gold-500 to-amber-500 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-2 rounded-xl">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold">Quick Links</h4>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">ubaidraza3657767@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">+92 316-3657767</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Academic Years */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-xl">
                  <GraduationCapIcon />
                </div>
                <h4 className="text-lg font-bold">Academic Years</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {yearLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex flex-col items-center justify-center text-center py-3 px-2 bg-white/5 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-purple-500/20 rounded-xl border border-white/5 hover:border-gold-400/30 transition-all duration-300"
                  >
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">{link.label}</span>
                    <span className="text-xs text-gold-300/50 urdu-font group-hover:text-gold-300 transition-colors">{link.urdu}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-glow my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-white/50">
                &copy; {currentYear} <span className="font-semibold text-gold-400">Kanzul Madaris</span>. All rights reserved.
              </p>
              <p className="text-xs text-white/30 mt-1">
                Developed with ❤️ for students worldwide
              </p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-5 py-3 rounded-full border border-white/10">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by</span>
              <span className="font-semibold text-gold-400">Muhammad Ubaid Raza</span>
            </div>

            {/* Back to Top */}
            <a
              href="#"
              className="group flex items-center gap-2 bg-white/5 hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-500 px-5 py-3 rounded-full border border-white/10 hover:border-gold-400/50 transition-all duration-300"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowRight className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300 rotate-[-90deg]" />
            </a>
          </div>

          {/* Islamic Quote Section */}
          <div className="mt-12 pt-10 border-t border-white/5">
            <div className="text-center">
              {/* Decorative Element */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
                <Sparkles className="w-5 h-5 text-gold-400" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
              </div>

              {/* Arabic/Urdu Quote */}
              <p className="text-2xl md:text-3xl text-gold-300/90 mb-3 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.4' }} dir="rtl">
               اُطلُبوا العِلمَ مِنَ المَهدِ إِلَى اللَّحدِ
              </p>
              
              {/* English Translation */}
              <p className="text-sm text-white/40 mb-4">
                &quot;Seek knowledge from the cradle to the grave&quot;
              </p>
              
              {/* Attribution */}
              <p className="text-xs text-white/30 bg-white/5 inline-block px-4 py-2 rounded-full">
                — Prophet Muhammad ﷺ
              </p>

              {/* Additional Hadith */}
              <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <QuoteCard 
                  quote="Seeking knowledge is obligatory"
                  source="Ibn Majah"
                  gradient="from-blue-500/10 to-cyan-500/10"
                  border="border-blue-500/20"
                />
                <QuoteCard 
                  quote="The best among you are those who learn Quran"
                  source="Bukhari"
                  gradient="from-emerald-500/10 to-green-500/10"
                  border="border-emerald-500/20"
                />
                <QuoteCard 
                  quote="Knowledge is light"
                  source="Islamic Tradition"
                  gradient="from-amber-500/10 to-gold-500/10"
                  border="border-amber-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Graduation Cap Icon Component
function GraduationCapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

// Quote Card Component
function QuoteCard({ quote, source, gradient, border }: {
  quote: string;
  source: string;
  gradient: string;
  border: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${gradient} ${border} border rounded-2xl p-4 hover:scale-105 transition-transform duration-300`}>
      <p className="text-sm text-white/60 italic">&quot;{quote}&quot;</p>
      <p className="text-xs text-white/40 mt-2">— {source}</p>
    </div>
  );
}
