import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-navy-950 via-navy-950 to-slate-950 border-t border-white/5">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-500 rounded-xl blur-md opacity-50" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-2 border border-white/20">
                  <img
                    src="/image/logo.png dawateislami.png"
                    alt="Logo"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                  Urdu Sharah
                </h3>
                <p className="text-xs text-gold-300/70 urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
                  اردو شروح ڈیجیٹل لائبریری
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pakistan&apos;s premier digital library for Urdu Islamic literature. Access 300+ Dars-e-Nizami books and educational resources.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                <span className="text-gold-400 text-xs font-bold">PK</span>
              </div>
              <span className="text-xs text-gray-500">Made in Pakistan 🇵🇰</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-gold-400 to-amber-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/#books', label: 'Browse Books' },
                { href: '/#papers', label: 'Past Papers' },
                { href: '/#about', label: 'About Us' },
                { href: '/search', label: 'Search' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-300 transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">
                      <span className="text-gold-400 mr-2">›</span>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Years */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary-400 to-purple-500 rounded-full" />
              Academic Years
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { year: 1, urdu: 'اولیٰ' },
                { year: 2, urdu: 'ثانیہ' },
                { year: 3, urdu: 'جالسہ' },
                { year: 4, urdu: 'رابعہ' },
                { year: 5, urdu: 'خامسہ' },
                { year: 6, urdu: 'سادسہ' },
                { year: 7, urdu: 'سابعہ' },
                { year: 8, urdu: 'دورة الحديث' },
              ].map((item) => (
                <a
                  key={item.year}
                  href={`/#year-${item.year}`}
                  className="text-gray-400 hover:text-gold-300 transition-all duration-300 text-xs px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-gold-400/20 text-center"
                >
                  <span className="block font-medium">{item.year} Year</span>
                  <span className="block text-gold-300/60 urdu-font mt-0.5" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
                    {item.urdu}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-emerald-400 to-green-500 rounded-full" />
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-and-conditions', label: 'Terms & Conditions' },
                { href: '/disclaimer', label: 'Disclaimer' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-300 transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">
                      <span className="text-gold-400 mr-2">›</span>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} <span className="text-gray-400">Urdu Sharah Digital Library</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                Created by{' '}
                <span className="text-gold-300 font-medium">Muhammad Ubaid Raza</span>
              </p>
              <div className="h-4 w-px bg-white/10" />
              <p className="text-gray-500 text-xs urdu-font" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
               Agentic Ai Developer 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </footer>
  );
}
