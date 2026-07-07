import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ListadoProductos from '@/components/ListadoProductos/ListadoProductos';
import { productos } from '@/data/productos';

export default function DamasPage() {
  const productosDamas = productos.filter((p) => p.seccion === 'damas');

  return (
    <main>
      <Navbar />
      <ListadoProductos
        titulo="Mujeres"
        subtitulo="Descubrí toda nuestra colección para damas. Estilo y calidad en cada modelo."
        productos={productosDamas}
      />
      <Footer />
    </main>
  );
}