import Link from 'next/link';
import FolkPattern from './FolkPattern';

export default function Footer() {
  return (
    <footer className="bg-graphite text-white mt-auto">
      <FolkPattern />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-xl font-semibold tracking-wider mb-3">ETNOLYGA</div>
            <p className="text-xs text-white/50 leading-relaxed">
              Lietuvos etnosporto komiteto iniciatyva, puoselėjanti lietuviškus tradicinius sporto žaidimus.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Kontaktai</h4>
            <div className="space-y-1.5">
              <p className="text-sm text-white/70">etnosportas@gmail.com</p>
              <p className="text-sm text-white/70">+37067992665</p>
              <p className="text-sm text-white/70">I–V 8:00–17:00</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Socialiniai tinklai</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://facebook.com/etnolyga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/etnolyga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@etnolyga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-white/30">© 2026 Lietuvos etnosporto komitetas</p>
          <div className="flex gap-6">
            {[
              { href: '/', label: 'Pradžia' },
              { href: '/kontaktai', label: 'Kontaktai' },
              { href: '/naujienos', label: 'Naujienos' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
