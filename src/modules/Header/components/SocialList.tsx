import Icon from '@/shared/components/Icon/Icon';
import { StateProps, Translation } from '@/shared/types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const SocialList: React.FC<StateProps & Translation> = ({
  t,
  className,
  classIcon,
  classListsName,
}) => {
  const socials = t('social', { returnObjects: true }) as {
    url: string;
    icon: string;
  }[];

  return (
    <ul className={clsx('lg:flex  gap-4', className)}>
      {socials?.map((social) => (
        <li
          key={social.url}
          className={clsx('flex items-center justify-center', classListsName)}
        >
          <Link href={social.url} target="_blank" rel="noopener noreferrer">
            <Icon
              iconName={social.icon}
              className={clsx(
                ' fill-secondary_accent  stroke-secondary_accent ',
                classIcon
              )}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
