'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { sideLinks } from '@/lib/nav';
import { sports } from '@/lib/sports';
import { useSport } from '@/lib/SportContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sportOpen, setSportOpen] = useState(false);
  const { selectedSport, setSelectedSport } = useSport();
  const sportRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (sportRef.current && !sportRef.current.contains(e.target as Node)) {
        setSportOpen(false);
      }
    };
    if (sportOpen) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [sportOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 text-white transition-colors duration-300 ${scrolled ? 'bg-green-dark' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/brand/logos/etnolyga-vertical.png"
            alt="ETN♦LYGA"
            width={59}
            height={32}
            style={{ imageRendering: 'pixelated' }}
          />
        </Link>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-5 flex-1">
          {/* Sport selector */}
          <div className="relative" ref={sportRef}>
            <button
              onClick={() => setSportOpen(!sportOpen)}
              className="flex items-center gap-1 text-[11px] font-bold tracking-[0.18em] uppercase text-white mr-1 focus:outline-none"
              aria-expanded={sportOpen}
              aria-haspopup="true"
            >
              {selectedSport.label}
              <svg className={`w-2 h-2 transition-transform duration-200 ${sportOpen ? 'rotate-180' : ''}`} viewBox="0 0 8 5" fill="none">
                <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {sportOpen && (
              <div className="absolute top-full left-0 mt-2 bg-green-dark border border-white/15 min-w-[150px] shadow-lg z-50">
                {sports.map((sport, i) => {
                  const isSelected = sport.key === selectedSport.key;
                  return (
                    <button
                      key={sport.key}
                      onClick={() => { setSelectedSport(sport); setSportOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 flex items-center gap-2 transition-colors hover:bg-white/5 ${i < sports.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isSelected ? 'bg-green-light' : 'bg-white/20'}`} />
                      <div>
                        <span className={`text-[11px] tracking-[0.18em] uppercase ${isSelected ? 'font-bold text-green-light' : 'text-white/50 hover:text-white/75'}`}>{sport.label}</span>
                        {!sport.available && sport.comingSoonLabel && (
                          <span className="ml-2 text-[9px] text-white/25 uppercase tracking-wider">{sport.comingSoonLabel}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {selectedSport.links.map((link) => {
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
          <a
            href="/admin"
            className="text-[11px] tracking-wide text-white/80 hover:text-white border border-white/30 hover:border-white/60 rounded px-2.5 py-1 transition-colors"
          >
            Prisijungti
          </a>
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
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            {/* Sport selector strip */}
            <div className="py-3 border-b border-white/10 mb-1">
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Sport</p>
              <div className="flex gap-3">
                {sports.map((sport) => {
                  const isSelected = sport.key === selectedSport.key;
                  return (
                    <button
                      key={sport.key}
                      onClick={() => setSelectedSport(sport)}
                      className={`text-[11px] tracking-[0.15em] uppercase px-2 py-1 transition-colors ${
                        isSelected ? 'font-bold text-green-light bg-white/10' : 'text-white/25 hover:text-white/50'
                      }`}
                    >
                      {sport.label}
                    </button>
                  );
                })}
              </div>
            </div>
            {[...selectedSport.links, ...sideLinks].map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0 transition-colors ${
                    active ? 'text-green-light' : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-4 flex-shrink-0 flex items-center justify-center">
                    {active && (
                      <Image
                        src="/images/ui/arrows/down.png"
                        alt=""
                        width={13}
                        height={13}
                        className="rotate-[-90deg]"
                        style={{ filter: 'brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(540%) hue-rotate(95deg) brightness(0.97)' }}
                      />
                    )}
                  </div>
                  <span className={`text-sm tracking-wide ${active ? 'font-semibold' : 'font-normal'}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <a
              href="/admin"
              className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-4 flex-shrink-0" />
              <span className="text-sm tracking-wide font-normal">Prisijungti</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
