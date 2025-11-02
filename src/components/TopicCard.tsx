import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Topic } from '../types/library';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <Link 
      to={`/topics/${topic.id}`}
      className="block bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
        <p className="text-gray-600 mb-4">{topic.description}</p>
        <div className="flex items-center text-blue-600">
          <span className="text-sm font-medium">Explore topic</span>
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;