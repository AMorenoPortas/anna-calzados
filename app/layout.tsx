import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${marcellus.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}