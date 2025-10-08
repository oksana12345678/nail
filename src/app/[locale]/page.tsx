import Home from '@/pages/Home/Home';
import { Language } from '@/shared/types';

export default async function MainPage({
  params,
}:  
LayoutProps
 ) {
  const { locale } = await params;
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={locale} />
    </main>
  );
}
