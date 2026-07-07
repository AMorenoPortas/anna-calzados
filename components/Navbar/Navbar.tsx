'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Buscador from '@/components/Buscador/Buscador';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const cerrarMobile = () => {
    setMobileOpen(false);
    setMenuAbierto(null);
  };

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <button
          className={styles.hamburguesa}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span className={mobileOpen ? styles.abierto : ''}></span>
          <span className={mobileOpen ? styles.abierto : ''}></span>
          <span className={mobileOpen ? styles.abierto : ''}></span>
        </button>

        <div className={styles.buscadorWrapper}>
          <Buscador />
        </div>

        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.jpeg"
            alt="Anna Calzados"
            width={280}
            height={120}
            className={styles.logo}
            priority
          />
        </Link>

        <div className={styles.local}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Desde 1970 en Don Torcuato</span>
        </div>
      </div>

      {/* MENU BAR DESKTOP */}
      <nav className={styles.menuBar}>
        <Link href="/" className={`${styles.menuItem} ${styles.activo}`}>
          INICIO
        </Link>

        <div
          className={styles.menuItemDropdown}
          onMouseEnter={() => setMenuAbierto('damas')}
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <Link href="/damas" className={styles.menuItem}>
            MUJERES
            <svg className={styles.chevron} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>
          {menuAbierto === 'damas' && (
            <div className={styles.dropdown}>
              <Link href="/damas/atomik" className={styles.dropdownItem}>Atomik</Link>
              <Link href="/damas/generico" className={styles.dropdownItem}>Colección Anna</Link>
              <Link href="/damas/jaguar" className={styles.dropdownItem}>Jaguar</Link>
              <Link href="/damas/maraton" className={styles.dropdownItem}>Maratón</Link>
              <Link href="/damas/urbano" className={styles.dropdownItem}>Urbano</Link>
              <Link href="/damas" className={`${styles.dropdownItem} ${styles.dropdownTodo}`}>Ver todo</Link>
            </div>
          )}
        </div>

        <div
          className={styles.menuItemDropdown}
          onMouseEnter={() => setMenuAbierto('hombres')}
          onMouseLeave={() => setMenuAbierto(null)}
        >
          <Link href="/hombres" className={styles.menuItem}>
            HOMBRES
            <svg className={styles.chevron} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>
          {menuAbierto === 'hombres' && (
            <div className={styles.dropdown}>
              <Link href="/hombres/atomik" className={styles.dropdownItem}>Atomik</Link>
              <Link href="/hombres/head" className={styles.dropdownItem}>Head</Link>
              <Link href="/hombres/head-2" className={styles.dropdownItem}>Head 2</Link>
              <Link href="/hombres/kappa" className={styles.dropdownItem}>Kappa</Link>
              <Link href="/hombres/maraton" className={styles.dropdownItem}>Maratón</Link>
              <Link href="/hombres" className={`${styles.dropdownItem} ${styles.dropdownTodo}`}>Ver todo</Link>
            </div>
          )}
        </div>
      </nav>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div className={styles.menuMobile}>
          <div className={styles.mobileBuscador}>
            <Buscador />
          </div>
          <Link href="/" onClick={cerrarMobile} className={styles.mobileItem}>INICIO</Link>
          <Link href="/damas" onClick={cerrarMobile} className={styles.mobileItem}>DAMAS</Link>
          <Link href="/hombres" onClick={cerrarMobile} className={styles.mobileItem}>HOMBRES</Link>
        </div>
      )}
    </header>
  );
}