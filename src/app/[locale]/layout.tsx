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

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: Language };
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
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

export default async function RootLayout(props: LayoutProps) {
  const { children, params } = props;
  const { locale } = params;

  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <DiscountBanner />

        <Header t={t} />
        {children}
      </body>
    </html>
  );
}
