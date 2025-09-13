import { LANGUAGES } from '@/shared/constants';

const i18nConfig = {
  locales: Object.values(LANGUAGES),
  defaultLocale: LANGUAGES.PL,
  prefixDefault: true,
};

export default i18nConfig;
