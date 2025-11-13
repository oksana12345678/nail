import AboutUs from '@/modules/AboutUs/AboutUs';
import ContactUs from '@/modules/ContactUs/ContactUs';
import FollowUs from '@/modules/FollowUs/FollowUs';
import Hero from '@/modules/Hero/Hero';
import HotDates from '@/modules/HotDates/HotDates';
import OurProducts from '@/modules/OurProducts/OurProducts';
import Trends from '@/modules/Trends/Trends';
import { LocaleParams } from '@/shared/types';
import React from 'react';

const Home: React.FC<LocaleParams> = (locale) => {
  return (
    <>
      <Hero />
      <HotDates />
      <AboutUs />
      <OurProducts />
      <Trends locale={locale.locale} />
      <FollowUs />
      <ContactUs />
    </>
  );
};

export default Home;
