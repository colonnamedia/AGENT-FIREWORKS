# Northline Auto Works — FireWorks project handoff

## Identity and source

- Primary industry: auto repair; adaptable to tire shops, vehicle inspections and specialty repair after replacing services, content and imagery.
- Fictional sample brand and Pittsburgh-area context. Generated imagery is illustrative. No real credentials, reviews, hours, coverage, pricing or warranty claims.
- Repository: `colonnamedia/AGENT-FIREWORKS`, directory `templates/auto-repair`, branch `main`. Implementation and handoff commit: record from Git history after publication.
- Host: Vercel project `fireworks-auto-repair`; intended demo URL `https://fireworks-auto-repair.vercel.app/`. Verify live deployment and storefront before treating as published.

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

Run `python build.py` after source changes. Check five routes, internal links, local hero image, form required/pattern validation, mobile menu, and demo-only message. Record production URL, deployment status, storefront status and exact commit after verification. Until checked, these remain unverified.

## Future visual variants and next chat

Alternative hero concepts: diagnostic bay close-up, technician explaining an estimate to a driver, or bright daylight shop exterior. Preserve the service workflow while tailoring imagery and content to the client.

Next chat prompt: Treat this file as project context, inspect repository changes since the recorded commit, preserve Vercel hosting and demo-only integration boundaries, work on a branch and preview, and publish client changes only with Anthony's approval.
