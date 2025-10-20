import Link from 'next/link';
import React from 'react';

const AccentWindow = () => {
  return (
    <div className="bg-main_bg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[220px]  h-[180px] sm:w-[440px] sm:h-[240px] flex items-center justify-center">
      <Link
        href="https://www.instagram.com"
        target="_blank"
        className="text-skin_accent font-semibold text-2xl sm:text-4xl uppercase hover:text-secondary_accent transition-custom"
      >
        Follow Us
      </Link>
    </div>
  );
};

export default AccentWindow;
