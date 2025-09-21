import React from 'react';
import NavButtons from './NavButtons';
import { StateProps } from '@/shared/types';
import clsx from 'clsx';

const NavList: React.FC<StateProps> = ({ t, navItems, className }) => {
  return (
    <ul className={clsx('gap-4 lg:flex', className)}>
      {navItems?.map((key) => (
        <li key={key}>
          <NavButtons t={t} itemKey={key} className="lg:base-font-normal" />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
