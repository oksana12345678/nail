import Button from '@/shared/components/Button/Button';
import { Translation } from '@/shared/types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TrendsCardProps {
  trend: {
    name: string;
    desc: string;
    button: string;
    link: string;
  };
  image: StaticImageData;
  locale: string;
}

const TrendsCard: React.FC<TrendsCardProps> = ({ trend, image, locale }) => {
  return (
    <div className="flex flex-col gap-4  w-min">
      <div className="w-full sm:w-[280px] h-[320px] sm:h-[420px] lg:w-[480px] lg:h-[580px] relative">
        <Image src={image} fill alt="nail images" />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2 w-full">{trend.name}</h3>
        <p className="text-base text-secondary_white_text">{trend.desc}</p>
      </div>
      <Link href={`${locale}/${trend.link}`} className="uppercase ">
        {trend.button} →
      </Link>
    </div>
  );
};

export default TrendsCard;
