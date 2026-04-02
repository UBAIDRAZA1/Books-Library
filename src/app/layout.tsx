import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urdu Sharah - Kanzul Madaris | Premium Digital Library",
  description: "Complete collection of Urdu Sharah books and past papers for Dars-e-Nizami. Access 300+ books, sharahs, and papers for all 8 years.",
  keywords: ["Urdu Sharah", "Kanzul Madaris", "Dars-e-Nizami", "Islamic Books", "Urdu Books", "Past Papers"],
  authors: [{ name: "Muhammad Ubaid Raza" }],
  openGraph: {
    title: "Urdu Sharah - Premium Digital Library",
    description: "Complete collection of Urdu Sharah books for Dars-e-Nizami students",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-mesh">
        {children}
      </body>
    </html>
  );
}
