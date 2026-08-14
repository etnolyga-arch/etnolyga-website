/**
 * Privacy policy and terms of use content.
 *
 * Written to describe what this site actually does: it has no forms, no
 * analytics and no tracking. The only third parties are the Google Maps embed
 * on the homepage and Google Fonts. Keep this text in step with the code — if
 * an analytics tool or a contact form is ever added, this must be updated.
 *
 * NOT reviewed by a lawyer. See Projects/Stasik-Website audit notes.
 */

export const LEGAL_ENTITY = {
  name: 'Asociacija „Lietuvos etnosporto komitetas“',
  code: '305315960',
  address: 'Šaltinio g. 6-24, Vaidotų k., Vilniaus r.',
  email: 'etnolyga@gmail.com',
};

/** Shown in the footer and at the bottom of both legal pages. */
export const COPYRIGHT_HOLDER = LEGAL_ENTITY.name;

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

export const PRIVACY: { updated: string; intro: string; sections: LegalSection[] } = {
  updated: '2026 m. rugpjūčio 14 d.',
  intro:
    'Ši privatumo politika paaiškina, kokius duomenis renka svetainė etnolyga.lt ir kaip jie naudojami. Svetainę tvarko ' +
    `${LEGAL_ENTITY.name} (juridinio asmens kodas ${LEGAL_ENTITY.code}, ${LEGAL_ENTITY.address}).`,
  sections: [
    {
      heading: 'Kokių duomenų nerenkame',
      paragraphs: [
        'Svetainėje nėra registracijos, užsakymų ar kontaktinių formų, todėl iš lankytojų nerenkame vardų, el. pašto adresų, telefono numerių ar kitų asmens duomenų.',
        'Nenaudojame analitikos, reklamos ar lankytojų sekimo įrankių. Nekuriame lankytojų profilių ir nevykdome automatizuoto sprendimų priėmimo.',
      ],
    },
    {
      heading: 'Slapukai',
      paragraphs: [
        'Rinkodaros ar analitinių slapukų nenaudojame.',
        'Techninis prisijungimo slapukas naudojamas tik svetainės turinio administravimo sistemoje, prie kurios jungiasi tik svetainės administratoriai. Paprastiems lankytojams jis nesukuriamas.',
      ],
    },
    {
      heading: 'Trečiųjų šalių paslaugos',
      paragraphs: [
        'Kai kurios svetainės dalys kraunamos iš trečiųjų šalių serverių. Atidarius puslapį šioms bendrovėms techniškai perduodamas jūsų IP adresas ir naršyklės informacija — be to turinys negalėtų būti parodytas.',
      ],
      list: [
        'Google Maps — pradiniame puslapyje rodomas artimiausių varžybų vietos žemėlapis (Google Ireland Ltd.).',
        'Google Fonts — svetainės šriftai (Google Ireland Ltd.).',
        'Vercel — svetainės talpinimas ir pateikimas (Vercel Inc.).',
      ],
    },
    {
      heading: 'Nuorodos į kitas svetaines',
      paragraphs: [
        'Svetainėje yra nuorodų į rėmėjų, partnerių ir socialinių tinklų svetaines. Paspaudus nuorodą patenkate į kitą svetainę, kuriai ši privatumo politika negalioja. Rekomenduojame susipažinti su tų svetainių privatumo taisyklėmis.',
      ],
    },
    {
      heading: 'Jūsų teisės',
      paragraphs: [
        'Kadangi lankytojų asmens duomenų nerenkame ir nesaugome, dažniausiai neturime duomenų, kuriuos galėtume pateikti ar ištrinti.',
        `Jei turite klausimų dėl duomenų apsaugos, rašykite ${LEGAL_ENTITY.email}. Taip pat turite teisę kreiptis į Valstybinę duomenų apsaugos inspekciją (vdai.lrv.lt).`,
      ],
    },
    {
      heading: 'Pakeitimai',
      paragraphs: [
        'Ši privatumo politika gali būti atnaujinta. Aktuali versija visada skelbiama šiame puslapyje kartu su atnaujinimo data.',
      ],
    },
  ],
};

export const TERMS: { updated: string; intro: string; sections: LegalSection[] } = {
  updated: '2026 m. rugpjūčio 14 d.',
  intro:
    `Šios naudojimo sąlygos taikomos svetainei etnolyga.lt, kurią tvarko ${LEGAL_ENTITY.name} ` +
    `(juridinio asmens kodas ${LEGAL_ENTITY.code}). Naudodamiesi svetaine sutinkate su šiomis sąlygomis.`,
  sections: [
    {
      heading: 'Svetainės paskirtis',
      paragraphs: [
        'Svetainė skirta informacijai apie Etnolygos veiklą, varžybų tvarkaraščius, komandas, turnyrinę lentelę ir naujienas skelbti. Informacija teikiama susipažinimo tikslais.',
      ],
    },
    {
      heading: 'Autorių teisės',
      paragraphs: [
        `Visos teisės saugomos. Svetainės turinys — tekstai, nuotraukos, logotipai, grafinis dizainas ir programinis sprendimas — yra saugomas autorių teisių ir priklauso ${LEGAL_ENTITY.name} arba naudojamas turint teisių turėtojų sutikimą.`,
        'Turinį kopijuoti, platinti, keisti ar naudoti komerciniais tikslais be išankstinio rašytinio sutikimo draudžiama.',
        'Rėmėjų ir partnerių logotipai yra jų teisėtų savininkų nuosavybė ir naudojami bendradarbiavimo pagrindu.',
        'Nedidelės turinio ištraukos gali būti cituojamos nurodant šaltinį ir pateikiant nuorodą į etnolyga.lt.',
      ],
    },
    {
      heading: 'Informacijos tikslumas',
      paragraphs: [
        'Stengiamės, kad skelbiama informacija būtų tiksli ir naujausia, tačiau varžybų datos, laikai, vietos ir rezultatai gali keistis. Neprisiimame atsakomybės už dėl pasikeitusios ar netikslios informacijos patirtus nepatogumus.',
        'Prieš planuodami atvykti į varžybas rekomenduojame pasitikslinti nurodytais kontaktais.',
      ],
    },
    {
      heading: 'Išorinės nuorodos',
      paragraphs: [
        'Svetainėje pateikiamos nuorodos į kitas svetaines. Neatsakome už jų turinį, prieinamumą ar privatumo praktiką.',
      ],
    },
    {
      heading: 'Sąlygų pakeitimai',
      paragraphs: [
        'Šios sąlygos gali būti keičiamos. Aktuali versija skelbiama šiame puslapyje kartu su atnaujinimo data.',
      ],
    },
    {
      heading: 'Kontaktai',
      paragraphs: [
        `Klausimais dėl svetainės ar turinio naudojimo rašykite ${LEGAL_ENTITY.email}.`,
      ],
    },
  ],
};
