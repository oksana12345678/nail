import Hero from '@/modules/Hero/Hero';
import Container from '@/shared/components/Container/Container';

export default function Home() {
  return (
    <main className="font-sans h-screen ">
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
