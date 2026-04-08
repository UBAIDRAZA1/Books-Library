export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://books-library-ashy.vercel.app/sitemap.xml',
  }
}
