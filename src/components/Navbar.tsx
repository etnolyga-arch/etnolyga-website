'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Pradžia' },
  { href: '/tvarkarastis', label: 'Tvarkaraštis' },
  { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
  { href: '/komandos', label: 'Komandos' },
  { href: '/apie-ripka', label: 'Apie ripką' },
  { href: '/naujienos', label: 'Naujienos' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

const sports = ['RIPKA', 'KYLA', 'RISTYNĖS'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSport, setActiveSport] = useState('RIPKA');
  const pathname = usePathname();

  return (
    <nav className="bg-green-dark text-white sticky top-0 z-50">
      {/* Sport selector */}
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-6 py-2 border-b border-white/10">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => setActiveSport(sport)}
            className={`text-[10px] font-semibold tracking-widest uppercase transition-opacity ${
              activeSport === sport ? 'opacity-100 text-green-light' : 'opacity-40 text-white'
            }`}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        <Link href="/" className="font-display text-lg font-semibold text-white tracking-wider">
          ETNOLYGA
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-wide transition-colors ${
                  active ? 'text-green-light font-bold' : 'text-white/75 hover:text-white font-normal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Atidaryti meniu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-dark border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
