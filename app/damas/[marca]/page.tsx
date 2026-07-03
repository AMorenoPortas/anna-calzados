import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ListadoProductos from '@/components/ListadoProductos/ListadoProductos';
import { productos } from '@/data/productos';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ marca: string }>;
}

const marcasValidas = ['atomik', 'generico', 'jaguar', 'maraton', 'urbano'];

export default async function DamasMarcaPage({ params }: Props) {
  const { marca } = await params;

  if (!marcasValidas.includes(marca)) {
    notFound();
  }

  const productosFiltrados = productos.filter(
    (p) => p.seccion === 'damas' && p.marca.toLowerCase() === marca.toLowerCase()
  );

  const nombreMarca = marca.charAt(0).toUpperCase() + marca.slice(1);

  return (
    <main>
      <Navbar />
      <ListadoProductos
        titulo={`Damas · ${nombreMarca}`}
        productos={productosFiltrados}
      />
      <Footer />
    </main>
  );
}