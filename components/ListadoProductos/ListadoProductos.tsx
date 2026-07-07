import Image from 'next/image';
import Link from 'next/link';
import { Producto } from '@/data/productos';
import styles from './ListadoProductos.module.css';

interface Props {
  titulo: string;
  subtitulo?: string;
  productos: Producto[];
}

export default function ListadoProductos({ titulo, subtitulo, productos }: Props) {
  return (
    <section className={styles.listado}>
      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <div className={styles.linea}></div>
        {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
      </div>

      {productos.length === 0 ? (
        <p className={styles.vacio}>No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className={styles.grid}>
          {productos.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${producto.id}`}
              className={styles.tarjeta}
            >
              <div className={styles.imagenWrapper}>
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className={styles.imagen}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className={styles.marca}>{producto.marca}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}