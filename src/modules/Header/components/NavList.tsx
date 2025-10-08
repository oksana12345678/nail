import React from 'react';
import NavButtons from './NavButtons';
import { LocaleParams, StateProps, Translation } from '@/shared/types';
import clsx from 'clsx';

const NavList: React.FC<StateProps & Translation & LocaleParams> = ({
  t,
  navItems,
  className,
  locale,
}) => {
  return (
    <ul className={clsx('gap-4 lg:flex', className)}>
      {navItems?.map((key) => (
        <li key={key}>
          <NavButtons
            t={t}
            itemKey={key}
            className="lg:base-font-normal"
            locale={locale}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
