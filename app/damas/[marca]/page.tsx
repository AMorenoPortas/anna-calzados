import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ListadoProductos from '@/components/ListadoProductos/ListadoProductos';
import { productos } from '@/data/productos';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ marca: string }>;
}

const marcasMap: Record<string, string> = {
  atomik: 'Atomik',
  generico: 'Colección Anna',
  jaguar: 'Jaguar',
  maraton: 'Maraton',
  urbano: 'Urbano',
};

export default async function DamasMarcaPage({ params }: Props) {
  const { marca } = await params;
  const nombreMarca = marcasMap[marca];

  if (!nombreMarca) {
    notFound();
  }

  const productosFiltrados = productos.filter(
    (p) => p.seccion === 'damas' && p.marca === nombreMarca
  );

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