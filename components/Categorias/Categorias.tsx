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
            <h2 className={styles.titulo}>Damas</h2>
            <p className={styles.subtitulo}>EXPLORAR COLECCIÓN</p>
            <span className={styles.boton}>VER MÁS</span>
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
            <h2 className={styles.titulo}>Hombres</h2>
            <p className={styles.subtitulo}>EXPLORAR COLECCIÓN</p>
            <span className={styles.boton}>VER MÁS</span>
          </div>
        </Link>
      </div>
    </section>
  );
}