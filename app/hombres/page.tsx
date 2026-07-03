import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ListadoProductos from '@/components/ListadoProductos/ListadoProductos';
import { productos } from '@/data/productos';

export default function HombresPage() {
  const productosHombres = productos.filter((p) => p.seccion === 'hombres');

  return (
    <main>
      <Navbar />
      <ListadoProductos
        titulo="Hombres"
        subtitulo="Descubrí toda nuestra colección para hombres. Estilo y calidad en cada modelo."
        productos={productosHombres}
      />
      <Footer />
    </main>
  );
}