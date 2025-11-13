'use client';

import Logo from '@/shared/components/Logo/Logo';
import React from 'react';
import { useTranslation } from 'react-i18next';
import NavList from '../Header/components/NavList';
import { NAV_ITEMS } from '@/shared/constants';
import { LocaleParams } from '@/shared/types';
import SocialList from '@/shared/components/SocialsList/SocialList';
import Contacts from './components/Contacts';
import Container from '@/shared/components/Container/Container';

const Footer: React.FC<LocaleParams> = ({ locale }) => {
  const { t } = useTranslation('header');

  return (
    <footer className="bg-secondary_accent h-[440px] lg:h-[552px] mt-20 lg:mt-32 w-screen">
      <Container className="flex flex-col gap-4">
        <Logo className="text-black" />
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center lg:items-start">
          <NavList
            t={t}
            navItems={NAV_ITEMS}
            className="flex text-black flex-col gap-1"
            locale={locale}
          />
          <Contacts />
          <SocialList
            t={t}
            title={t('socials_title')}
            className="flex-row flex"
            classListsName="bg-main_bg rounded-full w-12 h-12 flex items-center justify-center "
            classIcon="w-8 h-8 fill-secondary_accent  stroke-secondary_accent"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
