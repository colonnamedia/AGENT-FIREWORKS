# Avery Lane Training

Name-and-photography duplicate of Anthony's current Bella Body personal-training preview, retrieved from the production Vercel site on 2026-10-25. The original site was not edited.

Preserved: layout, colors, typography, section order, training copy structure, pricing layout, service-area structure, calls to action, mobile behavior and local-only forms. Changed: coach/business identity and four image assets. Portfolio links now stay within this demo. Name-based metadata and asset URLs are updated for the demo. Existing photo credit becomes an accurate generated-imagery / fictional-coach disclosure.

The original homepage uses two photo placements. These are intentionally retained, overriding the general 4–5 homepage-photo rule for this exact-duplicate request. Four distinct new photographs appear across the complete site.

## Build and verify

`python build.py`

`python check.py`

For the storefront:

`python build.py --output /path/to/storefront/public/demos/avery-lane --prefix /demos/avery-lane --origin https://fireworks-websitebuilder.com/demos/avery-lane`

`python check.py --dist /path/to/storefront/public/demos/avery-lane --prefix /demos/avery-lane`

Eight static HTML routes: `/`, `/about/`, `/training/`, `/pricing/`, `/service-areas/`, `/gallery/`, `/contact/`, `/start/`. Includes a separate 404, sitemap and robots file. Demos retain noindex. Canonicals and social metadata are generated from the selected origin.

Verification: all eight routes have unique titles and route metadata, internal links resolve, original client names/links/images are removed, four asset hashes are distinct, local inquiry modal completes without network delivery, mobile hero is visible, pricing stacks, mobile navigation opens. Desktop/mobile previews inspected at 390px and desktop width.

Before client launch: replace sample biography, qualifications, IFBB/counseling references and service facts with verified client information; approve prices, policies, location and contact details; configure/test approved inquiry delivery. No purchases, bookings, emails or real inquiries are performed by demo forms.
