'use client';

import { ReactNode } from 'react';
import { createInstance, i18n, Resource } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import initTranslations from './i18n';

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources?: Resource;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18nInstance: i18n = createInstance();

  void initTranslations(locale, namespaces, i18nInstance, resources);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
