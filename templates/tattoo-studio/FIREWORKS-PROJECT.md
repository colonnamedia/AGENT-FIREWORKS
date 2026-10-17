# Vesper Ink — FireWorks handoff

## Identity and source

Primary industry: tattoo studio. Adaptable to piercing or beauty studios only after changing intake, health/privacy rules and client-specific policies. Repository `colonnamedia/AGENT-FIREWORKS`, directory `templates/tattoo-studio`, production branch `main`. Host: Vercel project `fireworks-tattoo-studio`. Source commit `01aaf71fcbe8bfd39a8d67eb67659a24760d29c1`; production deployment `dpl_41Ua9QwTdK46s9Khod4NT1a4cV9r` at https://fireworks-tattoo-studio.vercel.app/. Storefront seed commit `e6871981d1924fcaad5d192b1d188d5ec0ed0e13`.

Fictional sample Pittsburgh studio. Artist roles, generated art images, policies and geography are placeholders, not actual staff, healed customer outcomes, credentials or available appointments. No real testimonials or certifications are claimed.

## Pages and action

Five pages: Home, Artists, Gallery, Experience & Policies, Consultation. Reusable editorial hero, artist-profile framework, consent-based portfolio gallery, steps, pricing-policy placeholders and style/artist intake. Primary CTA: start a consultation preview.

Form fields: name, email, optional phone, style, preferred artist, placement, approximate size, budget range, preferred timing, general concept and demo acknowledgment. It validates and displays a local-only summary. No message is sent or stored, reference image uploaded, artist contacted, appointment booked, deposit accepted or payment processed. No health history or sensitive medical information is requested.

## Integrations and client launch

| Integration | Status | Client requirement |
| --- | --- | --- |
| Booking and artist selection | Not selected | Confirm provider, artist calendars, policies, credentials and end-to-end tests. |
| Deposits/payments | Not selected | Real terms, refunds, tax and selected provider; separate implementation. |
| Gallery/social feed | Not selected | Approved asset rights, captions, accessibility and provider. |

Client supplies real studio name, logo, address, hours, public contact, artist portraits/bios and portfolios with permission, licensing and studio policies, actual price minimum/rates, deposit and cancellation terms, age/ID requirements, aftercare language and privacy text. Remove `noindex` only after facts, rights and integrations are verified.

## Pricing

Recommended build **$1,799** for five pages, artist matching, galleries, consultation logic, policy framework, original optimized artwork and SEO foundation. **Standard hosting $499/year** primary or **$59.99/month**; domain **$20/year**. Optional booking provider and artist routing from **$299 setup**, deposit/payment integration from **$399 setup**, extra artist profile and gallery onboarding from **$199 each**, vendor fees separately. Build discounts do not apply to hosting, domain or integrations.

## SEO, QA and variants

Unique editable titles/descriptions/headings/canonicals, internal links, optimized WebP, alt text, mobile layout and WebPage schema. Demo is noindex with X-Robots-Tag. Add verified TattooParlor/LocalBusiness structured data when actual address, phone and hours are confirmed. No city clones or ranking promise.

Run `python build.py`. Five generated pages passed title, heading, metadata, internal link and asset checks; JavaScript passed `node --check`. Production pages and both generated images returned HTTP 200, and the desktop home layout was visually inspected. The form handler prevents default submission and renders a local-only result. Verify a completed browser submission and narrow mobile layout before client launch; confirm the storefront price on the live deployment. Future hero directions: blackwork sketch table, brighter art-gallery studio, color-work artist portrait. Do not duplicate merely for palette.

## Next chat

Treat this file as source context; inspect the repository and latest commit, preserve Vercel hosting and demo-only integration boundaries, work on a branch and preview, and publish real-client changes only after Anthony approves.
