# FIREWORKS Project Handoff — Ridge & Root

## Project snapshot

| Field | Current value |
|---|---|
| Client / business | Ridge & Root — fictional demo |
| Industry | Tree service |
| Repository | https://github.com/colonnamedia/AGENT-FIREWORKS |
| Template path | templates/tree-service |
| Default branch | main |
| Working branch | templates/six-industry-sites-2026-10-19 |
| Tested implementation commit | 9a71a7e0bd0df57ed79f28b7ae6f883912d8a307 |
| Handoff commit | Documentation follow-up on the same working branch; resolve exact revision with git log -1 -- this file |
| Hosting provider | Not provisioned; static output compatible with existing Vercel template hosting |
| Preview URL | Internal QA only; no public deployment requested |
| Live URL | None |
| Live-site status | Not published |
| Last verified | 2026-10-19 |

## Goal and approved scope

Build and commit this reusable industry demo as part of the six-site batch. Five public pages, five distinct relevant homepage photos, complete static HTML, responsive navigation and an industry-specific local request preview.

## Source and design direction

- New source build; no client site copied. The existing unfinished accounting stylesheet remains untouched.
- Design: forest theme, cover hero, distinct typography and proportions suited to tree service.
- Assets: local optimized WebP photos and SVG favicon under assets. Pexels stock, not actual staff or work. Sources recorded separately.
- Preserve clear demo labeling, no invented credentials/reviews/results and the five-photo/public-HTML rules.

## Stack and commands

| Item | Value |
|---|---|
| Framework / runtime | Python static generator plus HTML/CSS/vanilla JS |
| Package manager | None required; package.json provides optional npm command aliases |
| Install | No dependency installation needed |
| Local development | `python3 build.py`; use approved static preview tooling |
| Production build | `python3 build.py` |
| Test / lint | `python3 check.py` and `node --check script.js` |
| Output directory | dist |

## Pages, routes, and primary actions

`/`: five-photo overview and request CTA. `/services/`: three service frameworks and preselected inquiry links. `/process/`: planning steps and questions. `/field-notes/`: approach and illustrative scenes. `/assessment/`: local preview, validation, summary and edit flow. Dedicated 404 document.

## Forms and conversion paths

Required name/email and industry-specific preferences; an explicit demo acknowledgment; browser validation; safe text-only summary; edit/retry. No network calls, storage, email, orders or bookings. Do not rely on this demo for urgent assistance. Client credentials, insurance, coverage and response policies must be verified before launch.

## Integrations

None selected. This is new source, with no inherited integrations. No environment secrets. SITE_URL is a non-secret build-time origin override only. Future inbox/booking/CRM connections require client approval and safe end-to-end verification.

## Deployment

No production deployment requested. Build outputs complete HTML and assets; static host serves generated route directories and a true 404. Vercel config has cleanUrls and trailingSlash, no homepage catchall. `.example` canonicals and noindex are deliberate demo defaults and must be replaced/reviewed before launch.

## Completed and verified

Source implementation and local build checks. Full batch verification results are in SIX-SITES-HANDOFF.md at the repository root, including browser QA limits and exact tested commit.

## Remaining work

Verify actual business identity, contact details, area, hours, qualifications, service scope, policies, photo permissions and domain. Configure an approved real inquiry destination and test with authorization. Replace demo branding and example canonicals, approve metadata/indexing and verify each live URL and mobile layout before client launch.

## Decisions that must be preserved

Keep template independent, static content available without JS, five local photos, reduced-motion support, accessible menus/forms, private-data boundary and honest demo labels. Never turn the master into a client site; duplicate into a client repository when commissioned.

## Known issues or blockers

No live host/domain or delivery integration is configured. Canonicals are placeholders; demo pages intentionally carry noindex. No claimed client results or external credentials.

## Start the dedicated project chat with this prompt

```text
Read templates/tree-service/FIREWORKS-PROJECT.md and SIX-SITES-HANDOFF.md as project context. Inspect the repository and verify changes since the recorded implementation commit. Preserve the static rendering, photo, design and integration decisions. Work on a separate branch and preview. Do not merge or publish until Anthony approves it.
```
