import { LocaleParams, Translation } from '@/shared/types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface NavButtonsProps extends Translation {
  itemKey: string;
  className?: string;
}

const NavButtons: React.FC<NavButtonsProps & LocaleParams> = ({
  t,
  itemKey,
  className,
  locale,
}) => {
  const title = t ? t(`nav.${itemKey}.title`) : '';
  const link = t ? t(`nav.${itemKey}.link`) : '#';

  return (
    <Link
      href={`${locale}${link}`}
      className={clsx('text-main_button', className)}
    >
      {title}
    </Link>
  );
};

export default NavButtons;
