# Northline Auto Works — FireWorks project handoff

## Identity and source

- Primary industry: auto repair; adaptable to tire shops, vehicle inspections and specialty repair after replacing services, content and imagery.
- Fictional sample brand and Pittsburgh-area context. Generated imagery is illustrative. No real credentials, reviews, hours, coverage, pricing or warranty claims.
- Repository: `colonnamedia/AGENT-FIREWORKS`, directory `templates/auto-repair`, branch `main`. Implementation commit: `b20534c8534a9bad78cf1efcfef95a42f6f88545`. Handoff publication update: see subsequent commit history.
- Host: Vercel project `fireworks-auto-repair`; production demo URL `https://fireworks-auto-repair.vercel.app/` (Vercel deployment `dpl_6eVr8gRe9a1FnrfU2TsayN4dNyiU`, READY from implementation commit).

## Pages and workflow

Five pages: Home, Services, How It Works, Service Areas, Request Service. Reusable hero, service pathways, repair-process timeline, local-area framework, policy placeholders, vehicle intake, and prominent service CTA. Service page has anchored diagnostics, brakes, maintenance and repair sections.

Primary action: preview a service request. Fields: name, email, phone, ZIP, vehicle year, make/model, approximate mileage, service, timing, preferred contact, concern and required demo acknowledgment. The JavaScript validates locally and renders a local confirmation. There is **no network submission, persistence, scheduling, payment, emergency dispatch or booking**.

## Integrations and client inputs

| Integration | Status | Launch requirement |
| --- | --- | --- |
| Scheduling/CRM | Not selected | Client chooses provider, credentials, lead destination, privacy terms, spam controls and end-to-end tests. |
| Payments | Not selected | Confirm scope and provider before any implementation. |
| Analytics | Not selected | Obtain approved account and consent requirements. |

Client supplies verified name, logo, legal entity, public phone/email, address, hours, service radius, offered repairs, inspection fees, appointment/drop-off process, licenses/certifications if relevant, warranties, original shop photos and permitted reviews. Confirm prices and provider-specific workflow before a real business launch. Remove demo `noindex` only after factual review and launch approval.

## Pricing and options

Recommended build: **$1,699**, justified by five pages, four detailed service pathways, process and policy content, local SEO framework and vehicle-specific intake. Standard hosting **$499/year** primary or **$59.99/month**. Domain **$20/year** separately. Optional live booking/CRM routing from **$299 setup**, additional dedicated service page **$125/page**, approved review or gallery integration from **$199 setup**, vendor fees additional. Build discounts do not apply to hosting, domain or integrations.

## SEO and QA

Editable unique titles, descriptions, headings, canonical paths, OG/Twitter metadata, internal links, semantic markup, alt text, optimized local WebP and WebPage schema. Demo is `noindex`; real AutomotiveBusiness/AutoRepair schema requires verified address, phone and hours. No ranking promises or city-name duplicate pages.

Run `python build.py` after source changes. Local QA passed for five pages' titles, headings, metadata, internal links, image paths and JavaScript syntax. Production requests returned HTTP 200 for all five routes, hero WebP, CSS and JS on October 16, 2026. Vercel READY points to implementation commit. Form is local-only by source inspection; mobile menu and layout need visual browser review. Storefront seed commits `e9c74c8a4bc7deefd520b11537f2442f7ba015f0` and SQL correction `d432031bcf395fbfeb4b02c285f3bb1c5b2c4eb4` were pushed to `colonnamedia/fire-works-web-BASE44`; live storefront and checkout remain unverified until its backend deploys.

## Future visual variants and next chat

Alternative hero concepts: diagnostic bay close-up, technician explaining an estimate to a driver, or bright daylight shop exterior. Preserve the service workflow while tailoring imagery and content to the client.

Next chat prompt: Treat this file as project context, inspect repository changes since the recorded commit, preserve Vercel hosting and demo-only integration boundaries, work on a branch and preview, and publish client changes only with Anthony's approval.

## November 7, 2026 editorial audit (source only)

The generator in `build.py` still writes complete static HTML for five public routes. It now also writes `404.html` and `sitemap.xml` from the same route inventory and asserts one title, description and canonical per route. The host should serve those files directly; production response and 404 status still need verification after deployment. Keep the demo `noindex` choice.

The homepage has a concise hero, a visible service-request CTA, two alternating photo/text chapters, a separate process photo and an explicitly labeled sample proof slot. Four distinct local photos appear with alt text and intrinsic dimensions; below-the-fold photos are lazy loaded. The mobile CSS keeps the hero photograph above the text and adjusts the alternating rows into a readable single column. Stock scenes remain illustrative, not actual shop jobs or customer evidence.

Local build checks passed for all five route files, unique metadata, internal navigation targets, image paths and dimensions, four unique homepage photos, the generated sitemap and 404 file, and JavaScript syntax. The form prevents submission and gives local-only confirmation; native required, type and pattern validation are present. A browser runtime was unavailable here, so interaction and visual checks at desktop and mobile sizes remain outstanding. This source revision is not deployed; publish after the Vercel daily deployment quota resets, then check live direct routes, unknown-route HTTP 404, menu, form, and mobile/desktop image cropping before marking complete.


## Homepage image audit — October 19, 2026

Added three distinct supporting stock photographs to the homepage, with responsive layout, descriptive alt text, explicit dimensions, lazy loading and local optimized WebP assets. Existing hero imagery remains. Source and license references are in `PHOTO-SOURCES.md`. Standing rule: every homepage should contain four to five distinct, relevant photographs; repeated hero crops and logos do not count.
