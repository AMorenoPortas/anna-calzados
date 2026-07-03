import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ListadoProductos from '@/components/ListadoProductos/ListadoProductos';
import { productos } from '@/data/productos';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ marca: string }>;
}

const marcasValidas = ['atomik', 'head', 'head-2', 'kappa', 'maraton'];

export default async function HombresMarcaPage({ params }: Props) {
  const { marca } = await params;

  if (!marcasValidas.includes(marca)) {
    notFound();
  }

  const productosFiltrados = productos.filter(
    (p) => p.seccion === 'hombres' && p.marca.toLowerCase() === marca.toLowerCase()
  );

  const nombreMarca = marca
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');

  return (
    <main>
      <Navbar />
      <ListadoProductos
        titulo={`Hombres · ${nombreMarca}`}
        productos={productosFiltrados}
      />
      <Footer />
    </main>
  );
}