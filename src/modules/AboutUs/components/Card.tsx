import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface CardProps {
  item: {
    name: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-center text-skin_accent">
        {item.name}
      </h3>

      <p
        className={clsx(
          'base-font-normal text-center overflow-hidden transition-all duration-300',
          expanded ? 'h-auto' : 'h-[68px] text-ellipsis line-clamp-3'
        )}
      >
        {item.description}
      </p>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mx-auto mt-1 flex items-center justify-center gap-1 text-skin_accent hover:opacity-80 transition"
      >
        {expanded ? (
          <>
            <ChevronUp size={18} />
            <span className="text-sm hidden">Згорнути</span>
          </>
        ) : (
          <>
            <ChevronDown size={18} />
            <span className="text-sm hidden">Розгорнути</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Card;
