import Image from 'next/image';
import Link from 'next/link';
import SponsorsSection from '@/components/SponsorsSection';
import { getTeam, getTeams } from '@/lib/cms';

export const revalidate = 30;

export default async function KomandaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [team, teams] = await Promise.all([getTeam(slug), getTeams()]);

  if (!team) {
    return (
      <div className="py-32 px-4 text-center">
        <h1 className="font-display text-2xl text-graphite">Komanda nerasta</h1>
        <Link href="/komandos" className="mt-6 inline-block text-sm font-semibold text-green-dark hover:underline">← Grįžti į komandas</Link>
      </div>
    );
  }

  const otherTeams = teams.filter((t) => t.slug !== slug);
  const roleOrder = ['Treneris', 'Vartininkas', 'Žaidėjas', 'Puolėjas', 'Gynėjas'];
  const roleLabels: Record<string, string> = {
    Treneris: 'Treneriai',
    Vartininkas: 'Vartininkai',
    Žaidėjas: 'Žaidėjai',
    Puolėjas: 'Puolėjai',
    Gynėjas: 'Gynėjai',
  };
  const grouped = roleOrder
    .map((role) => ({ role, label: roleLabels[role] ?? role, players: team.players.filter((p) => p.role === role) }))
    .filter((g) => g.players.length > 0);

  return (
    <div>
      {/* Hero — full-bleed team photo */}
      <section className="relative min-h-[440px] flex items-end overflow-hidden -mt-14">
        <Image src={team.photo} alt={`Komanda ${team.name}`} fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-12 pt-24 flex items-end gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 bg-white">
            <Image src={team.logo} alt={team.name} width={64} height={64} className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-white/60 mb-1">{team.school}</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Komanda {team.name}</h1>
          </div>
        </div>
      </section>

      {/* Players + Coach */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Roster */}
          <div className="md:col-span-2">
            {team.players.length === 0 ? (
              <p className="text-sm text-graphite/50">Sudėtis dar nepaskelbta.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {grouped.map(({ role, label, players }) => (
                  <div key={role}>
                    <h2 className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-4">{label}</h2>
                    <div>
                      {players.map((p) => (
                        <div key={p.name} className="flex items-center gap-3 py-3 border-b border-graphite/8">
                          {p.photo ? (
                            <Image src={p.photo} alt={p.name} width={36} height={36} className="rounded-full object-cover flex-shrink-0 border border-graphite/10" style={{ width: 36, height: 36 }} />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-graphite/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-semibold text-graphite/40">{p.name.charAt(0)}</span>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              {p.number != null && (
                                <span className="text-[11px] font-semibold text-graphite/30 tabular-nums">#{p.number}</span>
                              )}
                              <span className="text-sm text-graphite">{p.name}</span>
                            </div>
                            {p.bio && <p className="text-[11px] text-graphite/50 leading-tight mt-0.5">{p.bio}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-green-dark text-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-green-light mb-2">Treneris</p>
              <p className="font-display text-lg font-semibold">{team.coach}</p>
            </div>
            <div className="bg-green-light/15 border border-green-light/40 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-2">Mokykla</p>
              <p className="text-sm font-semibold text-graphite">{team.school}</p>
            </div>
            <div className="bg-green-light/15 border border-green-light/40 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-2">Žaidėjų skaičius</p>
              <p className="font-display text-3xl font-semibold text-graphite">{team.players.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      {team.quote && (
        <section className="py-16 px-4 bg-green-dark text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl font-semibold leading-relaxed mb-4">
              &ldquo;{team.quote}&rdquo;
            </p>
            {team.quoteAuthor && (
              <p className="text-xs tracking-widest uppercase text-green-light">— {team.quoteAuthor}</p>
            )}
          </div>
        </section>
      )}

      {/* Other teams */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-6">Kitos komandos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {otherTeams.map((t) => (
              <Link key={t.slug} href={`/komandos/${t.slug}`} className="relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <Image src={t.photo} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-white/70 bg-white">
                    <Image src={t.logo} alt={t.name} width={28} height={28} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white leading-tight">{t.name}</p>
                    <p className="text-[10px] text-white/55 leading-tight">{t.school}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
}
