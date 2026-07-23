import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";
import Mantenimiento from "@/components/Mantenimiento/Mantenimiento";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anna Calzados — La moda que importa",
  description: "Tienda de calzados para damas y hombres. Calidad y estilo en cada modelo.",
};

const sitioActivo = process.env.NEXT_PUBLIC_SITIO_ACTIVO === "true";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${marcellus.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        {sitioActivo ? (
          <>
            {children}
            <FloatingButtons />
          </>
        ) : (
          <Mantenimiento />
        )}
      </body>
    </html>
  );
}