import React from 'react';

interface HobbsLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const HobbsLogo: React.FC<HobbsLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const getHeight = () => {
    switch (size) {
      case 'sm':
        return 42;
      case 'md':
        return 56;
      case 'lg':
        return 72;
      case 'xl':
        return 96;
      default:
        return 56;
    }
  };

  const height = getHeight();

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Hobbs - Quality Food for Schools"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        className="transition-transform duration-200 hover:scale-102"
      />
    </div>
  );
};
