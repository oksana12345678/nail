import clsx from 'clsx';
import React from 'react';

interface SectionTitleProps {
  t: (key: string) => string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ t, className }) => {
  return (
    <h2
      className={clsx(
        'font-semibold lg:text-3xl uppercase sm:text-[20px] text-lg',
        className
      )}
    >
      {t('title')}
    </h2>
  );
};

export default SectionTitle;
