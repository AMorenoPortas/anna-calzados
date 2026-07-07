'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productos } from '@/data/productos';
import styles from './Buscador.module.css';

export default function Buscador() {
  const [query, setQuery] = useState('');
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const resultados = query.trim().length > 0
    ? productos.filter(p =>
        p.marca.toLowerCase().includes(query.toLowerCase()) ||
        p.nombre.toLowerCase().includes(query.toLowerCase()) ||
        p.seccion.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cerrar = () => {
    setAbierto(false);
    setQuery('');
  };

  return (
    <div className={styles.buscador} ref={ref}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Buscar por marca o modelo..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setAbierto(true);
          }}
          onFocus={() => setAbierto(true)}
          className={styles.input}
        />
        <svg className={styles.icono} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </div>

      {abierto && query.trim().length > 0 && (
        <div className={styles.dropdown}>
          {resultados.length === 0 ? (
            <div className={styles.sinResultados}>
              <p>No se encontraron productos con &quot;{query}&quot;</p>
              <p className={styles.sinResultadosHint}>Probá buscando por marca (Atomik, Kappa, Moleca...) o sección (damas, hombres)</p>
            </div>
          ) : (
            <>
              <div className={styles.header}>
                {resultados.length} resultado{resultados.length !== 1 ? 's' : ''}
              </div>
              {resultados.map(p => (
                <Link
                  key={p.id}
                  href={`/producto/${p.id}`}
                  onClick={cerrar}
                  className={styles.resultado}
                >
                  <div className={styles.imagenWrapper}>
                    <Image
                      src={p.imagen}
                      alt={p.nombre}
                      fill
                      className={styles.imagen}
                      sizes="60px"
                    />
                  </div>
                  <div className={styles.textos}>
                    <p className={styles.marcaResultado}>{p.marca}</p>
                    <p className={styles.nombreResultado}>{p.nombre}</p>
                    <p className={styles.seccion}>
                      {p.seccion === 'damas' ? 'Damas' : p.seccion === 'hombres' ? 'Hombres' : 'Destacados'}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}