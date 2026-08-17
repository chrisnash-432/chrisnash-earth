# chrisnash.earth — read this first

Entry point for any Claude session working in this repository. Assume you have read
nothing else. Two people work here: **Chris Nash** (owner, voice) and **Meredith**
(`merbear89`, brand and design). Both work through their own Claude.

## What this is

The personal site of Chris Nash, restoration leader and agroecologist in Cape Town,
and the home of **Inner & Outer Landscapes**, a monthly letter on ecological
restoration, inner development and regenerative culture.

The one sentence everything defers to: *when someone leaves this site they should feel
that restoring land and restoring people is one work, and want to follow it.* The
primary action everywhere is subscribing to the letters.

## The hard rules

1. **Chris's voice is not open for revision.** Letter prose, About-page prose and the
   tagline are his alone. Meredith may say a sentence is unclear; she does not rewrite
   it. This applies to Claude too: draft in his voice when asked, never quietly improve
   his published words.
2. **No em dashes anywhere.** No corporate jargon, no performative urgency, no fake
   scarcity. Positive and solutions-oriented, never doom.
3. **Scale metrics belong to the programmes**, not to Chris personally. Always "through
   the programmes I help run with Greenpop and partners".
4. **Field photography only.** Never stock, never AI-generated nature imagery. Until
   Chris curates his selects, the generative contour art stands in.
5. **Tier-1 and Tier-2 language only.** The inner-development thread is carried without
   naming Jung, mystery traditions, plant medicine or animism.
6. **The cadence is monthly.** A promise kept beats a promise doubled. Do not restore
   the fortnightly claim anywhere.
7. **The next-issue line is derived**, from the latest letter's date plus one month.
   Never hardcode a date. A stale date is worse than no date.

Full rationale for all of the above is in `DESIGN-BRIEF.md`.

## The design system is fixed, not proposed

The tokens in `src/styles/global.css` are chosen, contrast-corrected and live. The
contrast ratios in the comments were earned through an adversarial critique before
launch, and the two-ochre split matters: `--ochre` is decorative only, `--ochre-ink` is
the text-safe one. Do not reopen the palette or the type pairing without a recorded
decision. Documenting the system is welcome; replacing it is not.

The one visual thing genuinely open is **art direction for photography**, and that is
Meredith's.

## How publishing works

A letter is a Markdown file in `src/content/letters/`. Adding the file publishes it;
`draft: true` hides it. Every push to `main` builds and deploys through GitHub Actions.
There is no CMS and no database. Site-wide strings live in `src/config.ts`, which the
pipeline and humans edit rather than the templates.

## Working rhythm

Chris has two to three hours a week for this, and it ranks behind his day job. Size
every suggestion accordingly. The failure mode this project has already lived through
is building the system instead of shipping the letters, so:

> Any hour that does not end with something leaving the building is infrastructure, and
> there is enough infrastructure.

If a session opens with the month's letter undrafted, the letter comes first and system
work waits.

## Who owns what

See `CONTRIBUTING.md`.
