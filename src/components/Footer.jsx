export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300">
      <aside>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-lg text-primary">
            IES Galileo - Curso 2025-2026
          </p> 
          <p className="text-sm italic">
            CFGS Desarrollo de Aplicaciones Web
          </p>
          <p className="opacity-70">
            Desarrollo Web en Entorno Cliente
          </p>
        </div>
      </aside> 
      <div>
        <p>© {new Date().getFullYear()} - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}