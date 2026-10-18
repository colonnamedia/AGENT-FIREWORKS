# Aura & Form — FireWorks Med Spa & Aesthetics Website Template

## Project snapshot — October 14, 2026

| Item | Details |
|---|---|
| Template | Aura & Form — fictional med spa / aesthetics demo |
| Source (local package) | `fireworks_med_spa/` |
| Proposed repository placement | `colonnamedia/AGENT-FIREWORKS/templates/med-spa/` (reuse existing FireWorks monorepo) |
| Proposed Vercel project | `fireworks-medspa` |
| Intended URL (NOT YET DEPLOYED) | `https://fireworks-medspa.vercel.app/` |
| Storefront repo | `colonnamedia/fire-works-web-BASE44` |
| Proposed storefront slug | `aura-form-med-spa` |
| Actual status | Prepared source; check the current Vercel deployment and storefront for live status |
| Existing pattern reused | Appointment flow, responsive navigation, fictional-business disclosures from the existing Platinum Salon template; no changes to salon source or production |

## Purpose and pages

Five ready-to-customize static routes:

1. `/` — Home: original facial-treatment hero, intro, service pathway cards, practitioner/credential positioning, consultation CTA.
2. `/services/` — Services: nonclinical example facials and sample prices; consult-led advanced aesthetic category; no medical outcome claims; FAQs.
3. `/team/` — Team: role-only bio, credential and oversight placeholders; hours/location/booking and cancellation policies as fields requiring client verification.
4. `/gallery/` — Before-and-after consent framework: intentionally empty photo slots. No fabricated results, reviews, patient photos or transformations.
5. `/consultation/` — Local-only consultation interest preview.

Each page has responsive header/footer, skip link, five-link navigation, unique title/description, canonical URL, OG fields, a minimal fictional WebSite schema and `noindex,nofollow` metadata. Demo `robots.txt` disallows crawling. Remove noindex only after authentic client identity, scope, claims, consent and licensing checks.

## Design and original art

Hero image: original image generation depicting an esthetician providing a facial in a calm spa treatment room. Composition reserves the left side for text and places the human subjects to the right for desktop and mobile crops. Stored as an optimized 1536 × 1024 WebP in `assets/medspa-hero.webp` (~48 KB). A storefront page screenshot is in `assets/medspa-storefront.webp` and mobile/desktop captures are included with the testing materials. Color palette: deep evergreen, cream, sage and soft peach, editorial serif headlines, straightforward DM Sans body type.

## Consultation fields and safeguards

Required: broad treatment category, general cosmetic interest (nonmedical options), **sample** provider preference, preferred date, name, email, telephone, contact method and explicit demo acknowledgement checkbox. No medical history, symptoms, diagnoses, prescriptions, allergies, free-text health concerns, documents or patient images.

Form has **no `action`**, no server endpoint, no transmission, no uploads, no localStorage/cookies, no scheduling or payments. JavaScript calls `preventDefault()`, uses built-in browser validity with a non-past-date check, resets the data and displays a static non-booking receipt. No actual contact information is echoed back. A live business must select the vendor and complete privacy/regulatory review, appropriate agreements/terms and end-to-end tests before any real intake.

## Recommended FireWorks pricing

| Charge | Approved price |
|---|---:|
| One-time website build — five pages + illustrative menu + gallery framework + consultation demo | **$1,799** |
| Standard hosting — annual (primary) | **$499/year** |
| Standard hosting — monthly alternative | **$59.99/month** |
| Domain registration/management | **$20/year** |
| First year with annual hosting, excluding add-ons | **$2,318** |

Other available hosting tiers, separately quoted according to complexity: Small Business $299/year or $39.99/month; Advanced from $899/year or $99.99/month. Hosting, domains, client-specific integrations and third-party subscriptions are not discounted.

Scoped optional add-ons: booking provider handoff / integration from $199; secure intake + practice workflows from $499 **after** privacy, security and regulatory review; consent-approved photo gallery/media processing from $199; additional service page from $125. Vendors may charge subscriptions or processing costs. Avoid suggesting that a custom website alone creates HIPAA compliance.

## Required client inputs / launch gates

Business legal name and address, actual service area and hours, contact methods, approved business brand/assets, verified service menu and prices, independently checked practitioner identities/licenses/scope, clinical oversight as applicable, qualified clinical and privacy/legal review, explicit marketing image consents, before-and-after disclosure/permission, medical advertising claims review, deposit/cancellation/attendance policies, selected secure scheduling/vendor credentials, privacy/terms language, applicable jurisdiction and confirmed patient data handling/security. Nothing in this demo is evidence of clinical eligibility or treatment results.

## Proposed integrations (none are connected)

- Booking: approved clinic scheduling vendor, provider credentials, appointment windows, cancellation/deposit policies, end-to-end verification.
- Health/medical intake: only separately approved secure system, privacy and regulatory diligence, appropriate contractual requirements and security controls; **not** this demo form.
- Payments: approved processor account and policies, test/non-live checkout first.
- Gallery: actual client-owned permissioned images with accurate timings, matching conditions and required disclaimers.

## Verified locally on October 14, 2026

- All five routes returned HTTP 200 from an isolated local static server; navigation includes five links on each page.
- `/styles.css`, `/script.js`, optimized image and SVG favicon returned HTTP 200 locally.
- All pages have unique titles, descriptions, canonicals and noindex markers.
- Desktop 1440 px and mobile 390 px screenshots rendered; no horizontal overflow in either viewport.
- Mobile menu opened and exposes the intended Gallery navigation route.
- Empty form does not display a success message. Validated required fields show success, clear the fields and make **zero form-related network requests**.
- Form has no action attribute, and no backend/provider/analytics integration is connected.
- `test-results.json`, `preview-desktop.png` and `preview-mobile.png` contain the test outputs.

**Important limitation:** Browser tests used locally inlined CSS/image/JS to avoid a restricted localhost browser policy. HTTP asset/route 200 checks ran against the local server separately. Therefore these are **local**, not public Vercel or FireWorks checkout tests. Do not claim deployment is READY or checkout is working.

## Publication and verification

Source is being published through the FireWorks monorepo. Verify each public route, hero asset, mobile navigation, demo form and storefront after deployment. The site remains fictional and noindex until a real client launch.
