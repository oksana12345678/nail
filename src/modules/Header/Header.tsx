'use client';

import React from 'react';
import { LocaleParams } from '@/shared/types';
import Link from 'next/link';
import Icon from '@/shared/components/Icon/Icon';
import MbMenu from './components/mbMenu';
import NavList from './components/NavList';
import SocialList from '../../shared/components/SocialsList/SocialList';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Logo from '@/shared/components/Logo/Logo';
import { NAV_ITEMS } from '@/shared/constants';

const Header: React.FC<LocaleParams> = ({ locale }) => {
  const { t } = useTranslation('header');
  return (
    <header className="absolute w-screen top-12 lg:left-1/2 lg:-translate-x-1/2 z-50 ">
      <nav className="w-screen md:max-w-[768px] lg:max-w-[1280px]  mx-auto flex items-center justify-between py-2 md:px-6 px-4 backdrop-blur-md ">
        <Logo />
        <NavList
          t={t}
          navItems={NAV_ITEMS}
          className="hidden text-main_button gap-4"
          locale={locale}
        />
        <SocialList
          t={t}
          className="hidden black "
          classIcon="w-7 h-7 fill-secondary_accent  stroke-secondary_accent"
        />
        <div className="hidden sm:flex">
          <LanguageSwitcher />
        </div>
        <Link
          href="#"
          className="base-button_mb base-font-normal sm:base-button uppercase transition-custom animate-pulse bg-main_bg/30"
        >
          {t && t('book_now')}
        </Link>{' '}
        <MbMenu navItems={NAV_ITEMS} t={t} locale={locale} />
      </nav>
    </header>
  );
};

export default Header;
