import { allData } from '@/lib/data';
import BookCard from './BookCard';
import { FileText, BookOpen } from 'lucide-react';

export default function SharahSection() {
  const totalSharahs = allData.reduce((acc, year) => acc + year.sharahs.length, 0);

  return (
    <section id="sharah" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary p-3 rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Sharah Collection
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Detailed explanations and commentaries of classical Islamic texts
          </p>
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            <BookOpen className="w-4 h-4" />
            {totalSharahs}+ Sharahs Available
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Message */}
        <div className="text-center py-12 bg-accent rounded-2xl">
          <FileText className="w-16 h-16 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-bold text-secondary mb-2">Sharahs Included in Books</h3>
          <p className="text-gray-600">
            All sharahs are included in the Books section above. Each book comes with its own explanation and commentary.
          </p>
        </div>
      </div>
    </section>
  );
}
