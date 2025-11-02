import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from './Card';
import ProgressBar from './ProgressBar';
import { GrowthArea } from '../types';

interface GrowthAreaCardProps {
  area: GrowthArea;
}

const GrowthAreaCard: React.FC<GrowthAreaCardProps> = ({ area }) => {
  const formattedDate = new Date(area.lastUpdated).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  
  const hasImprovement = area.improvement !== undefined;
  const isPositive = hasImprovement && area.improvement > 0;
  
  return (
    <Card className="h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{area.name}</h3>
        {hasImprovement && (
          <div 
            className={`flex items-center ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isPositive ? (
              <TrendingUp size={16} className="mr-1" />
            ) : (
              <TrendingDown size={16} className="mr-1" />
            )}
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{area.improvement}
            </span>
          </div>
        )}
      </div>
      
      <ProgressBar 
        value={area.score} 
        max={10} 
        showValue 
        color={area.score >= 7 ? 'green' : area.score >= 4 ? 'blue' : 'orange'} 
      />
      
      <p className="text-xs text-gray-500 mt-2">
        Last updated: {formattedDate}
      </p>
    </Card>
  );
};

export default GrowthAreaCard;