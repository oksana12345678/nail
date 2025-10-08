import type { Metadata } from 'next';
import { Nunito, Playfair_Display } from 'next/font/google';
import '../globals.css';
import i18nConfig from '../../../i18nConfig';
import React from 'react';
import { NAMESPACES } from '@/shared/constants';
import { Language } from '@/shared/types';
import { checkSupportedLocales } from '@/shared/utils/checkSupportedLocales';
import Header from '@/modules/Header/Header';
import initTranslations from '@/i18n/utils/i18n';
import DiscountBanner from '@/modules/DiscountBanner/DiscountBanner';
import { LayoutProps } from '@/shared/types/index';
import { TranslationsProvider } from '@/i18n/utils';

const nunitoSans = Nunito({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const i18nNamespaces = Array.from(NAMESPACES);

const mainMetadataDict: Record<Language, { description: string }> = {
  en: { description: '' },
  ua: { description: '' },
  pl: { description: '' },
};


interface LocaleLayoutProps {
  children?: React.ReactNode;
  params: { locale: string }; // не Language!
};

export async function generateMetadata({
  params,
}:LocaleLayoutProps
): Promise<Metadata> {
  const { locale } = params;

  if (!checkSupportedLocales(locale)) {
    return { title: 'Nail Studio', description: '' };
  }

  return {
    title: 'Nail Studio',
    description: mainMetadataDict[locale]?.description ?? '',
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({children, params}: LocaleLayoutProps
) {

  const { locale } =  params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body
          className={`${nunitoSans.variable} ${playfairDisplay.variable} antialiased`}
        >
          <DiscountBanner />

          <Header locale={locale} />
          {children}
        </body>
      </TranslationsProvider>
    </html>
  );
}
