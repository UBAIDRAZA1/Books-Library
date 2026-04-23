'use client';

import { useState } from 'react';
import { paperAaliya01, paperAaliya02, paperAalmiya01, paperAalmiya02 } from '@/lib/data';
import BookCard from './BookCard';
import { GraduationCap, Award, Trophy, Target, Clock, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

export default function PapersSection() {
  const allPapers = [...paperAaliya01, ...paperAaliya02, ...paperAalmiya01, ...paperAalmiya02];
  const aaliyaPapers = [...paperAaliya01, ...paperAaliya02];
  const aalmiyaPapers = [...paperAalmiya01, ...paperAalmiya02];

  const [isAaliyaExpanded, setIsAaliyaExpanded] = useState(false);
  const [isAalmiyaExpanded, setIsAalmiyaExpanded] = useState(false);

  const displayedAaliya = isAaliyaExpanded ? aaliyaPapers : aaliyaPapers.slice(0, 6);
  const displayedAalmiya = isAalmiyaExpanded ? aalmiyaPapers : aalmiyaPapers.slice(0, 6);

  return (
    <section id="papers" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-5 py-2.5 rounded-full text-sm mb-6">
            <Trophy className="w-4 h-4 text-purple-500" />
            <span className="font-semibold text-purple-700">Exam Preparation</span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Past Papers & Exams
            </h2>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent via-purple-500 to-purple-500" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Previous years&apos; examination papers for Aaliya and Aalmiya programs to help you prepare effectively for your exams
          </p>

          {/* Stats Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30">
            <Award className="w-5 h-5" />
            <span>{allPapers.length}+ Past Papers Available</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Tips Banner */}
        <div className="mb-16 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
            <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 islamic-pattern" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                  <Target className="w-8 h-8 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Exam Preparation Tips</h3>
                  <p className="text-white/70">Maximize your success with these proven strategies</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <TipCard 
                  icon={Clock}
                  title="Time Management"
                  description="Practice with timed sessions"
                  color="from-blue-500 to-cyan-500"
                />
                <TipCard 
                  icon={Target}
                  title="Focus Areas"
                  description="Identify important topics"
                  color="from-emerald-500 to-green-500"
                />
                <TipCard 
                  icon={Award}
                  title="Past Patterns"
                  description="Understand paper structure"
                  color="from-amber-500 to-orange-500"
                />
                <TipCard 
                  icon={Trophy}
                  title="Self Assessment"
                  description="Track your progress"
                  color="from-purple-500 to-pink-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Aaliya Papers Section */}
        <div className="mb-20 scroll-mt-20" id="aaliya-papers">
          <div className="relative group animate-fade-in-up">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-r from-blue-900 via-cyan-900 to-emerald-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 islamic-pattern" />
              
              {/* Animated Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow" />
                    <div className="relative bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-4 shadow-xl">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Names */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Aaliya Papers (سال اول و دوم)
                    </h3>
                    <p className="text-lg text-cyan-300/90 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.2' }} dir="rtl">
                      عالیہ سال اول و دوم کے پرچے
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 hover:border-cyan-400/50 transition-all group-hover:scale-105">
                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{aaliyaPapers.length}</p>
                    <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">Papers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 mt-8">
            {displayedAaliya.map((paper, index) => (
              <div
                key={paper.id}
                className="animate-reveal"
                style={{ animationDelay: `${Math.min(index * 80, 800)}ms`, animationFillMode: 'backwards' }}
              >
                <BookCard book={paper} />
              </div>
            ))}
          </div>

          {/* More Papers Button */}
          {aaliyaPapers.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsAaliyaExpanded(!isAaliyaExpanded)}
                className="group relative inline-flex items-center gap-3 bg-white hover:bg-blue-600 text-blue-600 hover:text-white px-10 py-4 rounded-2xl border-2 border-blue-600 font-bold transition-all duration-500 shadow-lg hover:shadow-blue-500/40 active:scale-95 overflow-hidden hover:scale-105 animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {isAaliyaExpanded ? 'Show Less' : 'More Books'}
                  {isAaliyaExpanded ? (
                    <ChevronDown className="w-5 h-5 transition-transform duration-500 rotate-180" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform duration-500 group-hover:translate-y-1" />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Aalmiya Papers Section */}
        <div className="mb-16 scroll-mt-20" id="aalmiya-papers">
          <div className="relative group animate-fade-in-up">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 islamic-pattern" />
              
              {/* Animated Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow" />
                    <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Names */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Aalmiya Papers (سال اول و دوم)
                    </h3>
                    <p className="text-lg text-green-300/90 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.2' }} dir="rtl">
                      عالمیہ سال اول و دوم کے پرچے
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 hover:border-green-400/50 transition-all group-hover:scale-105">
                    <p className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">{aalmiyaPapers.length}</p>
                    <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">Papers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 mt-8">
            {displayedAalmiya.map((paper, index) => (
              <div
                key={paper.id}
                className="animate-reveal"
                style={{ animationDelay: `${Math.min(index * 80, 800)}ms`, animationFillMode: 'backwards' }}
              >
                <BookCard book={paper} />
              </div>
            ))}
          </div>

          {/* More Papers Button */}
          {aalmiyaPapers.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsAalmiyaExpanded(!isAalmiyaExpanded)}
                className="group relative inline-flex items-center gap-3 bg-white hover:bg-emerald-600 text-emerald-600 hover:text-white px-10 py-4 rounded-2xl border-2 border-emerald-600 font-bold transition-all duration-500 shadow-lg hover:shadow-emerald-500/40 active:scale-95 overflow-hidden hover:scale-105 animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {isAalmiyaExpanded ? 'Show Less' : 'More Books'}
                  {isAalmiyaExpanded ? (
                    <ChevronDown className="w-5 h-5 transition-transform duration-500 rotate-180" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform duration-500 group-hover:translate-y-1" />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Motivational Banner */}
...
        {/* Motivational Banner */}
        <div className="mt-16 animate-fade-in-up">
          <div className="relative group">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-gold-500/40 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center border border-gold-500/30 shadow-2xl">
              {/* Animated Background Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
              
              {/* Islamic Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] islamic-pattern mix-blend-overlay" />
              
              <div className="relative z-10">
                {/* Header Icon & Title */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-gold-400" />
                  <div className="bg-gold-500/10 backdrop-blur-md p-3 rounded-2xl border border-gold-500/20">
                    <Sparkles className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Success 
                  </h3>
                  <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-gold-400" />
                </div>

                {/* Arabic Text */}
                <div className="mb-8">
                  <p className="text-4xl md:text-5xl lg:text-6xl text-white font-urdu mb-6 leading-[1.6]" style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }} dir="rtl">
                    طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِمٍ
                  </p>
                  
                  {/* English Translation */}
                  <div className="max-w-3xl mx-auto py-6 px-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-inner">
                    <p className="text-xl md:text-2xl text-gold-100 font-medium italic mb-2">
                      &quot;Seeking knowledge is obligatory upon every Muslim.&quot;
                    </p>
                    <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm">
                      — Prophet Muhammad ﷺ
                    </p>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  <MantraCard 
                    emoji="✨"
                    text="Consistent Practice"
                    bgColor="bg-blue-500/10"
                    borderColor="border-blue-500/30"
                    textColor="text-blue-300"
                  />
                  <MantraCard 
                    emoji="📚"
                    text="Regular Revision"
                    bgColor="bg-emerald-500/10"
                    borderColor="border-emerald-500/30"
                    textColor="text-emerald-300"
                  />
                  <MantraCard 
                    emoji="🎯"
                    text="Focused Study"
                    bgColor="bg-purple-500/10"
                    borderColor="border-purple-500/30"
                    textColor="text-purple-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mantra Card Component
function MantraCard({ emoji, text, bgColor, borderColor, textColor }: {
  emoji: string;
  text: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <div className={`relative group/card overflow-hidden ${bgColor} ${borderColor} border-2 backdrop-blur-md px-6 py-5 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1`}>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
      <span className="text-3xl block mb-3 group-hover/card:scale-110 transition-transform duration-500">{emoji}</span>
      <span className={`text-lg font-bold ${textColor} tracking-wide`}>{text}</span>
    </div>
  );
}

// Tip Card Component
function TipCard({ icon: Icon, title, description, color }: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-3">
        <div className={`bg-gradient-to-br ${color} p-2.5 rounded-xl`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h4 className="font-bold text-white">{title}</h4>
      </div>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  );
}
