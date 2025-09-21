import AboutUs from '@/modules/AboutUs/AboutUs';
import Hero from '@/modules/Hero/Hero';
import HotDates from '@/modules/HotDates/HotDates';
import OurProducts from '@/modules/OurProducts/OurProducts';

export default function Home() {
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Hero />
      <HotDates />
      <AboutUs />
      <OurProducts />
    </main>
  );
}
