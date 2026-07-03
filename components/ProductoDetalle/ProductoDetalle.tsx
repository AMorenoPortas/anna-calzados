import Image from 'next/image';
import Link from 'next/link';
import { Producto } from '@/data/productos';
import styles from './ProductoDetalle.module.css';

interface Props {
  producto: Producto;
  relacionados: Producto[];
}

export default function ProductoDetalle({ producto, relacionados }: Props) {
  const seccionNombre =
    producto.seccion === 'damas' ? 'Damas' :
    producto.seccion === 'hombres' ? 'Hombres' : 'Destacados';

  const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Me interesa el modelo ${producto.nombre} (${producto.marca}). ¿Está disponible?`
  );

  return (
    <section className={styles.detalle}>
      <div className={styles.breadcrumb}>
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href={`/${producto.seccion}`}>{seccionNombre}</Link>
        <span>/</span>
        <span className={styles.actual}>{producto.marca}</span>
      </div>

      <div className={styles.contenido}>
        <div className={styles.imagenWrapper}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className={styles.imagen}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className={styles.info}>
          <p className={styles.marca}>{producto.marca}</p>
          <h1 className={styles.nombre}>{producto.nombre}</h1>
          <div className={styles.divisor}></div>

          <p className={styles.descripcion}>
            Modelo disponible en nuestro local. Consultá por talles y colores disponibles.
          </p>

          <div className={styles.botones}>
            
            <a
              href={`https://wa.me/5491100000000?text=${mensajeWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonPrincipal}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              CONSULTAR POR WHATSAPP
            </a>

            <Link href={`/${producto.seccion}`} className={styles.botonSecundario}>
              VOLVER A {seccionNombre.toUpperCase()}
            </Link>
          </div>

          <div className={styles.detallesExtra}>
            <div className={styles.detalleItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Retirá en nuestro local</span>
            </div>
            <div className={styles.detalleItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7a1a1a" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>Calidad garantizada</span>
            </div>
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className={styles.relacionados}>
          <h2 className={styles.tituloRelacionados}>Más de {producto.marca}</h2>
          <div className={styles.gridRelacionados}>
            {relacionados.map((rel) => (
              <Link
                key={rel.id}
                href={`/producto/${rel.id}`}
                className={styles.tarjetaRelacionada}
              >
                <div className={styles.relacionadoWrapper}>
                  <Image
                    src={rel.imagen}
                    alt={rel.nombre}
                    fill
                    className={styles.imagenRelacionada}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className={styles.marcaRelacionada}>{rel.marca}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}