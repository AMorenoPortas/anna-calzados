import styles from './Mantenimiento.module.css';
import Image from 'next/image';

export default function Mantenimiento() {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.jpeg"
        alt="Anna Calzados"
        width={200}
        height={85}
        className={styles.logo}
      />
      <h1 className={styles.titulo}>Próximamente</h1>
      <p className={styles.texto}>Estamos trabajando para traerte algo increíble. ¡Volvé pronto!</p>
      <div className={styles.contacto}>
        <a href="https://instagram.com/calzadosanna?igsh=MTUxOW03bDk3MzB3OA==" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @calzadosanna
        </a>
        <a href="https://wa.me/5491171554603" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}