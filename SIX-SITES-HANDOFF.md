# Six new FireWorks industry templates

Built for Anthony on 19 October 2026. Repository: https://github.com/colonnamedia/AGENT-FIREWORKS. Working branch: `templates/six-industry-sites-2026-10-19`. No production publication or default-branch merge requested.

| Demo brand | Industry | Source path | Public pages | Homepage photos |
| --- | --- | --- | ---: | ---: |
| Ridge & Root | Tree service | templates/tree-service | 5 | 5 |
| Next Chapter | Moving company | templates/moving-company | 5 | 5 |
| Liftline | Garage door company | templates/garage-doors | 5 | 5 |
| Alder & Stone | Law firm | templates/law-firm | 5 | 5 |
| Stillwater | Massage studio | templates/massage-studio | 5 | 5 |
| Clear Ledger | Bookkeeping and accounting | templates/bookkeeping | 5 | 5 |

## Exact tested state

Implementation commit: `9a71a7e0bd0df57ed79f28b7ae6f883912d8a307`. This documentation follow-up records that exact tested implementation; no runtime files changed. Resolve the handoff revision with `git log -1 -- SIX-SITES-HANDOFF.md`. All six per-template handoffs record the implementation SHA. Fresh clean builds also passed; see SIX-SITES-VALIDATION.json for route metadata and output hashes.

## What is included

Each template is independent: site.json content, a Python standard-library static builder, CSS, JavaScript, five local optimized WebP stock photos, favicon, photo sources, Vercel route configuration, a README, PUBLIC-HTML.md, check.py and FIREWORKS-PROJECT.md.

Thirty complete HTML pages plus six dedicated error documents are generated. Each public page has one H1, a distinct title/description, an explicit canonical and matching social metadata. The sitemap uses the same route manifest. No page content depends on JavaScript. Demos intentionally carry noindex and use placeholder `.example` origins. Set SITE_URL and approve domain/indexing before a client launch.

Inquiry forms have required fields, a demo acknowledgment, a text-only summary and edit/retry. They do not transmit, persist, book or charge. Controls remain disabled without JavaScript so a disabled-JS form cannot submit by accident. No external fonts, tracking, logins, booking provider, CRM, payments or delivery API is included.

## Verification

Passed for all six: production build; all 30 route content/metadata checks; internal link and asset targets; image alt/dimensions/loading; five distinct homepage photo hashes; sitemap/404 document checks; no network or browser-storage form code; JavaScript syntax checks. Photography contact sheet inspected for subject relevance and clear illustrative usage.

Browser QA is UNVERIFIED: the managed preview supervisor failed before serving with `bwrap: Can't mount proc on /newroot/proc: Operation not permitted`; `sites-preview status` reports stopped. The Sites troubleshooting workflow identifies this as an infrastructure limit and prohibits replacing managed preview infrastructure. Source/configuration was not changed to work around it. Before client launch, inspect desktop/mobile layouts, menu interactions, all forms and direct routes on a supported preview/host. No live HTTP or production integration tests are claimed.

## Build and continuation

From an individual template folder: `python3 build.py && python3 check.py` (or `npm run build`). No package installation. Output is `dist/` (ignored in Git). `node --check script.js` checks JS syntax. SITE_URL is a non-secret build-time origin override.

Keep the existing unfinished templates/accounting/styles.css unchanged; Clear Ledger is under templates/bookkeeping. Copy templates to separate client repositories when commissioned. Verify business identity, contact details, scope, policies, approved photos, qualifications, domain and actual inquiry delivery before launch. Law content requires actual attorney approval; massage intake must stay private; bookkeeping must not collect account credentials or financial records through the public demo.

Start a future chat by reading this document and the selected template’s FIREWORKS-PROJECT.md. Verify the repository against the recorded commit, work on a branch, and do not merge or publish production until Anthony approves.
