import React from 'react';
import { trendsAll } from '../../../public/trends';
import Image from 'next/image';
import clsx from 'clsx';

interface GalleryListProps {
  className?: string;
  listItemClass?: string;
}

const GalleryList: React.FC<GalleryListProps> = ({
  className,
  listItemClass,
}) => {
  return (
    <>
      <ul className={clsx('flex flex-wrap ', className)}>
        {trendsAll.map((trend, ind) => (
          <li key={ind} className={clsx(' relative', listItemClass)}>
            <Image src={trend} fill alt="" className="w-full" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryList;
