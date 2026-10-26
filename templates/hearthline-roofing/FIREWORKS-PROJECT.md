# Hearthline Roofing — FireWorks project handoff

| Item | State |
| --- | --- |
| Business | Hearthline Roofing, fictional residential roofing demo |
| Industry | Roofing |
| Source | `colonnamedia/AGENT-FIREWORKS`, `templates/hearthline-roofing/` |
| Branch | `templates/hearthline-roofing-20261026` |
| Implementation commit | `7c0e95edf09dcfca34b1518dd0ef74520a270f32` (tested implementation) |
| Host | Vercel project `hearthline-roofing`; production deployment READY but Vercel Authentication protects it |
| Live URL | `https://hearthline-roofing.vercel.app/` (protected, not publicly browsable) |
| Build | `python3 build.py`, output `dist/` |
| Public pages | `/`, `/roofing/`, `/our-approach/`, `/planning-guide/`, `/inspection-preview/`; real `/404.html` |
| Metadata | `build.py` is the single source for title, description, canonical, social metadata, sitemap |
| Indexing | `noindex,follow` on fictional demo pages |

## Experience

Warm residential design, five distinct original AI-generated illustrative photographs, mobile-visible split hero, alternating image/text sections, full-width two-photo slider with arrow, dot, keyboard and touch controls, repeated CTA, and proof prompts explicitly labeled as placeholders. The form validates and previews information locally; it does not transmit, persist, book or notify.

## Integration state

| Integration | Status |
| --- | --- |
| Live inquiry delivery | Not selected for demo |
| Scheduling/CRM | Not selected |
| Payments | Not selected |
| Analytics | Not selected |

## Verification and launch requirements

Local build and static checks cover all five routes, unique metadata, link targets, five image hashes, sitemap, 404 and JavaScript syntax. An authenticated Vercel fetch returned status 200 and route-specific metadata for all five routes, 200 for the hero asset and 404 for an unknown path. Browser interaction and visual mobile checks remain pending. Automatic approval review rejected removing Vercel Authentication, so do not add this protected demo to the public catalog. For an actual client, replace fictional identity and illustrative imagery with approved materials; configure approved delivery, contact details, domain and verified social proof; then re-run the route and mobile checks.

## Next-chat starting prompt

Treat this file as Hearthline project context. Inspect the repository and verify the tested source commit and current deployment. Preserve the Vercel host and local-only demo form unless Anthony approves a client integration. Work on a branch, preview changes, and do not merge or publish client-specific changes without Anthony's approval.
