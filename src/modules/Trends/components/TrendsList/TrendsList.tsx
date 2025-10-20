import { Translation } from '@/shared/types';
import React from 'react';
import TrendsCard from '../TrendsCard/TrendsCard';
import { trendsAll } from '../../../../../public/trends';

interface TrendsListProps extends Translation {
  locale: string;
}

const TrendsList: React.FC<TrendsListProps> = ({ t, locale }) => {
  const trendsListRaw = t('trends_list', { returnObjects: true }) as {
    name: string;
    desc: string;
    button: string;
    link: string;
  }[];

  return (
    <ul className="flex w-full flex-col sm:flex-row gap-10 items-center justify-center">
      {trendsListRaw.map((trend, ind) => (
        <li key={ind}>
          <TrendsCard
            trend={trend}
            image={trendsAll[ind % trendsAll.length]}
            locale={locale}
          />
        </li>
      ))}
    </ul>
  );
};

export default TrendsList;
