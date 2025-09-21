import React from 'react';

interface HighlightProps {
  text: string;
  count?: number;
  className?: string;
}

const HighlightFirstWords: React.FC<HighlightProps> = ({
  text,
  count = 1,
  className,
}) => {
  if (!text) return null;

  const words = text.split(' ');
  const first = words.slice(0, count).join(' ');
  const rest = words.slice(count).join(' ');

  return (
    <p className="base-font-normal">
      <span className={className}>{first}</span> {rest}
    </p>
  );
};

export default HighlightFirstWords;
