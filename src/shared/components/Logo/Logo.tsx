import Link from 'next/link';
import React from 'react';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <>
      <Link href="#" className="flex flex-col items-center w-fit ">
        <Icon
          iconName="logo"
          className="w-12 h-12 fill-[#F6E6D6]  stroke-[#1D1D1E]"
        />
        <span className={clsx('', className)}>Nail Studio</span>
      </Link>
    </>
  );
};

export default Logo;
