import { TFunction } from 'i18next';
import { LANGUAGES } from '../constants';

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export type Translation = { t: TFunction };
