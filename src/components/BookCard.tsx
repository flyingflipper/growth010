import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types/library';
import { format } from 'date-fns';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link 
      to={`/library/books/${book.id}`}
      className="block bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
          <span 
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              book.available 
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {book.available ? 'Available' : 'Borrowed'}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{book.description}</p>
        {!book.available && book.dueDate && (
          <p className="text-sm text-gray-500 mt-2">
            Due: {format(book.dueDate, 'MMM d, yyyy')}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BookCard;