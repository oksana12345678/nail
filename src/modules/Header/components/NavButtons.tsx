import { Translation } from '@/shared/types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface NavButtonsProps extends Translation {
  itemKey: string;
  className?: string;
}

const NavButtons: React.FC<NavButtonsProps> = ({ t, itemKey, className }) => {
  return (
    <div>
      <Link href="#" className={clsx('text-main_button', className)}>
        {t(`nav.${itemKey}`)}
      </Link>
    </div>
  );
};

export default NavButtons;
