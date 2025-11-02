export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  available: boolean;
  dueDate?: Date;
  borrowerId?: string;
  reservations?: Reservation[];
}

export interface Reservation {
  id: string;
  userId: string;
  bookId: string;
  date: Date;
}

export interface BorrowingHistory {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: Date;
  returnDate?: Date;
  dueDate: Date;
  status: 'active' | 'returned' | 'overdue';
}

export interface LibraryFilters {
  search: string;
  genre: string;
  author: string;
  availability: 'all' | 'available' | 'borrowed';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  videos: Video[];
  content: string;
  sources?: Source[];
  interactives?: Interactive[];
  articles?: Article[];
}

export interface Video {
  id: string;
  title: string;
  url: string;
  duration: string;
  thumbnail: string;
  description?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Source {
  name: string;
  url: string;
}

export interface Interactive {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  publishDate: Date;
  excerpt: string;
  readingTime: string;
  tags: string[];
  url: string;
}