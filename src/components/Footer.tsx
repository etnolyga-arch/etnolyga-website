import Image from 'next/image';
import Link from 'next/link';
import FolkPattern from './FolkPattern';

const navLinks = [
  { href: '/', label: 'Pradžia' },
  { href: '/tvarkarastis', label: 'Tvarkaraštis' },
  { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
  { href: '/komandos', label: 'Komandos' },
  { href: '/apie-ripka', label: 'Apie ripką' },
  { href: '/naujienos', label: 'Naujienos' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/etnolyga', icon: '/figma-assets/frame-7--Facebook_icon.png', title: 'Facebook' },
  { label: 'Instagram', href: 'https://instagram.com/etnolyga', icon: '/figma-assets/frame-2--Instagram_icon.png', title: 'Instagram' },
  { label: 'YouTube', href: 'https://youtube.com/@etnolyga', icon: '/figma-assets/frame-3--Youtube_icon.png', title: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white mt-auto">
      <FolkPattern inverted />
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          {/* Sport label + nav links */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-5">RIPKA</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/65 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social icon circles */}
          <div className="flex items-start gap-2.5 md:mt-9">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden"
              >
                <Image src={s.icon} alt={s.title} width={40} height={40} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* ETN♦LYGA logo centred at bottom */}
        <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
          <Link href="/" className="text-center leading-none group">
            <div className="font-display text-xl font-semibold tracking-[0.2em] text-white group-hover:text-white/80 transition-colors">
              ETN<span className="text-green-light">♦</span>
            </div>
            <div className="font-display text-xl font-semibold tracking-[0.2em] text-white/45 group-hover:text-white/35 transition-colors -mt-0.5">
              LYGA
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
