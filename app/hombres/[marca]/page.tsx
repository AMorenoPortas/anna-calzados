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
  head: 'Head',
  'head-2': 'Head 2',
  kappa: 'Kappa',
  maraton: 'Maraton',
};

export default async function HombresMarcaPage({ params }: Props) {
  const { marca } = await params;
  const nombreMarca = marcasMap[marca];

  if (!nombreMarca) {
    notFound();
  }

  const productosFiltrados = productos.filter(
    (p) => p.seccion === 'hombres' && p.marca === nombreMarca
  );

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