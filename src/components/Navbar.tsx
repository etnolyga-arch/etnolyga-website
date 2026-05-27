'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const mainLinks = [
  { href: '/', label: 'Pradžia' },
  { href: '/tvarkarastis', label: 'Tvarkaraštis' },
  { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
  { href: '/komandos', label: 'Komandos' },
  { href: '/apie-ripka', label: 'Apie ripką' },
];

const sideLinks = [
  { href: '/naujienos', label: 'Naujienos' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

const allLinks = [...mainLinks, ...sideLinks];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-green-dark text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none flex-shrink-0">
          <span className="font-display text-[15px] font-semibold tracking-[0.15em] text-white leading-tight">
            ETN<span className="text-green-light">♦</span>
          </span>
          <span className="font-display text-[15px] font-semibold tracking-[0.15em] text-white/55 leading-tight">
            LYGA
          </span>
        </Link>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-5 flex-1">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white mr-1">RIPKA</span>
          {mainLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-wide transition-colors ${
                  active ? 'text-green-light font-semibold' : 'text-white/70 hover:text-white font-normal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop right links */}
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          {sideLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-wide transition-colors ${
                  active ? 'text-green-light font-semibold' : 'text-white/70 hover:text-white font-normal'
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
            {allLinks.map((link) => (
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
