import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Books - Urdu Sharah Digital Library',
  description: 'Search through 300+ Urdu Sharah books, sharahs, and past papers for all 8 years of Dars-e-Nizami curriculum.',
  alternates: {
    canonical: 'https://books-library-ashy.vercel.app/search',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
