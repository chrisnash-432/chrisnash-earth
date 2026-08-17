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
| `src/styles/global.css` | Shared, changes recorded | The token system is fixed. Document freely, replace only by decision. |
| `DESIGN-BRIEF.md` | Shared | Update when a design or voice decision actually changes. |
| Art direction, photography treatment, imagery | Meredith | Direct push. Her judgment, no review latency. |
| `src/components/`, layouts, page structure | Shared | Pull request, Chris merges. |

## Pull requests

Branch names `brand/<topic>` for Meredith, `chris/<topic>` for Chris. One topic per
branch, small enough to review on a phone. Anything touching letter prose, the About
prose, the tagline or `src/config.ts` needs Chris to merge.

Branch protection is not enabled, so this is convention rather than enforcement. It
works because there are two of us and the lanes are clear.

## Decisions

When a design or voice decision changes something durable, record it in `DESIGN-BRIEF.md`
with the date and the reason. The cadence change on 17 August 2026 is the worked
example: what changed, why, and what it now applies to.

## Voice authority

Chris's voice is not open for revision. Meredith may flag that a sentence is unclear or
is not landing; she does not rewrite it. In the other direction, the visual system,
photography direction and outside perspective are Meredith's, and Chris does not
overrule her there without recording why.

This asymmetry is deliberate. Each person has final say inside their own lane.

## For Claude sessions

Read `CLAUDE.md` first. It carries the hard rules, the design lock and the working
rhythm. Do not propose a redesign of the token system, do not restore the fortnightly
cadence, and do not write in Chris's voice on a published page without being asked.
