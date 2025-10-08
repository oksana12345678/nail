import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Button from '@/shared/components/Button/Button';
import clsx from 'clsx';

interface Product {
  title: string;
  link: string;
}

interface ListCardsProps {
  product: Product;
  image: StaticImageData;
  button?: React.ReactNode;
  titleClass?: string;
  wrapperTitleClass?: string;
}

const ListCards: React.FC<ListCardsProps> = ({
  product,
  image,
  button,
  titleClass,
  wrapperTitleClass,
}) => {
  return (
    <Link
      href={product.link}
      className="mt-auto  w-max h-full flex   text-white font-medium  transition  "
    >
      <Image src={image} alt={product.title} fill className="object-cover" />
      <div className="bg-black/40  sm:bg-black/20 absolute w-full h-full"></div>
      <div className={clsx('absolute  z-20 ', wrapperTitleClass)}>
        <h3
          className={clsx(
            'font-semibold text-center mb-2 uppercase',
            titleClass
          )}
        >
          {product.title}
        </h3>
        {button}
      </div>
    </Link>
  );
};

export default ListCards;
