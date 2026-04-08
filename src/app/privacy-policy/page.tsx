import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Urdu Sharah Library",
  description: "Privacy Policy for Urdu Sharah Digital Library. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Welcome to Urdu Sharah Digital Library ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.`,
      highlight: "https://books-library-ashy.vercel.app",
    },
    {
      id: "information-collect",
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "2.1 Automatically Collected Information",
          content: "When you visit our site, we automatically collect certain information including:",
          list: ["IP address", "Browser type and version", "Device type", "Pages visited", "Time and date of visit", "Referring website"],
        },
        {
          subtitle: "2.2 Google AdSense & Cookies",
          content: "We use Google AdSense to display ads on our website. Google AdSense uses cookies to serve ads based on user's prior visits to our website or other websites. The use of advertising cookies enables Google and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.",
          highlight: "Google Ads Settings",
          highlightUrl: "https://www.google.com/settings/ads",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: "We use the information we collect to:",
      list: [
        "Operate and maintain our website",
        "Improve user experience",
        "Analyze website usage and optimize our services",
        "Display relevant advertisements through Google AdSense",
        "Monitor website performance and security",
        "Comply with legal obligations",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Services",
      content: "We use the following third-party services:",
      list: [
        "Google AdSense: For displaying advertisements (subject to Google's privacy policy)",
        "Google Analytics: For website analytics and traffic monitoring",
        "Vercel: For website hosting and infrastructure",
      ],
      note: "These third-party services have their own privacy policies. We recommend reviewing their privacy practices before using our website.",
    },
    {
      id: "cookies",
      title: "5. Cookies Policy",
      content: "Our website uses cookies to enhance user experience. Cookies are small text files stored on your device. You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features on our website.",
    },
    {
      id: "security",
      title: "6. Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
    },
    {
      id: "gdpr",
      title: "7. Your Rights (GDPR Compliance)",
      content: "If you are a resident of the European Economic Area (EEA), you have the following rights:",
      list: [
        "Right to access your personal data",
        "Right to rectification",
        "Right to erasure ('right to be forgotten')",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing",
      ],
    },
    {
      id: "children",
      title: "8. Children's Privacy",
      content: "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it.",
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated 'Last updated' date.",
    },
    {
      id: "contact",
      title: "10. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at:",
      email: "ubaidraza3657767@gmail.com",
      website: "https://books-library-ashy.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 py-16 px-4 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: <span className="text-gold-300">April 8, 2026</span>
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Accent */}
          <div className="h-1 bg-gradient-to-r from-primary-500 via-gold-400 to-purple-500" />

          <div className="p-8 md:p-12 space-y-10">
            {sections.map((section, idx) => (
              <section key={section.id} className="group">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/30 transition-colors">
                    <span className="text-gold-400 text-sm font-bold">{idx + 1}</span>
                  </div>
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-300 leading-relaxed ml-13">
                    {section.content}
                    {section.highlight && (
                      <a href={section.highlightUrl || section.highlight} className="text-gold-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        {section.highlight}
                      </a>
                    )}
                  </p>
                )}

                {section.subsections?.map((sub, subIdx) => (
                  <div key={subIdx} className="ml-13 mt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">{sub.subtitle}</h3>
                    <p className="text-gray-300 leading-relaxed">{sub.content}</p>
                    {sub.list && (
                      <ul className="space-y-2 ml-4">
                        {sub.list.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub.highlight && (
                      <p className="text-gray-300">
                        You may opt out of personalized advertising by visiting{' '}
                        <a href={sub.highlightUrl} className="text-gold-400 hover:underline" target="_blank" rel="noopener noreferrer">
                          {sub.highlight}
                        </a>
                        .
                      </p>
                    )}
                  </div>
                ))}

                {section.list && (
                  <ul className="space-y-3 ml-13 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold-400 text-xs">{i + 1}</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="ml-13 mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl">
                    <p className="text-gray-300 text-sm">{section.note}</p>
                  </div>
                )}

                {section.email && (
                  <div className="ml-13 mt-6 p-6 bg-gradient-to-r from-gold-400/10 to-amber-500/10 rounded-2xl border border-gold-400/20">
                    <p className="text-gray-300 mb-3"><span className="text-white font-semibold">Email:</span>{' '}
                      <a href={`mailto:${section.email}`} className="text-gold-400 hover:underline">{section.email}</a>
                    </p>
                    <p className="text-gray-300"><span className="text-white font-semibold">Website:</span>{' '}
                      <a href={section.website} className="text-gold-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {section.website}
                      </a>
                    </p>
                  </div>
                )}

                {idx < sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10" />
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-10">
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
