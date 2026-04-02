'use client';

import { paperAaliya01, paperAaliya02, paperAalmiya01, paperAalmiya02 } from '@/lib/data';
import BookCard from './BookCard';
import { GraduationCap, Award, Trophy, Target, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function PapersSection() {
  const allPapers = [...paperAaliya01, ...paperAaliya02, ...paperAalmiya01, ...paperAalmiya02];

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
                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{paperAaliya01.length + paperAaliya02.length}</p>
                    <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">Papers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 mt-8">
            {[...paperAaliya01, ...paperAaliya02].map((paper, index) => (
              <div
                key={paper.id}
                className="animate-reveal"
                style={{ animationDelay: `${Math.min(index * 80, 800)}ms`, animationFillMode: 'backwards' }}
              >
                <BookCard book={paper} />
              </div>
            ))}
          </div>
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
                    <p className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">{paperAalmiya01.length + paperAalmiya02.length}</p>
                    <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">Papers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 mt-8">
            {[...paperAalmiya01, ...paperAalmiya02].map((paper, index) => (
              <div
                key={paper.id}
                className="animate-reveal"
                style={{ animationDelay: `${Math.min(index * 80, 800)}ms`, animationFillMode: 'backwards' }}
              >
                <BookCard book={paper} />
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="mt-16 animate-fade-in-up">
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-gold-500 to-amber-500 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 islamic-pattern" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold">Success Mantra</h3>
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="text-lg md:text-xl text-white/90 mb-4 font-medium" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', lineHeight: '2.4' }} dir="rtl">
                طلب العلم فريضة على كل مسلم
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                &quot;Seeking knowledge is obligatory upon every Muslim.&quot; - Prophet Muhammad ﷺ
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
                  ✨ Consistent Practice
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
                  📚 Regular Revision
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
                  🎯 Focused Study
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
