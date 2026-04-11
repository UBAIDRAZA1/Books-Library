import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - Urdu Sharah Library",
  description: "Terms and Conditions for using Urdu Sharah Digital Library. Please read carefully before using our services.",
  alternates: {
    canonical: 'https://books-library-ashy.vercel.app/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface Subsection {
  subtitle: string;
  content: string;
  list?: string[];
}

interface Section {
  id: string;
  title: string;
  content?: string;
  highlight?: string;
  list?: string[];
  subsections?: Subsection[];
  email?: string;
  website?: string;
}

export default function TermsAndConditions() {
  const sections: Section[] = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using Urdu Sharah Digital Library ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.`,
      highlight: "https://books-library-ashy.vercel.app",
    },
    {
      id: "description",
      title: "2. Description of Service",
      content: "Urdu Sharah Digital Library provides free access to Urdu Islamic literature, including sharahs, books, and educational materials related to Dars-e-Nizami curriculum. Our service includes:",
      list: [
        "Online reading and browsing of Islamic texts",
        "Downloadable PDF books (where available)",
        "Search functionality",
        "Educational resources for students",
      ],
    },
    {
      id: "use",
      title: "3. Use of Website",
      subsections: [
        {
          subtitle: "3.1 Permitted Use",
          content: "You may use our website for:",
          list: ["Personal study and research", "Educational purposes", "Non-commercial use"],
        },
        {
          subtitle: "3.2 Prohibited Activities",
          content: "You agree not to:",
          list: [
            "Reproduce, distribute, or exploit content for commercial purposes",
            "Modify, translate, or create derivative works",
            "Remove copyright notices or attributions",
            "Use automated systems to scrape or extract data",
            "Interfere with the proper working of the website",
            "Use the website for any unlawful purposes",
            "Attempt to gain unauthorized access to our systems",
          ],
        },
      ],
    },
    {
      id: "intellectual",
      title: "4. Intellectual Property Rights",
      content: "All content on this website, including but not limited to text, images, graphics, logos, and digital downloads, is the property of Urdu Sharah Digital Library or its content suppliers and is protected by Pakistani and international copyright laws. The compilation and assembly of all content on this site is the exclusive property of Urdu Sharah Digital Library.",
    },
    {
      id: "copyright",
      title: "5. Copyright Disclaimer",
      content: "We respect the intellectual property rights of others. If you believe that any material on our website infringes upon your copyright, please contact us with details of your claim. We will respond promptly to valid copyright infringement claims.",
      email: "ubaidraza3657767@gmail.com",
    },
    {
      id: "advertisements",
      title: "6. Advertisements",
      content: "Our website displays advertisements through Google AdSense and other advertising networks. By using our website, you acknowledge that we may show ads and that we are not responsible for the content or accuracy of advertisements. Clicking on ads may result in charges to you if you make purchases from advertisers.",
    },
    {
      id: "third-party",
      title: "7. Third-Party Links",
      content: "Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be liable for any damage or loss caused by the use of any third-party website.",
    },
    {
      id: "liability",
      title: "8. Limitation of Liability",
      content: "In no event shall Urdu Sharah Digital Library, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of or inability to use the website.",
    },
    {
      id: "accuracy",
      title: "9. Accuracy of Content",
      content: 'While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, reliability, completeness, or suitability of the content on this website. All information is provided "as is" without warranty of any kind.',
    },
    {
      id: "modifications",
      title: "10. Modifications to Terms",
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes your acceptance of the revised terms.",
    },
    {
      id: "governing",
      title: "11. Governing Law",
      content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Pakistan.",
    },
    {
      id: "termination",
      title: "12. Termination",
      content: "We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.",
    },
    {
      id: "contact",
      title: "13. Contact Information",
      content: "For any questions regarding these Terms and Conditions, please contact us at:",
      email: "ubaidraza3657767@gmail.com",
      website: "https://books-library-ashy.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 py-16 px-4 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-purple-300 text-sm font-medium">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: <span className="text-gold-300">April 8, 2026</span>
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Accent */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-primary-400 to-gold-500" />

          <div className="p-8 md:p-12 space-y-10">
            {sections.map((section, idx) => (
              <section key={section.id} className="group">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-primary-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/30 transition-colors">
                    <span className="text-gold-400 text-sm font-bold">{idx + 1}</span>
                  </div>
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-300 leading-relaxed ml-13">
                    {section.content}
                    {section.highlight && (
                      <a href={section.highlight} className="text-gold-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
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
                  </div>
                ))}

                {section.list && (
                  <ul className="space-y-3 ml-13 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-primary-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold-400 text-xs">{i + 1}</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.email && !section.website && (
                  <div className="ml-13 mt-4 p-4 bg-gold-400/10 border border-gold-400/20 rounded-xl">
                    <p className="text-gray-300 text-sm">
                      <span className="text-white font-semibold">Email:</span>{' '}
                      <a href={`mailto:${section.email}`} className="text-gold-400 hover:underline">{section.email}</a>
                    </p>
                  </div>
                )}

                {section.email && section.website && (
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
