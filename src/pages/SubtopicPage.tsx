import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getSubtopic } from '../api/topics';
import { resolveSubtopicSlug } from '../api/slugs';
import VideoGallery from '../components/VideoGallery';
import InteractiveLearningTools from '../components/InteractiveLearningTools';
import RelatedArticles from '../components/RelatedArticles';
import ReactMarkdown from 'react-markdown';

const SubtopicPage: React.FC = () => {
  const { topicSlug, subtopicSlug } = useParams<{ topicSlug: string; subtopicSlug: string }>();
  const navigate = useNavigate();
  const [subtopic, setSubtopic] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubtopic() {
      try {
        if (!topicSlug || !subtopicSlug) {
          throw new Error('Topic slug and Subtopic slug are required');
        }

        // Use the subtopic slug directly for now to debug the issue
        const canonicalSlug = subtopicSlug;
        
        console.log('Loading subtopic with params:', { topicSlug, subtopicSlug, canonicalSlug });
        
        const data = await getSubtopic(topicSlug, canonicalSlug);
        
        if (!data) {
          throw new Error(`Subtopic not found: ${subtopicSlug}`);
        }

        console.log('Loaded subtopic data:', data);
        setSubtopic(data);
      } catch (err) {
        console.error('Error in loadSubtopic:', err);
        setError(err instanceof Error ? err.message : 'Failed to load subtopic');
      } finally {
        setLoading(false);
      }
    }

    if (topicSlug && subtopicSlug) {
      loadSubtopic();
    } else {
      setLoading(false);
      setError('Invalid URL parameters');
    }
  }, [topicSlug, subtopicSlug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !subtopic) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {error || 'Subtopic not found'}
            </h2>
            <p className="text-gray-600 mb-4">
              The requested subtopic could not be found. Please check the URL and try again.
            </p>
            {topicSlug && (
              <Link
                to={`/topics/${topicSlug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Return to Topic
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to={`/topics/${topicSlug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to {topicSlug ? topicSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Topic'}
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{subtopic.title}</h1>
          <p className="text-xl text-gray-600">{subtopic.description}</p>
        </div>

        {subtopic.videos && subtopic.videos.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Videos</h2>
            <VideoGallery videos={subtopic.videos} />
          </section>
        )}

        {subtopic.interactives && subtopic.interactives.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Learning Tools</h2>
            <InteractiveLearningTools interactives={subtopic.interactives} />
          </section>
        )}

        <section className="mb-16">
          <div className="prose prose-blue max-w-none bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <ReactMarkdown>{subtopic.content}</ReactMarkdown>
          </div>
        </section>

        {subtopic.articles && subtopic.articles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
            <RelatedArticles articles={subtopic.articles} />
          </section>
        )}
      </div>
    </div>
  );
};

export default SubtopicPage;