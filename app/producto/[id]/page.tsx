import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductoDetalle from '@/components/ProductoDetalle/ProductoDetalle';
import { productos } from '@/data/productos';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    notFound();
  }

  const relacionados = productos
    .filter((p) => p.marca === producto.marca && p.id !== producto.id)
    .slice(0, 4);

  return (
    <main>
      <Navbar />
      <ProductoDetalle producto={producto} relacionados={relacionados} />
      <Footer />
    </main>
  );
}
