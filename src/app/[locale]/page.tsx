import Home from '@/pages/Home/Home';
import { Language } from '@/shared/types';

export default async function MainPage({
  params,
}: {
  params: { locale: Language };
}) {
  const { locale } = await params;
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={locale} />
    </main>
  );
}
