'use client';

import { useState } from 'react';
import styles from './Beneficios.module.css';

const items = [
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    titulo: 'ENVIAMOS TU COMPRA',
    subtitulo: 'Entregas a todo el país',
  },
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="1.8">
        <rect x="1" y="4" width="22" height="16" rx="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    titulo: 'PAGÁ COMO QUIERAS',
    subtitulo: 'Tarjetas de crédito o efectivo',
  },
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    titulo: 'COMPRÁ CON SEGURIDAD',
    subtitulo: 'Tus datos siempre protegidos',
  },
];

export default function Beneficios() {
  const [actual, setActual] = useState(0);

  return (
    <section className={styles.beneficios}>
      {/* MOBILE: carrusel */}
      <div className={styles.carrusel}>
        <div className={styles.item}>
          {items[actual].icono}
          <div className={styles.texto}>
            <p className={styles.titulo}>{items[actual].titulo}</p>
            <p className={styles.subtitulo}>{items[actual].subtitulo}</p>
          </div>
        </div>
        <div className={styles.puntos}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.punto} ${i === actual ? styles.puntoActivo : ''}`}
              onClick={() => setActual(i)}
              aria-label={`Ver beneficio ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP: fila */}
      <div className={styles.fila}>
        {items.map((item, i) => (
          <div key={i} className={styles.filaItem}>
            {item.icono}
            <div className={styles.texto}>
              <p className={styles.titulo}>{item.titulo}</p>
              <p className={styles.subtitulo}>{item.subtitulo}</p>
            </div>
            {i < items.length - 1 && <div className={styles.divisor}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}