'use client';

import { LocaleParams, StateProps, Translation } from '@/shared/types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MbButton from './MbButton';
import NavList from './NavList';
import SocialList from '../../../shared/components/SocialsList/SocialList';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';

const MbMenu: React.FC<StateProps & Translation & LocaleParams> = ({
  navItems,
  t,
  locale,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <MbButton open={handleToggleMenu} isOpen={isOpen} />

      {isOpen && (
        <div className="absolute z-50 w-full h-screen  top-20 right-0 bg-main_bg/90 backdrop-blur-md p-4 rounded-lg flex flex-col pt-16 justify-start items-center gap-10  lg:hidden">
          <LanguageSwitcher />

          <NavList
            t={t}
            locale={locale}
            navItems={navItems}
            className="flex flex-col text-2xl"
          />

          <SocialList
            t={t}
            classIcon="w-10 h-10  "
            className="flex "
            classListsName="border bg-skin_accent border-white rounded-full w-14 h-14 "
          />
        </div>
      )}
    </div>
  );
};

export default MbMenu;
