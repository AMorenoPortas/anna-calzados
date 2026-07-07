import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/data/productos';
import styles from './Destacados.module.css';

export default function Destacados() {
  // Toma 8 productos aleatorios de la sección "destacados"
  const productosDestacados = productos
    .filter((p) => p.seccion === 'destacados')
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <section className={styles.destacados}>
      <div className={styles.grid}>
        {productosDestacados.map((producto) => (
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
    </section>
  );
}