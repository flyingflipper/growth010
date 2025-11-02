import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTopic } from '../api/topics';
import FocusAreas from '../components/FocusAreas';
import type { Topic } from '../types/library';

const TopicPage: React.FC = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTopic() {
      try {
        if (!topicSlug) throw new Error('Topic slug is required');
        console.log('Loading topic:', topicSlug); // Add logging
        const data = await getTopic(topicSlug);
        
        if (!data) {
          throw new Error(`Topic not found: ${topicSlug}`);
        }
        
        console.log('Topic data:', data); // Add logging
        setTopic(data);
      } catch (err) {
        console.error('Error loading topic:', err);
        setError(err instanceof Error ? err.message : 'Failed to load topic');
      } finally {
        setLoading(false);
      }
    }

    loadTopic();
  }, [topicSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {error || 'Topic not found'}
            </h2>
            <Link
              to="/library"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Library
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const focusAreas = topic.subtopics.map(subtopic => ({
    id: subtopic.id,
    title: subtopic.title,
    description: subtopic.description
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/library"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Library
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{topic.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Focus Areas</h2>
              <FocusAreas areas={focusAreas} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {topic.subtopics.map(subtopic => (
              <div
                key={subtopic.id}
                id={subtopic.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {subtopic.title}
                </h3>
                <p className="text-gray-600 mb-6">{subtopic.description}</p>
                <Link
                  to={`/topics/${topic.slug}/${subtopic.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Learn more
                  <ArrowLeft size={16} className="ml-1 rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;