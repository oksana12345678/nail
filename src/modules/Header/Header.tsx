import React from 'react';
import { Translation } from '@/shared/types';
import socials from './data.json';
import Link from 'next/link';
import Icon from '@/shared/components/Icon/Icon';
import MbMenu from './components/mbMenu';
import NavList from './components/NavList';
import SocialList from './components/SocialList';

const navItems = ['home', 'about', 'pages', 'portfolio', 'contact_us'] as const;

const Header: React.FC<Translation> = ({ t }) => {
  return (
    <header className="absolute w-screen top-12 lg:left-1/2 lg:-translate-x-1/2 z-50 ">
      <nav className="w-screen md:max-w-[768px] lg:max-w-[1140px]  mx-auto flex items-center justify-between py-2 md:px-6 px-4 backdrop-blur-md ">
        <Link href="#" className="flex flex-col items-center  ">
          <Icon
            iconName="logo"
            className="w-12 h-12 fill-[#F6E6D6]  stroke-[#1D1D1E]"
          />
          <span>Nail Studio</span>
        </Link>
        <NavList t={t} navItems={navItems} className="hidden" />
        <SocialList socials={socials} className="hidden " classIcon="w-7 h-7" />
        <Link
          href="#"
          className="base-button_mb base-font-normal sm:base-button uppercase transition-custom animate-pulse bg-main_bg/30"
        >
          {t && t('book_now')}
        </Link>{' '}
        <MbMenu navItems={navItems} socials={socials} />
      </nav>
    </header>
  );
};

export default Header;
