'use client';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import React from 'react';
import ListCards from './components/ListCards';
import { useTranslation } from 'react-i18next';
import foot_care from '../../../public/our_products/limited.png';
import hands from '../../../public/our_products/nail_care.png';
import color from '../../../public/our_products/nail_colors.png';
import tools from '../../../public/our_products/nail_tools.png';
import nail_done from '../../../public/our_products/nail_don.png';
import Button from '@/shared/components/Button/Button';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';

const OurProducts = () => {
  const { t } = useTranslation('products');

  const products = t('products', { returnObjects: true }) as Record<
    string,
    { title: string; link: string }
  >;

  const productList = Object.values(products);

  const images = [nail_done, hands, color, tools, foot_care];

  return (
    <Section>
      <Container className=" flex flex-col gap-20">
        <SectionTitle t={t} className="text-skin_accent text-center" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative bg-skin_accent  w-full h-[200px] sm:h-[400px]  lg:w-1/2 lg:h-[668px] lg:col-span-1 hover:scale-105 transition-transform duration-300">
            <ListCards
              product={productList[0]}
              image={images[0]}
              titleClass="mb-4 sm:mb-8 text-xl text-start sm:text-3xl"
              wrapperTitleClass="bottom-8 px-6 sm:bottom-14  sm:px-14"
              button={
                <Button variant="outline" size="small">
                  {t('book', { ns: 'buttons' })}
                </Button>
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:col-span-2 lg:w-1/2">
            {productList.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="bg-skin_accent relative h-[200px] lg:h-[320px] lg:w-[280px] hover:scale-105 transition-transform duration-300"
              >
                <ListCards
                  product={item}
                  image={images[idx + 1]}
                  titleClass="text-md sm:text-lg"
                  wrapperTitleClass="w-full h-full top-0 flex flex-col justify-center items-center"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurProducts;
