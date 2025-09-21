'use client';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import React from 'react';
import ListCards from './components/ListCards';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const OurProducts = () => {
  const { t } = useTranslation('products');

  const products = t('products', { returnObjects: true }) as Record<
    string,
    { photo: string; title: string; link: string }
  >;

  const productList = Object.values(products);

  return (
    <Section>
      <Container className="mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative bg-skin_accent w-[380px] h-[460px] lg:col-span-1">
            <ListCards product={productList[0]} />
          </div>

          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {productList.slice(1).map((item, idx) => (
              <div key={idx} className="bg-skin_accent relative h-[200px]">
                <ListCards product={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurProducts;
