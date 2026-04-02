# Urdu Sharah - Kanzul Madaris Digital Library

A modern, responsive Next.js website for Kanzul Madaris students to access textbooks, sharahs (commentaries), and past papers for all 8 years of Dars-e-Nizami curriculum.

## 🌟 Features

- **Modern UI/UX** - Built with Next.js 14 and Tailwind CSS
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **8 Years Coverage** - From Darja Oola to Darja Thamina
- **Three Categories**:
  - 📚 Textbooks
  - 📖 Sharahs (Explanations)
  - 📝 Past Papers
- **Fast Loading** - Optimized images and code splitting
- **SEO Optimized** - Better search engine visibility
- **Google Drive Integration** - Direct download/view links

## 📁 Project Structure

```
urdu-sharah-new/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   ├── year/[year]/     # Dynamic year pages
│   │   └── search/          # Search page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── BookCard.tsx
│   │   ├── BooksSection.tsx
│   │   ├── SharahSection.tsx
│   │   ├── PapersSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts          # All books data
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project folder:
```bash
cd urdu-sharah-new
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Books

Edit `src/lib/data.ts` to add or modify books:

```typescript
{
  year: 1,
  name: 'Darja Oola (1st Year)',
  urduName: 'درسہ اولیٰ',
  books: [
    {
      id: '1-1',
      title: 'Book Name',
      urduTitle: 'اردو نام',
      year: 1,
      category: 'book',
      driveLink: 'https://drive.google.com/...',
      image: 'https://...'
    }
  ]
}
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#11097e',    // Main blue color
  secondary: '#0b0651',  // Dark blue
  accent: '#f5e6e6',     // Light background
}
```

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section |
| Books | `/#books` | All textbooks by year |
| Sharah | `/#sharah` | All sharahs by year |
| Papers | `/#papers` | Past papers collection |
| Year Detail | `/year/[1-8]` | Individual year page |
| Search | `/search` | Search all resources |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload `.next` folder to Netlify
3. Configure build settings

## 📊 Data Structure

The website includes data for:
- **Year 1-4**: Complete data from existing website
- **Year 5-8**: Placeholder data (update with actual books)

## 🔧 Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash (auto-selected by category)
- **Hosting**: Vercel (recommended)

## 📝 To-Do

- [ ] Add actual Google Drive links for years 5-8
- [ ] Implement real search functionality
- [ ] Add filter by category
- [ ] Add Urdu font support
- [ ] Add dark mode
- [ ] Add bookmark/favorite feature
- [ ] Add download counter

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is created for educational purposes for Kanzul Madaris students.

## 👨‍💻 Developer

Created for Urdu Sharah students to access educational resources easily.

## 📞 Support

For issues or questions, please contact the development team.

---

**May Allah bless all students seeking knowledge** 🤲
"# Books-Library" 
"# Books-Library" 
"# Books-Library" 
"# Books-Library" 
