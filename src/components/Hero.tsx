'use client';

import { BookOpen, FileText, GraduationCap, Users, Star, Clock, ChevronDown, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-navy-950 via-primary-950 to-navy-900 text-white overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-30" />
        
        {/* Floating Particles */}
        {mounted && (
          <>
            <div className="particle" style={{ left: '10%', animationDelay: '0s' }} />
            <div className="particle" style={{ left: '20%', animationDelay: '2s' }} />
            <div className="particle" style={{ left: '30%', animationDelay: '4s' }} />
            <div className="particle" style={{ left: '40%', animationDelay: '1s' }} />
            <div className="particle" style={{ left: '50%', animationDelay: '3s' }} />
            <div className="particle" style={{ left: '60%', animationDelay: '5s' }} />
            <div className="particle" style={{ left: '70%', animationDelay: '2.5s' }} />
            <div className="particle" style={{ left: '80%', animationDelay: '4.5s' }} />
            <div className="particle" style={{ left: '90%', animationDelay: '1.5s' }} />
          </>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-gold-400/20 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-40 left-20 w-32 h-32 border border-primary-400/20 rounded-full animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-sm mb-8 animate-fade-in-down hover:bg-white/10 transition-all cursor-default">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-white/80">Premium Digital Library for Dars-e-Nizami Students</span>
            <Zap className="w-4 h-4 text-gold-400" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="bg-gradient-to-r from-white via-gold-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Urdu Sharah
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-amber-200 to-gold-300 bg-clip-text text-transparent animate-text-shimmer bg-size-200">
              Digital Library
            </span>
          </h1>

          {/* Urdu Title with decorative elements */}
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in-up delay-200">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-gold-400/50 to-gold-400" />
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400/20 blur-2xl" />
              <p 
                className="relative text-4xl md:text-6xl lg:text-7xl text-gold-300" 
                style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.4' }}
                dir="rtl"
              >
                کتب خانہ اردو شروح
              </p>
            </div>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent via-gold-400/50 to-gold-400" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Complete collection of <span className="text-gold-300 font-medium">300+ textbooks</span>, <span className="text-gold-300 font-medium">sharahs</span>, and <span className="text-gold-300 font-medium">past papers</span> for all 8 years of Dars-e-Nizami curriculum
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-400">
          <FeaturePill icon={Star} text="Free Access" color="text-yellow-400" bg="bg-yellow-400/10" border="border-yellow-400/20" />
          <FeaturePill icon={Clock} text="24/7 Available" color="text-blue-400" bg="bg-blue-400/10" border="border-blue-400/20" />
          <FeaturePill icon={BookOpen} text="All 8 Years" color="text-green-400" bg="bg-green-400/10" border="border-green-400/20" />
          <FeaturePill icon={Users} text="5000+ Students" color="text-purple-400" bg="bg-purple-400/10" border="border-purple-400/20" />
          <FeaturePill icon={Shield} text="Verified Content" color="text-emerald-400" bg="bg-emerald-400/10" border="border-emerald-400/20" />
          <FeaturePill icon={Globe} text="Worldwide Access" color="text-cyan-400" bg="bg-cyan-400/10" border="border-cyan-400/20" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 animate-fade-in-up delay-500">
          <StatCard
            icon={BookOpen}
            number="300+"
            label="Books Available"
            urduLabel="کتب"
            color="from-blue-500 to-cyan-500"
            delay="0"
          />
          <StatCard
            icon={FileText}
            number="50+"
            label="Past Papers"
            urduLabel="پرچے"
            color="from-emerald-500 to-green-500"
            delay="100"
          />
          <StatCard
            icon={GraduationCap}
            number="8"
            label="Academic Years"
            urduLabel="سال"
            color="from-violet-500 to-purple-500"
            delay="200"
          />
          <StatCard
            icon={Users}
            number="5000+"
            label="Active Students"
            urduLabel="طلباء"
            color="from-amber-500 to-orange-500"
            delay="300"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-20 animate-fade-in-up delay-600">
          <a
            href="#books"
            className="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Browse Books</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#papers"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <GraduationCap className="w-6 h-6" />
            <span>Past Papers</span>
          </a>
          
          <a
            href="#about"
            className="group bg-white/5 backdrop-blur-md border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-white/10 hover:border-gold-400/50 hover:shadow-gold transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <Users className="w-6 h-6" />
            <span>About Me</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center animate-fade-in-up delay-700">
          <a href="#books" className="inline-flex flex-col items-center text-white/40 hover:text-gold-400 transition-all duration-500 group">
            <span className="text-sm mb-4 font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400/20 blur-xl" />
              <ChevronDown className="relative w-10 h-10 animate-bounce group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Feature Pill Component
function FeaturePill({ icon: Icon, text, color, bg, border }: {
  icon: any;
  text: string;
  color: string;
  bg: string;
  border: string;
}) {
  return (
    <div className={`${bg} backdrop-blur-md border ${border} px-5 py-2.5 rounded-full text-sm flex items-center gap-2.5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default`}>
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="font-medium text-white/90">{text}</span>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon: Icon, number, label, urduLabel, color, delay }: {
  icon: any;
  number: string;
  label: string;
  urduLabel: string;
  color: string;
  delay: string;
}) {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/10 hover:border-gold-400/30 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className="relative">
        {/* Icon */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow`} />
          <div className={`relative h-full w-full bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Number */}
        <p className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-white to-gold-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          {number}
        </p>
        
        {/* Labels */}
        <p className="text-sm text-center text-white/60 mb-1">{label}</p>
        <p className="text-xs text-center text-gold-300/60 urdu-font">{urduLabel}</p>
      </div>
    </div>
  );
}
