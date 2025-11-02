import React, { useState } from 'react';
import { Article } from '../types/library';
import { format, isValid } from 'date-fns';
import { Clock, ChevronDown } from 'lucide-react';

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedArticles = showAll ? articles : articles.slice(0, 5);

  const formatPublishDate = (date: Date | string | null | undefined): string => {
    if (!date) return 'Date not available';
    
    const dateObj = date instanceof Date ? date : new Date(date);
    return isValid(dateObj) ? format(dateObj, 'MMM d, yyyy') : 'Date not available';
  };

  return (
    <div className="space-y-6">
      {displayedArticles.map((article) => (
        <article
          key={article.id}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            <a href={article.url} className="hover:text-blue-600">
              {article.title}
            </a>
          </h3>
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{article.author}</span>
            <span>•</span>
            <span>{formatPublishDate(article.publishDate)}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {article.readingTime} read
            </span>
          </div>
        </article>
      ))}

      {articles.length > 5 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="flex items-center justify-center w-full py-3 text-blue-600 hover:text-blue-800 font-medium"
        >
          Load More
          <ChevronDown size={16} className="ml-1" />
        </button>
      )}
    </div>
  );
};

export default RelatedArticles;