'use client';

import Container from '@/shared/components/Container/Container';
import Section from '@/shared/components/Section/Section';
import Image from 'next/image';
import React from 'react';

import nail from '../../../public/nails_done.png';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ContactUs = () => {
  const { t } = useTranslation('contact');

  return (
    <Section>
      <Container id="contact">
        <div className="flex gap-14 items-center justify-center  flex-col lg:flex-row">
          <div className=" w-[280px] h-[180px] sm:w-[520px] sm:h-[300px] relative  lg:block ">
            <Image src={nail} fill alt="nails" className="w-full" />
          </div>
          <div className="flex flex-col items-center">
            <SectionTitle t={t} className="text-3xl font-semibold mb-4" />
            <p className="text-skin_accent">{t('desc')}</p>
            <Link href={`tel:${t('phone')}`}>{t('phone')}</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUs;
