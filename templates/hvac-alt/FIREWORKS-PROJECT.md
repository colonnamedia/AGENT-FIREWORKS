# FIREWORKS Project Handoff — North Air

## Project snapshot

| Field | Value |
|---|---|
| Client | Fictional HVAC alternate template |
| Source repository | colonnamedia/AGENT-FIREWORKS |
| Source path | templates/hvac-alt |
| Working branch | templates/six-alternates-2026-10-22 |
| Tested implementation commit | Fill after source commit |
| Hosting | Existing FireWorks storefront on Render |
| Demo URL | https://fireworks-websitebuilder.com/demos/hvac-alt/ |
| Live status | Publication pending verification |

## Scope and design

This independent alternate preserves the earlier industry version. Its panel hero, five original photographs, section order, proof framework and service inquiry journey use different content. The brand and all photographed people/projects are fictional. No fabricated testimonial, license, clinical result, price or availability is presented.

## Stack and routes

Python standard library builds complete static HTML from site.json; no install is required. Commands: `python3 build.py && python3 check.py`. Output: ignored dist/. Routes: /, /services/, /process/, /our-standards/, /service-request/ plus a dedicated 404, sitemap and rendering manifest. Each public route contains unique SEO and social metadata in response HTML. Demo routes are noindex.

## Forms and integrations

The service preview and request form keep example data only in the page. They make no booking, upload, quote or external request. A client launch requires approved identity, service area, fees, credentials, consented imagery, proof sources, policies, secure lead/appointment destination and end-to-end delivery tests. No auth, database, payment, email, analytics or booking account is connected here. SITE_URL is a public build base, not a secret.

## Deployment

Build with SITE_URL=https://fireworks-websitebuilder.com/demos/hvac-alt and --prefix /demos/hvac-alt; publish output under public/demos/hvac-alt in colonnamedia/fire-works-web-BASE44. Add a separate Available catalog listing. The homepage shows one representative per industry while the full collection lists every alternate. No new DNS or paid infrastructure.

## Decisions and status

Keep full response HTML, five distinct homepage photos, exact route metadata, accessible mobile menu, local-only demo controls and existing published industry version. Live browser and HTTP verification plus exact commits are recorded in the release follow-up. No real customer project should launch without Anthony's approved content and integrations.
