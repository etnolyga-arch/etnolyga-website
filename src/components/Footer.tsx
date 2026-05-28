"use client";

import Image from 'next/image';
import Link from 'next/link';
import FolkPattern from './FolkPattern';
import { useSport } from '@/lib/SportContext';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const { selectedSport } = useSport();
  return (
    <footer className="bg-green-dark text-white mt-auto">
      <FolkPattern straddle />
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-10">
        {/* 2-col mobile / 3-col desktop grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          {selectedSport.links.length > 0 && (
            <div key={selectedSport.key}>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-5">{selectedSport.label}</p>
              <div className="space-y-2.5">
                {selectedSport.links.map((link) => (
                  <Link key={link.label} href={link.href} className="block text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Standalone links + social icons + logo
              mobile: col 2 row 2 (col-start-2)
              desktop: col 3 row 1 (md:col-start-3) */}
          <div className="col-start-2 md:col-start-3 flex flex-col justify-between">
            <div>
              <div className="space-y-2.5 mb-6">
                <Link href="/naujienos" className="block text-sm text-white/65 hover:text-white transition-colors">Naujienos</Link>
                <Link href="/kontaktai" className="block text-sm text-white/65 hover:text-white transition-colors">Kontaktai</Link>
              </div>
              {/* Social icons */}
              <div className="flex gap-2.5">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:border-white/70 hover:bg-white/10 transition-colors p-2.5"
                  >
                    <Image src={s.icon} alt={s.title} width={24} height={24} className="w-full h-full object-contain" />
                  </a>
                ))}
              </div>
            </div>
            {/* ETN♦LYGA logo */}
            <div className="mt-8">
              <Link href="/">
                <Image
                  src="/images/brand/logos/etnolyga-vertical.png"
                  alt="ETN♦LYGA"
                  width={118}
                  height={64}
                  style={{ imageRendering: 'pixelated' }}
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
