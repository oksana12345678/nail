import Home from '@/page/Home/Home';

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={locale} />
    </main>
  );
}
