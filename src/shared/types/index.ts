import { TFunction } from 'i18next';
import { LANGUAGES } from '../constants';

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

type AwaitedParams<T> = T extends Promise<infer U> ? U : T;

export type Translation = { t: TFunction };
export interface ChildrenProps {
  children?: React.ReactNode;
}

export interface StateProps {
  navItems?: readonly string[];
  socials?: { icon: string; url: string }[];
  className?: string;
  classIcon?: string;
  classListsName?: string;
  title?: string;
}

export interface LocaleParams {
  locale?: string;
}
