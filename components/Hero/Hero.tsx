import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.circulo1}></div>
      <div className={styles.circulo2}></div>

      <div className={styles.contenido}>
        <h1 className={styles.titulo}>
          Nueva<br />temporada
        </h1>
        <p className={styles.kicker}>DESCUBRÍ LA COLECCIÓN 2026</p>
        <Link href="/damas" className={styles.boton}>
          VER PRODUCTOS
        </Link>
      </div>
    </section>
  );
}