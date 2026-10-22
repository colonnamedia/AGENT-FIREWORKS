# FIREWORKS Project Handoff — Daywell Appliance

## Project snapshot

| Field | Current value |
|---|---|
| Client / business | Daywell Appliance — fictional demonstration |
| Industry | Appliance Repair |
| Repository | https://github.com/colonnamedia/AGENT-FIREWORKS |
| Source path | templates/appliance-repair |
| Default branch | main |
| Working branch | templates/six-industries-2026-10-21 |
| Tested implementation commit | 72df4d2b964193d4b74964c6a69cde4bc68fbff7 |
| Handoff commit | Resolve with git log -1 -- templates/appliance-repair/FIREWORKS-PROJECT.md |
| Hosting provider | Existing FireWorks storefront on Render |
| Preview URL | https://fireworks-websitebuilder.com/demos/appliance-repair/ |
| Live URL | Same fictional sales-demo URL; not a client production site |
| Live-site status | Live as a Featured/Available fictional demo; all five routes and five image assets checked |
| Last verified | 22 October 2026 |

## Goal and approved scope

Build the approved appliance repair industry template, commit the source, publish its demo and add a Featured/Available listing to FireWorks. Five distinct homepage images. Primary action: Request appliance service. Local demonstration tools show the customer journey without external delivery.

## Source and design direction

- Source: the factory static HTML builder and accessible local form foundation, adapted to this industry in a new template directory.
- Reason selected: full response HTML, no unnecessary services and independent client portability.
- Direction: daywell theme; split hero; palette #152d54, #ffca63, #f7f8fa, #e8edf4; original industry-specific imagery.
- Assets: assets/appliance-repair-*.webp and assets/favicon.svg. Image prompts retained locally in IMAGE-PROMPTS.json.
- Constraints: preserve clear demo labeling; do not imply actual reviews, credentials, client results or medical advice. Health information is excluded from clinical public forms.

## Stack and commands

| Item | Value |
|---|---|
| Runtime | Python standard library build; static HTML/CSS/JS output |
| Package manager | None required; optional npm command aliases |
| Install | None |
| Local development | Supported Sites managed preview supervisor |
| Production build | python3 build.py |
| Checks | python3 check.py; node --check script.js |
| Output | dist/ (ignored) |

## Pages, routes, and primary actions

- / — five-photo homepage and service pathways.
- /services/ — three industry-specific service descriptions with request preselection.
- /process/ — planning guide, appliance interactive example, FAQs and next step.
- /service-standards/ — Our standards.
- /service-request/ — local tool and validated inquiry preview.
- Dedicated 404.html; sitemap and rendering manifest from the route builder.

## Forms and conversion paths

Required example name/email and 5 industry fields, acknowledgment, browser validation, summary and edit/retry. Preview-only appliance tool; nothing is transmitted, booked or stored. Original submit listener attaches before controls are enabled. Client launch requires approved destinations and end-to-end delivery tests.

## Integrations

| Provider | Purpose | Status | Reference | Environment variables | Webhook / route | Remaining setup |
|---|---|---|---|---|---|---|
| None selected | Local request and planning demonstration | Local only | script.js | None | None | Choose approved delivery / booking provider for a client |

Inherited integrations removed: no auth, database, payments, email, trackers or external booking accounts. SITE_URL is a public build base URL, not a secret.

## Deployment

Generate with SITE_URL=https://fireworks-websitebuilder.com/demos/appliance-repair and --prefix /demos/appliance-repair. Publish the exact output to fire-works-web-BASE44/public/demos/appliance-repair. The existing storefront Vite build copies public assets and pre-renders marketing pages. Catalog registration and live verification are part of this authorized release. No DNS changes or new paid infrastructure.

## Completed and verified

Industry copy, five routes, five original imagery assets and local demonstration tools implemented. Live check: all five public routes return their own content and metadata, five images return image content, and unknown routes return 404. Source implementation 72df4d2b964193d4b74964c6a69cde4bc68fbff7; storefront release 6409277e6d84256bb6f9c948da848ccb0f662165.

## Remaining work

Real client identity, area, contact details, approved claims, actual credentials, fees, policies, domain, imagery consent and approved inquiry/booking destination; verify these before any client launch. The six existing-site duplicates are the next phase, outside this initial six-industry implementation.

## Decisions that must be preserved

Keep complete HTML, route metadata, noindex on fictional demos, five distinct homepage photos, local-only demo controls, original image provenance, existing Render hosting, and separation from source master templates.

## Known issues or blockers

No production integration is connected. Browser and live verification results are recorded in INDUSTRY-RELEASE-20261021.md. Pexels downloads were blocked; only original AI-generated imagery is included.

## Start the dedicated project chat with this prompt

Use this FIREWORKS-PROJECT.md as project context. Inspect the repository and verify changes after its tested commits. Preserve the design, hosting and local-only integration decisions. Work on a separate branch with a current preview. Do not merge or publish a real client site until Anthony approves it.
