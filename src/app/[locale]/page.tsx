import Home from '@/pages/Home/Home';

export default async function MainPage({
  params,
}: {
  params: { locale: string };
}) {
  const {locale} = await params;
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={locale} />
    </main>
  );
}
