'use client';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TrendsList from './components/TrendsList/TrendsList';
import { LocaleParams } from '@/shared/types';

const Trends: React.FC<LocaleParams> = ({ locale }) => {
  const { t } = useTranslation('trends');

  return (
    <Section>
      <Container
        className="flex flex-col items-center gap-10 mb-40"
        id="trends"
      >
        <SectionTitle t={t} />
        <TrendsList t={t} locale={locale} />
      </Container>
    </Section>
  );
};

export default Trends;
