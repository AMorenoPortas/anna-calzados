import Image from 'next/image';
import Link from 'next/link';
import styles from './Categorias.module.css';

export default function Categorias() {
  return (
    <section className={styles.categorias}>
      <div className={styles.grid}>
        <Link href="/damas" className={styles.tarjeta}>
          <Image
            src="/categorias/damas.png"
            alt="Damas"
            fill
            className={styles.imagen}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.overlay}></div>
          <div className={styles.contenido}>
            <span className={styles.boton}>EXPLORAR COLECCIÓN</span>
          </div>
        </Link>

        <Link href="/hombres" className={styles.tarjeta}>
          <Image
            src="/categorias/hombres.png"
            alt="Hombres"
            fill
            className={styles.imagen}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.overlay}></div>
          <div className={styles.contenido}>
            <span className={styles.boton}>EXPLORAR COLECCIÓN</span>
          </div>
        </Link>
      </div>
    </section>
  );
}