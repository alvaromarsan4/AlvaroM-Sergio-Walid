import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow-md px-4 md:px-8 sticky top-0 z-50">
      
      <div className="w-10 rounded-full">
                      <img
                        src="/rick.svg" />
                    </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className="hover:bg-primary hover:text-white transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/characters" className="hover:bg-primary hover:text-white transition-colors">
              Personajes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}