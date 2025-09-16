'use client';

import React, { useEffect, useState } from 'react';
import data from './data.json';

const DiscountBanner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % data.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = data[index];

  return (
    <div className="w-full bg-accent_discount text-center text-main_button m-auto py-3 text-lg font-semibold h-12 flex items-center justify-center">
      <div
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        🎉 Discount {current.name.toUpperCase()} -{current.off}% off!
      </div>
    </div>
  );
};

export default DiscountBanner;
