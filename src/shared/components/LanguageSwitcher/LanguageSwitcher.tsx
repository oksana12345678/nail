'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '../Icon/Icon';
import { LANGUAGES } from '@/shared/constants';

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>(LANGUAGES.PL);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const languageFlags = {
    ua: 'ukraine',
    pl: 'poland',
    en: 'states',
  };

  useEffect(() => {
    const cookies = document.cookie.split('; ').reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>
    );

    const langFromCookie = cookies['NEXT_LOCALE'] || LANGUAGES.PL;
    setCurrentLang(langFromCookie);
  }, []);

  const handleSelect = (lang: string) => {
    if (lang === currentLang) return;

    setCurrentLang(lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;

    if (!pathname) return;

    const segments = pathname?.split('/');
    if (segments.length > 1) {
      segments[1] = lang;
    } else {
      segments.push(lang);
    }
    const newPath = segments?.join('/') || `/${lang}`;

    router.push(newPath);
  };

  return (
    <div className="relative flex items-center gap-2">
      {Object.entries(languageFlags).map(([lang, icon]) => (
        <button
          key={lang}
          type="button"
          onClick={() => handleSelect(lang)}
          className="flex items-center gap-1"
        >
          <Icon
            iconName={icon}
            className={`w-8 h-8 transition-opacity duration-200 ${
              currentLang === lang ? 'opacity-100' : 'opacity-30'
            }`}
          />
          <span className="hidden">{lang}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
