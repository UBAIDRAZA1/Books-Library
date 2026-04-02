'use client';

import { BookOpen, Mail, Phone, MapPin, Users, Award, Code, GraduationCap, ExternalLink, Github, Image as ImageIcon, Heart, Star, Zap, Globe, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 px-5 py-2.5 rounded-full text-sm mb-6">
            <Heart className="w-4 h-4 text-primary-500" />
            <span className="font-semibold text-primary-700">Meet the Developer</span>
            <Star className="w-4 h-4 text-gold-500" />
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-primary-500 to-primary-500" />
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-xl" />
              <div className="relative bg-gradient-to-r from-primary-600 to-purple-600 p-4 rounded-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Me
            </h2>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent via-primary-500 to-primary-500" />
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card - Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 animate-fade-in-left">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500 animate-pulse-slow" />
                
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  
                  {/* Profile Avatar */}
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 border-2 border-dashed border-primary-300 rounded-full animate-spin-slow" />
                    <div className="absolute inset-2 border-2 border-dotted border-purple-300 rounded-full animate-spin-reverse" />
                    
                    {/* Avatar */}
                    <div className="absolute inset-4 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                      UR
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 border-4 border-white rounded-full w-8 h-8 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Muhammad Ubaid Raza</h3>
                    <p className="text-primary-600 font-semibold mb-3">Agentic AI & Web 3.0 Developer</p>
                    <p className="text-sm text-gray-500 italic">&quot;Built with code, powered by faith.&quot;</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <ContactItem icon={MapPin} text="Karachi, Pakistan" color="text-blue-500" />
                    <ContactItem icon={Mail} text="ubaidraza3657767@gmail.com" color="text-red-500" />
                    <ContactItem icon={Phone} text="+92 316-3657767" color="text-green-500" />
                    <ContactItem icon={Globe} text="Available Worldwide" color="text-purple-500" />
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href="https://github.com/UBAIDRAZA1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative w-12 h-12 bg-gray-100 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Github className="relative w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                    </a>
                    <a 
                      href="https://ubaid-raza-portfolio.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative w-12 h-12 bg-primary-100 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ExternalLink className="relative w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
                    <StatBox number="50+" label="Technologies" />
                    <StatBox number="6+" label="Projects" />
                    <StatBox number="8" label="Years Exp" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me Card */}
            <div className="relative group animate-fade-in-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-purple-500 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Assalamu Alaikum! I am <strong className="text-primary-600">Muhammad Ubaid Raza</strong>, a passionate software engineering student with a unique blend of religious and technical knowledge. As a <strong className="text-primary-600">Hafiz of the Holy Quran</strong> and a student of the <strong className="text-primary-600">Last year of Darse Nizami</strong>, I bring a distinctive perspective to technology.
                  </p>
                  <p>
                    My journey combines deep spiritual learning with cutting-edge technology. I specialize in modern web development including <strong className="text-primary-600">Next.js, TypeScript, Three.js, and AI integration</strong>. My mission is to bridge traditional wisdom with innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative group animate-fade-in-up delay-100">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Gallery</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <GalleryImage 
                    src="/image/about1.png" 
                    alt="Ubaid Raza - About"
                    delay="0"
                  />
                  <GalleryImage 
                    src="/image/about2.png" 
                    alt="Ubaid Raza - Portfolio"
                    delay="200"
                  />
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="relative group animate-fade-in-up delay-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Education</h3>
                </div>
                <div className="space-y-4">
                  <TimelineItem 
                    title="BS Software Engineering"
                    institution="Ilma University, Karachi"
                    detail="In Progress • CGPA 3.4"
                    color="from-blue-500 to-cyan-500"
                    icon={GraduationCap}
                  />
                  <TimelineItem 
                    title="Darse Nizami (Alim Course)"
                    institution="Board of Kanzul Madaris"
                    detail="Last Year (In Progress) • 8 years program"
                    color="from-emerald-500 to-green-500"
                    icon={BookOpen}
                  />
                  <TimelineItem 
                    title="Hifzul Quran Ul Karim"
                    institution="Madarsa tul Madina"
                    detail="Completed • Hafiz"
                    color="from-amber-500 to-orange-500"
                    icon={Award}
                  />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="relative group animate-fade-in-up delay-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-500 p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
                </div>
                <div className="space-y-4">
                  <TimelineItem 
                    title="Web Developer"
                    institution="Governor House Karachi"
                    detail="Current • Karachi, Pakistan"
                    color="from-violet-500 to-purple-500"
                    icon={Code}
                  />
                  <TimelineItem 
                    title="Web Developer Intern"
                    institution="Arch Technology"
                    detail="2 months • Karachi, Pakistan"
                    color="from-pink-500 to-rose-500"
                    icon={Zap}
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="relative group animate-fade-in-up delay-400">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <SkillCategory 
                    title="Frontend"
                    color="from-blue-500 to-cyan-500"
                    bgColor="bg-blue-50"
                    textColor="text-blue-700"
                    skills={['Next.js 14', 'React.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion']}
                  />
                  <SkillCategory 
                    title="Backend & AI"
                    color="from-emerald-500 to-green-500"
                    bgColor="bg-emerald-50"
                    textColor="text-emerald-700"
                    skills={['Node.js', 'Python', 'Vercel AI SDK', 'Generative AI', 'GraphQL', 'REST APIs']}
                  />
                  <SkillCategory 
                    title="Web3 & Cloud"
                    color="from-purple-500 to-pink-500"
                    bgColor="bg-purple-50"
                    textColor="text-purple-700"
                    skills={['Web3.js', 'IPFS', 'Docker', 'Vercel', 'Netlify', 'CI/CD']}
                  />
                  <SkillCategory 
                    title="Languages"
                    color="from-amber-500 to-orange-500"
                    bgColor="bg-amber-50"
                    textColor="text-amber-700"
                    skills={['Urdu (Native)', 'English (85%)', 'Arabic (70%)']}
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up delay-500">
              <StatCard 
                number="50+" 
                label="Technologies" 
                gradient="from-blue-600 to-cyan-600"
                icon={Code}
              />
              <StatCard 
                number="6+" 
                label="Projects" 
                gradient="from-purple-600 to-pink-600"
                icon={Award}
              />
              <StatCard 
                number="8" 
                label="Years Learning" 
                gradient="from-amber-600 to-orange-600"
                icon={GraduationCap}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Item Component
function ContactItem({ icon: Icon, text, color }: {
  icon: any;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600 group hover:text-gray-800 transition-colors">
      <div className={`${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <span>{text}</span>
    </div>
  );
}

// Stat Box Component
function StatBox({ number, label }: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
      <p className="text-xl font-bold text-gray-800">{number}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

// Gallery Image Component
function GalleryImage({ src, alt, delay }: {
  src: string;
  alt: string;
  delay: string;
}) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[4/5]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white font-semibold">{alt}</p>
      </div>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ title, institution, detail, color, icon: Icon }: {
  title: string;
  institution: string;
  detail: string;
  color: string;
  icon: any;
}) {
  return (
    <div className="relative group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent" />
      
      <div className="flex items-start gap-4 pl-8 py-2">
        {/* Timeline Dot */}
        <div className={`absolute left-0 top-3 w-3 h-3 bg-gradient-to-br ${color} rounded-full ring-4 ring-white group-hover:scale-125 transition-transform duration-300`} />
        
        {/* Icon */}
        <div className={`bg-gradient-to-br ${color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        {/* Content */}
        <div className="flex-1 bg-gradient-to-r from-gray-50 to-transparent rounded-2xl p-4 group-hover:shadow-md transition-all duration-300">
          <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{institution}</p>
          <p className="text-xs text-gray-400 mt-1">{detail}</p>
        </div>
      </div>
    </div>
  );
}

// Skill Category Component
function SkillCategory({ title, color, bgColor, textColor, skills }: {
  title: string;
  color: string;
  bgColor: string;
  textColor: string;
  skills: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <span className={`w-2.5 h-2.5 bg-gradient-to-br ${color} rounded-full animate-pulse`} />
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={skill} 
            className={`${bgColor} ${textColor} px-3.5 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md`}
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ number, label, gradient, icon: Icon }: {
  number: string;
  label: string;
  gradient: string;
  icon: any;
}) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`relative w-14 h-14 mb-4 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      {/* Number */}
      <p className={`relative text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
        {number}
      </p>
      
      {/* Label */}
      <p className="relative text-sm text-gray-500">{label}</p>
    </div>
  );
}
