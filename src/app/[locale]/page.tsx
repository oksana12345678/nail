import Home from '@/pages/Home/Home';

export default function MainPage({ params }: { params: { locale: string } }) {
  return (
    <main className="font-sans  flex flex-col justify-center items-center">
      <Home locale={params.locale} />
    </main>
  );
}
