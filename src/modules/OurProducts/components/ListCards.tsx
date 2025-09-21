import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  photo: string;
  title: string;
  link: string;
}

interface ListCardsProps {
  product: Product;
}

const ListCards: React.FC<ListCardsProps> = ({ product }) => {
  return (
    <Link
      href={product.link}
      className="mt-auto  w-full h-full flex   text-white font-medium hover:bg-skin_accent/90 transition"
    >
      <Image
        src={product.photo}
        alt={product.title}
        fill
        className="object-cover"
      />
      <h3 className=" absolute text-lg font-semibold text-center mb-2">
        {product.title}
      </h3>
    </Link>
  );
};

export default ListCards;
