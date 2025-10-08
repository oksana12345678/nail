import Home from '@/page/Home/Home';
import { LayoutProps } from '@/shared/types';

export default async function Page({ params }: LayoutProps) {
  const { locale } = await params;
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={locale} />
    </main>
  );
}
