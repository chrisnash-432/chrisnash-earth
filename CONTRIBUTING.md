# Working together here

Two people, two separate Claude sessions, no shared memory between them. This file is
the convention that keeps that from turning into drift.

## Path ownership

Single writer per path, so most conflicts cannot happen.

| Path | Owner | Convention |
|---|---|---|
| `src/content/letters/` | Chris | His prose. Nobody else edits published letters. |
| `src/pages/about.astro` body prose | Chris | His own written voice, never ghost-written. |
| `src/config.ts` | Chris | Site-wide strings, newsletter wiring. |
| `src/styles/global.css`, the token system | Meredith | Creative director. Hers to define. |
| Art direction, photography treatment, imagery | Meredith | Direct push. Her judgment. |
| `DESIGN-BRIEF.md` | Meredith | Update when a design decision actually changes. |
| `src/components/`, layouts, page structure | Shared | Pull request during a redesign; Meredith leads on visual, Chris on content structure. |

## Pull requests

Branch names `brand/<topic>` for Meredith, `chris/<topic>` for Chris. One topic per
branch, small enough to review on a phone. Anything touching letter prose, the About
prose, the tagline or `src/config.ts` needs Chris to merge.

Branch protection is not enabled, so this is convention rather than enforcement. It
works because there are two of us and the lanes are clear.

## Authority

**Chris owns authorship.** Letter prose, About-page prose, the tagline.

**Meredith owns the visual system.** Direction, palette, type, imagery, motion, layout,
the design system and the redesign.

Each has final say inside their own lane. Four things sit outside both lanes and need a
conversation plus a recorded decision to change, because they are strategy or engineering
floor rather than taste: field photography only, accessibility as a floor, the static
self-hosted build, and Chris's written voice.

## Decisions

When a design or voice decision changes something durable, record it in `DESIGN-BRIEF.md`
with the date and the reason. The cadence change on 17 August 2026 is the worked example.
The fuller decision log lives in the private brand repository.

## For Claude sessions

Read `CLAUDE.md` first. Do not restore the fortnightly cadence, do not hardcode the
next-issue date, and do not write in Chris's voice on a published page without being
asked. Do not tell Meredith the design system is fixed; it is not.
