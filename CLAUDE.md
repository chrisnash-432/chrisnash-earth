# chrisnash.earth — read this first

Entry point for any Claude session working in this repository. Assume you have read
nothing else. Two people work here: **Chris Nash** (owner, voice, the letters) and
**Meredith** (`merbear89`, creative director). Both work through their own Claude.

## What this is

The personal site of Chris Nash, restoration leader and agroecologist in Cape Town, and
the home of **Inner & Outer Landscapes**, a monthly letter on ecological restoration,
inner development and regenerative culture.

The one sentence everything defers to: *when someone leaves this site they should feel
that restoring land and restoring people is one work, and want to follow it.* The primary
action everywhere is subscribing to the letters.

## The hard rules

Deliberately short. Anything not on this list is open to whoever owns that lane.

1. **Chris's voice is not open for revision.** Letter prose, About-page prose and the
   tagline are his alone. Others may say a sentence is unclear; they do not rewrite it.
   This applies to Claude: draft in his voice when asked, never quietly improve his
   published words.
2. **No em dashes anywhere.** No corporate jargon, no performative urgency, no fake
   scarcity. Positive and solutions-oriented, never doom.
3. **Scale metrics belong to the programmes**, not to Chris personally. Always "through
   the programmes I help run with Greenpop and partners".
4. **Field photography only.** Never stock, never AI-generated nature imagery. This is a
   credibility position rather than an aesthetic one: the strategy rests on him being a
   practitioner. Treatment, grade and art direction are open and are Meredith's.
5. **Tier-1 and Tier-2 language only.** The inner-development thread is carried without
   naming Jung, mystery traditions, plant medicine or animism.
6. **The cadence is monthly.** Do not restore the fortnightly claim anywhere.
7. **The next-issue line is derived**, from the latest letter's date plus one month.
   Never hardcode a date; a stale date is worse than no date.
8. **Accessibility is a floor and the build stays static.** WCAG AA contrast, visible
   focus, `prefers-reduced-motion` respected, self-hosted fonts, no client-side framework.
   Engineering constraints, not aesthetic ones.

## The visual system is open

What is live is version one: a competent, fast design built in a day so that something
real could go public. **Meredith is the creative director and the visual system is hers
to define.** Palette, type, layout, motion, imagery and the front end itself are all open
to her.

The reasoning behind the current choices is recorded in `DESIGN-BRIEF.md` and, in fuller
form for her, in the private brand repo at `brand/design-reference.md`. Treat those as a
case file rather than a rulebook.

One piece of v1 worth carrying into any new palette, as a lesson rather than a rule: the
tokens split into text-safe and decorative roles, because the warm mid-tones that make
the thing feel like earth are the ones that fail contrast as small text. `--ochre` is
decorative, `--ochre-ink` is text-safe. The hues are open; the discipline saves an audit.

Do not defend v1 on Meredith's behalf, and do not tell her the system is settled.

## How publishing works

A letter is a Markdown file in `src/content/letters/`. Adding the file publishes it;
`draft: true` hides it. Every push to `main` builds and deploys through GitHub Actions.
No CMS, no database. Site-wide strings live in `src/config.ts`, which the pipeline and
humans edit rather than the templates.

**Content and presentation are decoupled.** A redesign changes `.astro` files and leaves
every letter intact, so writing and redesigning never block each other.

## Working rhythm

Chris has two to three hours a week for this and it ranks behind his day job. Size every
suggestion accordingly. The failure mode this project has already lived through is
building the system instead of shipping the letters, so:

> Any hour that does not end with something leaving the building is infrastructure, and
> there is enough infrastructure.

## Who owns what

See `CONTRIBUTING.md`.
