import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <div className={styles.columna}>
          <Image
            src="/logo.jpeg"
            alt="Anna Calzados"
            width={160}
            height={70}
            className={styles.logo}
          />
          <p className={styles.descripcion}>
            La moda que importa. Calzado con estilo y calidad para vos.
          </p>
        </div>

        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>NAVEGAR</h3>
          <Link href="/damas" className={styles.link}>Damas</Link>
          <Link href="/hombres" className={styles.link}>Hombres</Link>
        </div>

        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>CONTACTO</h3>
          <a href="https://instagram.com/calzadosanna?igsh=MTUxOW03bDk3MzB3OA==" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @calzadosanna
          </a>
          <a href="https://wa.me/5491171554603" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            WhatsApp
          </a>
          <span className={styles.link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Desde 1970 en Don Torcuato
          </span>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2026 ANNA CALZADOS — TODOS LOS DERECHOS RESERVADOS</p>
      </div>
    </footer>
  );
}