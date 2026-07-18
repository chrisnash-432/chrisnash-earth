# chrisnash.earth — Design Brief v1.0

Launch site for Chris Nash: restoration leader, agroecologist, regenerative-development practitioner (Cape Town, SA). Hub-and-spoke brand: the personal domain is the anchor; "Inner & Outer Landscapes" is the named fortnightly newsletter living inside it.

## The one thing
When someone leaves the site they should feel that restoring land and restoring people is one work, and want to follow it. Primary action: subscribe to the letters.

## Voice rules (hard)
- Tagline verbatim as hero: "Seeding a regenerative culture, through restoration of inner and outer landscapes."
- Positive, solutions-oriented, never doom. Story-led, data-informed. Poetic but accessible.
- Tier-1/Tier-2 language only. Never name Tier-3 material (no Jung, mystery traditions, plant medicine, animism).
- No em dashes anywhere. No corporate jargon, no performative urgency, no fake scarcity.
- Scale metrics are attributed to the programmes Chris helps run with Greenpop and partners, never to him personally.
- About page body text is Chris's own written prose. Placeholder until he supplies it; do not ghost-write it.

## Direction: Warm Earth Editorial with Dusk accents
Chosen from 3 mockups (2026-07-18). Base is warm-paper editorial; Poetic Dusk appears as accents only:
- Italic, gold-toned pull quotes.
- ONE dusk-dark section per page maximum (e.g. the closing quote band, or the Inner Landscapes card), reading as evening forest, not tech dark-mode.
- Microcopy carries quiet warmth ("Welcome, traveller" energy) without going full mystic.

## Tokens
Colors:
- --paper: #F7F3EC (base, never pure white)
- --paper-deep: #EFE9DE (alternate section ground)
- --ink: #26281F (text, never pure black)
- --ink-soft: #585B4C (secondary text)
- --green: #3E5C41 (brand accent: links, buttons, serif emphasis)
- --green-deep: #22301F (dusk section ground)
- --ochre: #B98A3E (highlight, numbers, small labels)
- --clay: #A66A4E (rare secondary)
- --line: #DDD5C5 (rules and borders)
- Dusk section text: #EFEDDF on --green-deep, gold accent #C9A45C.

Type:
- Display serif: Fraunces (Google Fonts, variable, high-contrast feel). Weights 300-600, italics for emphasis words and pull quotes.
- UI/body sans: Inter. Body 16-17px, line-height 1.65.
- Display sizes: hero clamp(36px, 5.6vw, 60px); h2 clamp(26px, 3.6vw, 38px).
- Small labels: 11-12px uppercase letterspaced (0.2em) in ochre or green.

Texture and motion:
- Subtle radial warmth gradients on hero (green/ochre at very low alpha). Optional fine grain later.
- Motion budget: scroll-fade reveals and slow parallax ONLY. One signature scroll story deferred to phase 2. No cursor effects, no preloaders.
- prefers-reduced-motion respected.

Imagery:
- Field photography as protagonist WHEN AVAILABLE. Until Chris curates selects: organic gradient placeholders with caption labels naming place (as in mockups). Never stock photos, never AI-generated nature imagery.
- Captions credit place, and where known, people and programme.

## Pages (launch)
1. **Home (/)**: kicker line; tagline hero; 1-2 sentence positioning under it; email capture (quantified promise: fortnightly, 5 minutes); three routes (Read the letters / Field work note / About); triad explainer (Inner / Outer / Regenerative Culture); latest letters list (3); dusk quote band ("There is no better common ground than the ground beneath our feet."); footer.
2. **Letters (/letters)**: newsletter landing: what it is, the triad format, capture form, archive list. Individual letters at /letters/[slug] with mid+end capture CTAs.
3. **About (/about)**: short intro + structure with placeholder for Chris's own prose; signature metrics block (programme-attributed); the five-part perspective; links to Greenpop; short bio + LinkedIn link. Entity-rich (Person schema).
4. **Now (/now)**: "what the work is this season" dated entries (Nairobi syntropic site, Mulanje, Matamp City, Uilenkraal, the letters). Sivers /now pattern.

## SEO/GEO (baked in)
- Canonical URLs on chrisnash.earth. Sitemap, RSS at /rss.xml.
- Person + WebSite schema on home; Article schema on letters; BreadcrumbList.
- robots.txt welcoming GPTBot, ClaudeBot, PerplexityBot, Google-Extended. llms.txt describing the site.
- Descriptive titles/meta; OG tags; answer-first structure in letters.

## Conversion
- Capture in 3 placements (hero, mid, footer) wired for Kit (form action placeholder until account exists; graceful fallback message).
- Anti-spam pledge line. No popups ever.
- Footer: quiet, complete (letters, about, now, rss, LinkedIn, Greenpop, contact email).

## Out of scope at launch
Speaking, Work With Me, Field Work case studies, podcast feed (content model ready), Higgsfield anything, dark mode toggle.
