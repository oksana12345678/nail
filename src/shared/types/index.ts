import { TFunction } from 'i18next';
import { LANGUAGES } from '../constants';

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export type Translation = { t: TFunction };
export interface ChildrenProps {
  children?: React.ReactNode;
}
export interface LayoutProps {
  children?: React.ReactNode;
  params: { locale: string };
}

export interface StateProps {
  navItems?: readonly string[];
  socials?: { icon: string; url: string }[];
  className?: string;
  classIcon?: string;
  classListsName?: string;
}

export interface LocaleParams {
  locale: string;
}
