import React from 'react';
import FocusArea from './FocusArea';
import BackToTop from './BackToTop';

interface FocusAreaItem {
  id: string;
  title: string;
  description: string;
}

interface FocusAreasProps {
  areas: FocusAreaItem[];
}

const FocusAreas: React.FC<FocusAreasProps> = ({ areas }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      {areas.map((area) => (
        <FocusArea
          key={area.id}
          {...area}
          onClick={() => scrollToSection(area.id)}
        />
      ))}
      <BackToTop />
    </div>
  );
};

export default FocusAreas;