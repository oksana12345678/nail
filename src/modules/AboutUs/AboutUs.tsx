'use client';

import Container from '@/shared/components/Container/Container';
import Icon from '@/shared/components/Icon/Icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesList from './components/ServicesList';
import OurHistory from './components/OurHistory';
import Section from '../../shared/components/Section/Section';

const AboutUs: React.FC = () => {
  const { t } = useTranslation('about');

  const careListRaw = t('care_list', { returnObjects: true });
  const careList = careListRaw ? Object.values(careListRaw) : [];
  return (
    <Section>
      <Container className="flex flex-col items-center gap-20  " id="about">
        <ServicesList careList={careList} />
        <OurHistory t={t} />
      </Container>
    </Section>
  );
};

export default AboutUs;
