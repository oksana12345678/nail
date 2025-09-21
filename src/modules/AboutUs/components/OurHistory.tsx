import { Translation } from '@/shared/types';
import Image from 'next/image';
import React from 'react';
import aboutImg from '../../../../public/nail_about.png';
import secondImg from '../../../../public/about_second.png';
import HighlightFirstWords from '@/shared/utils/HighlightFirstWords';

const OurHistory: React.FC<Translation> = ({ t }) => {
  return (
    <div className="min-h-[600px]  bg-gold_ring bg-no-repeat bg-[length:380px] justify-center gap-11 bg-[left_-80px_top_26px] flex flex-col w-full relative sm:gap-0 lg:flex-row sm:bg-[left_-20px_top_160px] lg:bg-[left_-60px_top_160px] lg:bg-[length:486px]">
      <div className="relative w-full h-80  sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px]">
        <Image src={aboutImg} fill alt="about main nail image" />
        <div className="absolute h-80 w-full top-[-190px] left-20 z-40  bg-dots bg-[length:360px] bg-no-repeat sm:left-40 lg:left-72 lg:top-[-80px] lg:bg-[length:460px]" />
        <div className="absolute h-full  inset-0  " />
        <div className="absolute top-1/2 right-2 rounded-t-full overflow-hidden w-36 h-44 sm:w-44  sm:h-52 sm:-right-4 sm:top-[56%]  lg:w-56 lg:h-64 lg:-right-28 lg:top-[52%]">
          <Image src={secondImg} fill alt="about second nail image" />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full  sm:items-end lg:w-1/2">
        <h2 className="text-3xl font-bold text-skin_accent text-start sm:w-72 lg:w-80">
          {t && t('title')}
        </h2>
        <div className="flex flex-col gap-4 sm:w-80">
          <HighlightFirstWords
            text={t ? t('description') : ''}
            count={2}
            className="font-bold text-skin_accent"
          />
          <HighlightFirstWords
            text={t ? t('description_two') : ''}
            count={2}
            className="font-bold text-skin_accent"
          />
          <HighlightFirstWords
            text={t ? t('description_three') : ''}
            count={4}
            className="font-bold text-skin_accent"
          />
        </div>{' '}
      </div>
    </div>
  );
};

export default OurHistory;
