import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe, Clock, BookOpen, Code, Heart, AlertCircle, Users, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Urdu Sharah Library",
  description: "Get in touch with Urdu Sharah Digital Library team. We're here to help with your questions and feedback.",
  alternates: {
    canonical: 'https://books-library-ashy.vercel.app/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface ContactCard {
  icon: any;
  title: string;
  value: string;
  href: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface Reason {
  icon: any;
  text: string;
  desc: string;
}

export default function ContactUs() {
  const contactCards: ContactCard[] = [
    {
      icon: Mail,
      title: "Email",
      value: "ubaidraza3657767@gmail.com",
      href: "mailto:ubaidraza3657767@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Globe,
      title: "Website",
      value: "books-library-ashy.vercel.app",
      href: "https://books-library-ashy.vercel.app",
      color: "from-primary-500 to-purple-500",
      bgColor: "from-primary-500/10 to-purple-500/10",
      borderColor: "border-primary-500/20",
    },
  ];

  const reasons: Reason[] = [
    { icon: BookOpen, text: "Content Questions", desc: "Questions about books, sharahs, or educational materials" },
    { icon: Code, text: "Technical Support", desc: "Issues with website functionality or accessibility" },
    { icon: AlertCircle, text: "Copyright Concerns", desc: "Copyright infringement claims or permissions" },
    { icon: MessageCircle, text: "Feedback", desc: "Suggestions for improvement or new features" },
    { icon: Heart, text: "Contributions", desc: "Offering to contribute content or resources" },
    { icon: Users, text: "Partnerships", desc: "Collaboration opportunities with educational institutions" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 py-16 px-4 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            We'd love to hear from you
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.bgColor} border ${card.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-gold-300 group-hover:underline">{card.value}</p>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-50 transition-opacity rounded-2xl`} />
            </a>
          ))}
        </div>

        {/* When to Contact Us */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden mb-12">
          <div className="h-1 bg-gradient-to-r from-gold-400 via-primary-500 to-purple-500" />
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-primary-500/20 border border-white/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold-400" />
              </div>
              When to Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-xl bg-white/5 border border-white/5 hover:border-gold-400/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <reason.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{reason.text}</h3>
                      <p className="text-gray-400 text-sm">{reason.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Response Time & Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Response Time */}
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Response Time</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We strive to respond to all inquiries within <span className="text-gold-300 font-semibold">24-48 hours</span> during business days. Please note that response times may be longer during holidays or periods of high volume.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Our Commitment</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                Responding promptly and professionally
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                Protecting your privacy and personal information
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                Addressing legitimate concerns and complaints
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                Continuously improving based on your feedback
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Claims */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-gold-500/20 border border-white/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-gold-400" />
            </div>
            Copyright Claims
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you believe your copyrighted work has been used on our website without proper authorization, please send us a detailed notice including:
          </p>
          <ul className="space-y-3 ml-4">
            {[
              "Identification of the copyrighted work",
              "Location of the alleged infringement on our site",
              "Your contact information",
              "A statement of good faith belief that the use is not authorized",
              "A statement that the information is accurate and you are authorized to act on behalf of the copyright owner",
            ].map((item, idx) => (
              <li key={idx} className="text-gray-300 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500/20 to-gold-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold-400 text-xs">{idx + 1}</span>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="text-center p-8 bg-gradient-to-r from-gold-400/10 to-amber-500/10 rounded-2xl border border-gold-400/20 mb-12">
          <h3 className="text-xl font-bold text-white mb-3">Our Location</h3>
          <p className="text-gray-300">
            Urdu Sharah Digital Library is based in <span className="text-gold-300 font-semibold">Pakistan</span> and serves students, researchers, and Islamic scholars worldwide.
          </p>
          <div className="mt-4 text-4xl">🇵🇰</div>
        </div>

        {/* Thank You Message */}
        <div className="relative p-8 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-gold-500/20 rounded-3xl border border-white/10 overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
            <p className="text-gray-300 leading-relaxed">
              We appreciate your interest in Urdu Sharah Digital Library and look forward to assisting you. Your feedback helps us serve the community better.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl hover:from-primary-500 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
          >
            <span>←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
