import React, { useState } from 'react';
import { Video } from '../types/library';
import VideoPlayer from './VideoPlayer';

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const sortedVideos = [...videos].sort((a, b) => {
    const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
    return difficultyOrder[a.difficulty || 'beginner'] - difficultyOrder[b.difficulty || 'beginner'];
  });

  return (
    <div className="space-y-8">
      {selectedVideo && (
        <div className="mb-8">
          <VideoPlayer video={selectedVideo} />
          <h3 className="text-lg font-medium text-gray-900 mt-4">{selectedVideo.title}</h3>
          <p className="text-gray-500">{selectedVideo.description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedVideos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`text-left rounded-lg overflow-hidden border-2 transition-colors ${
              selectedVideo?.id === video.id
                ? 'border-blue-500'
                : 'border-transparent hover:border-blue-300'
            }`}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-gray-900 line-clamp-1">{video.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{video.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;