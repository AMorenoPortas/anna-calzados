"use client";

import { useState, useEffect } from "react";
import styles from "./Beneficios.module.css";

const items = [
  {
    icono: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7a1a1a"
        strokeWidth="1.8"
      >
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    titulo: "ENVIAMOS TU COMPRA",
    subtitulo: "Entregas a todo el país",
  },
  {
    icono: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7a1a1a"
        strokeWidth="1.8"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    titulo: "PAGÁ COMO QUIERAS",
    subtitulo: "Tarjetas de crédito o efectivo",
  },
  {
    icono: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7a1a1a"
        strokeWidth="1.8"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    titulo: "COMPRAS MAYORISTAS",
    subtitulo: "Consultá nuestro catálogo de precios mayoristas",
  },
];

export default function Beneficios() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className={styles.beneficios}>
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
              className={`${styles.punto} ${i === actual ? styles.puntoActivo : ""}`}
              onClick={() => setActual(i)}
              aria-label={`Ver beneficio ${i + 1}`}
            />
          ))}
        </div>
      </div>

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
