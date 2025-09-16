import React from 'react';
import { Translation } from '@/shared/types';
import NavButtons from './components/NavButtons';
import Button from '@/shared/components/Button/Button';
import socials from './data.json';
import Link from 'next/link';
import Icon from '@/shared/components/Icon/Icon';

const navItems = ['home', 'about', 'pages', 'portfolio', 'contact_us'] as const;

const Header: React.FC<Translation> = ({ t }) => {
  return (
    <nav className="w-full sm:max-w-[270px] md:max-w-[470px] lg:max-w-[1140px] mx-auto flex items-center justify-between py-8 px-4 sm:px-0">
      <div className="flex flex-col items-center  ">
        <Icon
          iconName="logo"
          className="w-12 h-12 fill-[#F6E6D6]  stroke-[#1D1D1E]"
        />
        <span>Nail Studio</span>
      </div>
      <ul className="flex gap-4 sm:hidden lg:flex">
        {navItems.map((key) => (
          <li key={key}>
            <NavButtons t={t} itemKey={key} className="base-font-normal" />
          </li>
        ))}
      </ul>
      <ul className="flex gap-4">
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
      <Button className="base-font-normal cursor-pointer uppercase">
        {t('book_now')}
      </Button>
    </nav>
  );
};

export default Header;
