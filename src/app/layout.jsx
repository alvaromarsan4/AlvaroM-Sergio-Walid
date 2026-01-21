import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rick & Morty - IES Galileo",
  description: "Examen Desarrollo Web Entorno Cliente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="cupcake">
      <body className="min-h-screen flex flex-col bg-slate-50">
        {/* Componente de Cabecera y Navegación */}
        <Navbar />

        {/* Contenedor principal para el contenido de las páginas */}
        <main className="flex-grow w-full max-w-7xl mx-auto p-6">
          {children}
        </main>

        {/* Componente de Pie de página */}
        <Footer />
      </body>
    </html>
  );
}