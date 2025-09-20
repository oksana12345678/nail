import initTranslations from '@/i18n/utils/i18n';
import AboutUs from '@/modules/AboutUs/AboutUs';
import Hero from '@/modules/Hero/Hero';
import HotDates from '@/modules/HotDates/HotDates';
import { NAMESPACES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';

export default function Home() {
  return (
    <main className="font-sans h-screen flex flex-col justify-center items-center">
      <Hero />
      <HotDates />
      <AboutUs />
    </main>
  );
}
