import 'server-only';
import { getPayload } from 'payload';
import { cache } from 'react';
import config from '@payload-config';

import type { NewsItem } from './news';
import type { Team } from './teams';
import type { StandingRow } from './standings';
import type { ScheduleEntry } from './schedule';
import type { SponsorItem } from './sponsors';

/**
 * CMS data-access layer. Each function returns the SAME shape the frontend
 * components already expect (legacy `src/lib` types), but sourced from Payload
 * (Neon + Vercel Blob) instead of static files. Media relationships are
 * flattened to their public URL strings.
 */

const client = cache(async () => getPayload({ config }));

/** Resolve a Payload upload field (populated object or id) to a URL string. */
const mediaUrl = (m: unknown): string =>
  m && typeof m === 'object' && 'url' in m ? ((m as { url?: string }).url ?? '') : '';

const stripProtocol = (url: string): string => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

/** Format an ISO date as a Lithuanian long date, e.g. "2025 m. liepos 10 d." */
const ltDate = new Intl.DateTimeFormat('lt-LT', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});
const formatLtDate = (iso?: string | null): string => (iso ? ltDate.format(new Date(iso)) : '');

export const getNews = cache(async (): Promise<NewsItem[]> => {
  const payload = await client();
  // Newest first.
  const { docs } = await payload.find({ collection: 'news', limit: 100, sort: '-publishedAt', depth: 1 });
  return docs.map((n) => ({
    slug: n.slug,
    title: n.title,
    date: formatLtDate(n.publishedAt),
    excerpt: n.excerpt,
    photo: mediaUrl(n.photo),
    body: n.body ?? undefined,
    variant: (n.variant ? Number(n.variant) : 1) as 1 | 2,
  }));
});

export const getNewsItem = cache(async (slug: string): Promise<NewsItem | undefined> => {
  const all = await getNews();
  return all.find((n) => n.slug === slug);
});

export const getTeams = cache(async (): Promise<Team[]> => {
  const payload = await client();
  const { docs } = await payload.find({ collection: 'teams', limit: 100, sort: 'createdAt', depth: 1 });
  return docs.map((t) => ({
    slug: t.slug,
    name: t.name,
    school: t.school,
    logo: mediaUrl(t.logo),
    photo: mediaUrl(t.photo),
    coach: t.coach ?? '',
    players: (t.players ?? []).map((p) => ({
      name: p.name,
      role: p.role,
      photo: mediaUrl(p.photo) || undefined,
      number: p.number ?? undefined,
      bio: p.bio ?? undefined,
    })),
    quote: t.quote ?? undefined,
    quoteAuthor: t.quoteAuthor ?? undefined,
  }));
});

export const getTeam = cache(async (slug: string): Promise<Team | undefined> => {
  const all = await getTeams();
  return all.find((t) => t.slug === slug);
});

/**
 * Rows can come from the newer `teamRef` relationship (Stasik picks a team from
 * the list) or from the legacy free-text fields. The relationship wins when set,
 * so name / school / logo always follow the Teams collection.
 */
const mapStanding = (r: {
  team?: string | null;
  logo?: unknown;
  school?: string | null;
  teamRef?: unknown;
  wins?: number | null;
  draws?: number | null;
  losses?: number | null;
  points?: number | null;
}): StandingRow => {
  const ref =
    r.teamRef && typeof r.teamRef === 'object'
      ? (r.teamRef as { name?: string; school?: string | null; logo?: unknown })
      : null;
  return {
    team: ref?.name ?? r.team ?? '',
    logo: mediaUrl(ref?.logo ?? r.logo),
    school: ref?.school ?? r.school ?? '',
    wins: r.wins ?? 0,
    draws: r.draws ?? 0,
    losses: r.losses ?? 0,
    points: r.points ?? 0,
  };
};

export const getStandings = cache(async (): Promise<{ label: string; rows: StandingRow[] }[]> => {
  const payload = await client();
  const { docs } = await payload.find({ collection: 'standings', limit: 100, sort: 'group', depth: 1 });
  const map = new Map<string, StandingRow[]>();
  for (const d of docs) {
    const label = d.group ?? 'Kiti';
    if (!map.has(label)) map.set(label, []);
    map.get(label)!.push(mapStanding(d));
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b, 'lt'))
    .map(([label, rows]) => ({
      label,
      rows: rows.slice().sort((a, b) => b.points - a.points),
    }));
});

export const getSchedule = cache(async (): Promise<ScheduleEntry[]> => {
  const payload = await client();
  const { docs } = await payload.find({ collection: 'schedule', limit: 100, sort: 'order', depth: 1 });
  return docs.map((s) => {
    const refs = s.teamRefs;
    const teamsFromRefs = refs?.length
      ? refs.map((t) => {
          if (typeof t === 'object' && t !== null && 'name' in t) {
            return { name: t.name, logo: mediaUrl((t as { logo?: unknown }).logo) };
          }
          return { name: '', logo: '' };
        })
      : null;
    return {
      date: s.date,
      time: s.time ?? '',
      location: s.location,
      group: s.group ?? '',
      teams: teamsFromRefs ?? (s.teams ?? []).map((tm) => ({ name: tm.name, logo: mediaUrl(tm.logo) })),
    };
  });
});

export const getSponsors = cache(async (): Promise<{ sponsors: SponsorItem[]; partners: SponsorItem[] }> => {
  const payload = await client();
  const { docs } = await payload.find({ collection: 'sponsors', limit: 100, sort: 'order', depth: 1 });
  const toItem = (d: { name: string; logo: unknown; website?: string | null }): SponsorItem => ({
    src: mediaUrl(d.logo),
    alt: d.name,
    website: d.website ?? undefined,
  });
  return {
    sponsors: docs.filter((d) => d.type === 'sponsor').map(toItem),
    partners: docs.filter((d) => d.type === 'partner').map(toItem),
  };
});

export const getAbout = cache(async () => {
  const payload = await client();
  const a = await payload.findGlobal({ slug: 'about', depth: 1 });
  const paras = (arr?: { text: string }[] | null) => (arr ?? []).map((p) => p.text);
  return {
    timeline: (a.timeline ?? []).map((t) => ({ period: t.period, text: t.text })),
    gameDescription: { paragraphs: paras(a.gameDescription), photo: mediaUrl(a.gameDescriptionPhoto) },
    ripkaToday: {
      paragraphs: paras(a.ripkaToday),
      photo: mediaUrl(a.ripkaTodayPhoto),
      federationUrl: a.federationUrl ?? '#',
    },
    rules: { paragraphs: paras(a.rules), photo: mediaUrl(a.rulesPhoto), rulesUrl: a.rulesUrl ?? '#' },
  };
});

export const getSiteSettings = cache(async () => {
  const payload = await client();
  const s = await payload.findGlobal({ slug: 'site-settings', depth: 1 });
  const organizerPhoto = mediaUrl(s.organizerPhoto);
  return {
    heroImage: mediaUrl(s.heroImage),
    heroSubtitle: s.heroSubtitle ?? '',
    etnolyga: {
      title: s.etnolygaTitle ?? 'Etnolyga',
      description1: s.etnolygaDescription1 ?? '',
      description2: s.etnolygaDescription2 ?? '',
      photo: mediaUrl(s.etnolygaPhoto),
    },
    organizer: {
      title: s.organizerTitle ?? 'Organizatoriai',
      description: s.organizerDescription ?? '',
      photo: organizerPhoto,
    },
    contact: {
      email: s.email ?? '',
      phone: s.phone ?? '',
      hours: s.hours ?? '',
      photo: organizerPhoto,
      facebook: { url: s.facebook ?? '#', label: stripProtocol(s.facebook ?? '') },
      instagram: { url: s.instagram ?? '#', label: stripProtocol(s.instagram ?? '') },
      youtube: { url: s.youtube ?? '#', label: stripProtocol(s.youtube ?? '') },
    },
  };
});
