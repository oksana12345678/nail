import React from 'react';
import { Translation } from '@/shared/types';
import NavButtons from './components/NavButtons';
import socials from './data.json';
import Link from 'next/link';
import Icon from '@/shared/components/Icon/Icon';

const navItems = ['home', 'about', 'pages', 'portfolio', 'contact_us'] as const;

const Header: React.FC<Translation> = ({ t }) => {
  return (
    <header className="absolute w-screen top-12 lg:left-1/2 lg:-translate-x-1/2 z-50 ">
      <nav className="w-screen md:max-w-[768px] lg:max-w-[1140px]  mx-auto flex items-center justify-between py-2 md:px-6 px-4 backdrop-blur-md ">
        <div className="flex flex-col items-center  ">
          <Icon
            iconName="logo"
            className="w-12 h-12 fill-[#F6E6D6]  stroke-[#1D1D1E]"
          />
          <span>Nail Studio</span>
        </div>
        <ul className="gap-4 hidden lg:flex">
          {navItems.map((key) => (
            <li key={key}>
              <NavButtons t={t} itemKey={key} className="base-font-normal" />
            </li>
          ))}
        </ul>
        <ul className="lg:flex hidden gap-4">
          {socials.map((social) => (
            <li key={social.url}>
              <Link href={social.url}>
                <Icon
                  iconName={social.icon}
                  className="w-7 h-7 fill-[#F6E6D6]  stroke-[#1D1D1E] "
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className="base-font-normal base-button uppercase transition-custom animate-pulse"
        >
          {t('book_now')}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
