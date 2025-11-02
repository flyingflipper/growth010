import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HighlightedTopicProps {
  id: string;
  title: string;
  description: string;
  ariaLabel: string;
}

const HighlightedTopic: React.FC<HighlightedTopicProps> = ({
  id,
  title,
  description,
  ariaLabel
}) => {
  // Convert the ID to a slug format
  const slug = id.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link
      to={`/topics/foundational-mindsets/${slug}`}
      aria-label={ariaLabel}
      className="group relative inline-block"
    >
      <motion.span
        className="relative inline-block text-blue-600 font-medium cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </motion.span>
      <span className="sr-only">{description}</span>
    </Link>
  );
};

export default HighlightedTopic;