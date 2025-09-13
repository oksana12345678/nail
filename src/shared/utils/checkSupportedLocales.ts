import { LANGUAGES } from '../constants';
import { Language } from '../types';

export const checkSupportedLocales = (locale: Language) => {
  return Object.values(LANGUAGES).includes(locale);
};
