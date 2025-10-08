import React from 'react';
import { trendsAll } from '../../../public/trends';
import Image from 'next/image';

const GalleryList: React.FC = () => {
  console.log(trendsAll);
  return (
    <>
      <ul className="flex flex-wrap gap-8">
        {trendsAll.map((trend, ind) => (
          <li key={ind} className="w-[280px] h-[320px] relative">
            <Image src={trend} fill alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryList;
