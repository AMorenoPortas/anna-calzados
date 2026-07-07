import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Categorias from '@/components/Categorias/Categorias';
import Beneficios from '@/components/Beneficios/Beneficios';
import Destacados from '@/components/Destacados/Destacados';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categorias />
      <Beneficios />
      <Destacados />
      <Footer />
    </main>
  );
}