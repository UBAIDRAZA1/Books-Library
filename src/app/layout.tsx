import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Urdu Sharah - Kanzul Madaris Digital Library | Dars-e-Nizami Books Online",
    template: "%s | Urdu Sharah Library"
  },
  description: "Pakistan's largest online Urdu Sharah library. Access 300+ Dars-e-Nizami books, sharahs, and past papers for all 8 years. Free download for Kanzul Madaris students.",
  keywords: [
    "Urdu Sharah",
    "Kanzul Madaris",
    "Dars-e-Nizami",
    "Islamic Books Online",
    "Urdu Books PDF",
    "Dars e Nizami Books",
    "Kanzul Madaris Books",
    "Islamic Library Pakistan",
    "Urdu Sharah PDF",
    "Deeni Kitabain",
    "Darja Oola",
    "Darja Thamina",
    "Mazahir Uloom",
    "Islamic Studies Pakistan",
    "Quran Sharah",
    "Hadith Books",
    "Fiqh Books Urdu",
    "Islamic Scholarship"
  ],
  authors: [{ name: "Muhammad Ubaid Raza" }],
  creator: "Urdu Sharah Team",
  publisher: "Urdu Sharah Digital Library",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ur_PK",
    url: "https://books-library-ashy.vercel.app",
    title: "Urdu Sharah - Kanzul Madaris Digital Library",
    description: "Complete collection of Urdu Sharah books for Dars-e-Nizami students. Access 300+ books, sharahs, and past papers for all 8 years.",
    siteName: "Urdu Sharah Library",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urdu Sharah Library - Kanzul Madaris Digital Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urdu Sharah - Kanzul Madaris Digital Library",
    description: "Complete collection of Urdu Sharah books for Dars-e-Nizami students",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "wUL1G1jPSRXJ-lTg0fz-AxNFqFCZxnF9D7VPWyU1gMY",
  },
  alternates: {
    canonical: "https://books-library-ashy.vercel.app",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#11097e" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Urdu Sharah" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics - Replace G-YOUR_ID with your actual ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Google AdSense - Temporarily hardcoded for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1934057767866276"
          crossOrigin="anonymous"
        />
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Urdu Sharah - Kanzul Madaris Digital Library",
              "url": "https://books-library-ashy.vercel.app",
              "description": "Pakistan's largest online Urdu Sharah library for Dars-e-Nizami students",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://books-library-ashy.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Urdu Sharah Digital Library",
                "founder": {
                  "@type": "Person",
                  "name": "Muhammad Ubaid Raza"
                }
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-mesh">
        {children}
      </body>
    </html>
  );
}
