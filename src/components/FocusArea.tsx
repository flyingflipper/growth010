import React from 'react';
import { motion } from 'framer-motion';

interface FocusAreaProps {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
}

const FocusArea: React.FC<FocusAreaProps> = ({
  id,
  title,
  description,
  onClick
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="group w-full text-left bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-blue-300 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      aria-label={`Focus on ${title}: ${description}`}
    >
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.button>
  );
};

export default FocusArea;