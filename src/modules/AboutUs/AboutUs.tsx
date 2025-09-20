'use client';

import Container from '@/shared/components/Container/Container';
import Icon from '@/shared/components/Icon/Icon';
import React from 'react';
import { useTranslation } from 'react-i18next';

const iconsMap = ['nail', 'icon-lakier', 'icon-lakier'];

const AboutUs: React.FC = () => {
  const { t } = useTranslation('about');

  const careListRaw = t('care_list', { returnObjects: true });
  const careList = careListRaw ? Object.values(careListRaw) : [];

  return (
    <Container className="flex flex-col items-center gap-20 " id="about">
      <ul className="flex ">
        {careList.map((item, index) => {
          const iconName = iconsMap[index];
          return (
            <li key={index} className="mb-4 flex flex-col items-center gap-3">
              {iconName && (
                <Icon
                  iconName={iconName}
                  className="fill-skin_accent w-36 h-32 flex-shrink-0"
                />
              )}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-center text-skin_accent">
                  {item.name}
                </h3>
                <p className="base-font-normal text-center">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6">
        <h2 className="text-xl font-bold">{t('title')}</h2>
        <p className="base-font-normal">{t('description')}</p>
        <p className="base-font-normal">{t('description_two')}</p>
        <p className="base-font-normal">{t('description_three')}</p>
      </div>
    </Container>
  );
};

export default AboutUs;
