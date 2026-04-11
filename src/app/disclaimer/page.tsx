import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - Urdu Sharah Library",
  description: "Disclaimer for Urdu Sharah Digital Library. Important information about the use of our content and services.",
  alternates: {
    canonical: 'https://books-library-ashy.vercel.app/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface Section {
  id: string;
  title: string;
  content?: string;
  list?: string[];
  note?: string;
  email?: string;
  website?: string;
}

export default function Disclaimer() {
  const sections: Section[] = [
    {
      id: "general",
      title: "1. General Disclaimer",
      content: "The information provided on Urdu Sharah Digital Library (\"the Website\") is for general informational and educational purposes only. All information on the Website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.",
    },
    {
      id: "religious",
      title: "2. Religious Content Disclaimer",
      content: "The content on this website relates to Islamic scholarship, Dars-e-Nizami curriculum, and religious texts. While we strive to present authentic and verified sources, we recommend that users:",
      list: [
        "Verify religious information with qualified Islamic scholars",
        "Consult with knowledgeable religious authorities for specific rulings",
        "Use this website as a supplementary resource, not as the sole source of religious guidance",
      ],
    },
    {
      id: "educational",
      title: "3. Educational Purpose",
      content: "This website is intended for educational and research purposes only. The materials provided should be used for personal study, academic research, and educational advancement. We do not claim that the content constitutes professional religious or legal advice.",
    },
    {
      id: "copyright",
      title: "4. Copyright and Fair Use",
      content: "We make every effort to respect copyright laws and publish content under fair use for educational purposes. If you are a copyright holder and believe your work has been used inappropriately, please contact us and we will address your concern promptly.",
      email: "ubaidraza3657767@gmail.com",
    },
    {
      id: "external",
      title: "5. External Links Disclaimer",
      content: "The Website may contain links to external websites or resources that are not owned or controlled by Urdu Sharah Digital Library. We assume no responsibility for the content, privacy policies, or practices of any external websites. You acknowledge and agree that we shall not be liable for any damage or loss caused by the use of any external website.",
    },
    {
      id: "advertisement",
      title: "6. Advertisement Disclaimer",
      content: "This website uses Google AdSense and other advertising networks to display third-party advertisements. We do not control the advertisements shown and are not responsible for:",
      list: [
        "The content of advertisements",
        "Products or services advertised",
        "Claims made by advertisers",
        "Privacy practices of advertised websites",
      ],
      note: "Users interact with advertisements at their own risk. We recommend exercising caution and conducting your own research before engaging with advertised products or services.",
    },
    {
      id: "professional",
      title: "7. Professional Advice Disclaimer",
      content: "The content on this website does not constitute professional religious, legal, or scholarly advice. For authoritative interpretations and rulings, please consult qualified Islamic scholars, muftis, or recognized religious institutions.",
    },
    {
      id: "errors",
      title: "8. Errors and Omissions",
      content: "While we strive for accuracy, there may be errors or omissions in the content. We are not responsible for any errors or omissions in the information provided. Users are encouraged to report any inaccuracies they find so we can make corrections.",
    },
    {
      id: "liability",
      title: "9. Limitation of Liability",
      content: "Under no circumstances shall Urdu Sharah Digital Library, its creators, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:",
      list: [
        "Your use or inability to use the website",
        "Reliance on any information presented",
        "Unauthorized access to or alteration of your data",
        "Any other matter relating to the website",
      ],
    },
    {
      id: "consent",
      title: "10. Consent",
      content: "By using our website, you hereby consent to our disclaimer and agree to its terms. If you do not agree with any part of this disclaimer, please discontinue use of the website immediately.",
    },
    {
      id: "contact",
      title: "11. Contact Us",
      content: "If you have any questions or concerns regarding this disclaimer, please contact us at:",
      email: "ubaidraza3657767@gmail.com",
      website: "https://books-library-ashy.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 py-16 px-4 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Important Notice</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: <span className="text-gold-300">April 8, 2026</span>
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Accent */}
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-primary-500" />

          <div className="p-8 md:p-12 space-y-10">
            {sections.map((section, idx) => (
              <section key={section.id} className="group">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-gold-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/30 transition-colors">
                    <span className="text-gold-400 text-sm font-bold">{idx + 1}</span>
                  </div>
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-300 leading-relaxed ml-13">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 ml-13 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500/20 to-gold-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold-400 text-xs">{i + 1}</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="ml-13 mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <p className="text-gray-300 text-sm">{section.note}</p>
                  </div>
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
