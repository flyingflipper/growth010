import { Book } from '../types/library';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Growth Mindset',
    author: 'Carol S. Dweck',
    genre: 'Psychology',
    description: 'A comprehensive guide to developing a growth mindset and achieving your full potential.',
    coverImage: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
    available: true
  },
  {
    id: '2',
    title: 'Emotional Intelligence 2.0',
    author: 'Travis Bradberry',
    genre: 'Self-Development',
    description: 'Master emotional intelligence with practical strategies and exercises.',
    coverImage: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
    available: true
  },
  {
    id: '3',
    title: 'Influence Without Authority',
    author: 'Allan R. Cohen',
    genre: 'Business',
    description: 'Learn how to influence and lead effectively without formal authority.',
    coverImage: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
    available: false,
    dueDate: new Date('2024-04-15'),
    borrowerId: 'user1'
  }
];

export const genres = Array.from(new Set(books.map(book => book.genre)));
export const authors = Array.from(new Set(books.map(book => book.author)));

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};