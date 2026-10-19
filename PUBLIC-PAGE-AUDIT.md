# Public page audit — 19 October 2026

Audited 34 catalog sites and 235 public URLs, including route aliases. Every audited URL now returns HTTP 200, substantive page content, exactly one title and description, and a canonical in the initial response. Normal home/index.html aliases and Kurtz /book → /contact share their declared canonical. Six former JavaScript shells now pre-render their React public pages during the build. The other 28 retain their existing static HTML or static generation.

The new-template and before-client-launch rule is in AGENTS.md and PUBLIC-HTML-STANDARD.md. Each converted repository includes a route manifest, build checks, a generated sitemap and PUBLIC-HTML.md. Unknown direct URLs on all six converted sites return HTTP 404; admin paths retain a separate noindex interactive shell.

| Catalog site | Rendering approach | Audited URLs |
| --- | --- | ---: |
| Influencer Site with Customizable LinkTree | Added React build-time pre-rendering | 5 |
| Hearthstone Hall — Event Venue Website | Preserved existing complete HTML | 5 |
| Steel City Detail — Automotive Detailing Website | Preserved existing complete HTML | 5 |
| Northline Advisory — Consultation Website | Preserved existing complete HTML | 4 |
| Platinum Salon — Salon Website | Preserved existing complete HTML | 3 |
| Kurtz Photography — Photographer Website | Added React build-time pre-rendering | 8 |
| Travel Influencer — Creator Website | Added React build-time pre-rendering | 6 |
| Bistro — Restaurant Website | Preserved existing complete HTML | 1 |
| Kinetic House — Fitness Studio Website | Added React build-time pre-rendering | 2 |
| Butter & Bloom — Cake & Cupcake Website | Added React build-time pre-rendering | 2 |
| Blue Harbor — Plumbing Website | Preserved existing complete HTML | 8 |
| Keystone Current — Electrical Contractor Website | Preserved existing complete HTML | 7 |
| Clearline Pool Care — Pool Maintenance Website | Preserved existing complete HTML | 8 |
| Moss & Muzzle — Pet Grooming Website | Preserved existing complete HTML | 4 |
| Form & Fire — Personal Trainer Website | Preserved existing complete HTML | 13 |
| Forge Strength — Personal Trainer Website | Preserved existing complete HTML | 13 |
| Harbor Dental — Dental Practice Website | Preserved existing complete HTML | 8 |
| Northline Homes — Real Estate Agent Website | Preserved existing complete HTML | 7 |
| Aura & Form — Med Spa Website | Preserved existing complete HTML | 5 |
| Tidyline Cleaning Co. — Cleaning Website | Preserved existing complete HTML | 7 |
| Vesper Ink — Tattoo Studio Website | Preserved existing complete HTML | 6 |
| Current & Clear — Water Restoration Website | Preserved existing complete HTML | 7 |
| Foundry & Frame — Remodeling Website | Preserved existing complete HTML | 7 |
| Hearth & Table — Catering Website | Preserved existing complete HTML | 5 |
| Iron Ridge Roofing — Roofing Website | Preserved existing complete HTML | 5 |
| Three Rivers Comfort — HVAC Website | Preserved existing complete HTML | 7 |
| Rivers & Roots — Landscaping Website | Preserved existing complete HTML | 4 |
| Field & Finish — Painting Contractor Website | Preserved existing complete HTML | 5 |
| Pest Patrol — Pest Control Website | Preserved existing complete HTML | 9 |
| Northline Auto Works — Auto Repair Website | Preserved existing complete HTML | 6 |
| Forgepoint — Industrial Services Website | Preserved existing complete HTML | 6 |
| Contractor / Construction | Preserved existing complete HTML; repaired clean-URL hosting | 5 |
| Protein Product System | Added React build-time pre-rendering | 3 |
| Studio Gym With Registration Integration | Preserved existing complete HTML | 39 |

## Changes and verification

- Converted Kinetic House, Butter & Bloom, Maya Lane, Chel-See-the-world, Kurtz Photography and OMG Goodness. Same React components generate HTML and hydrate in the browser. Initial public link data is embedded for matching server/client output. Important OMG motion content is visible before animation runs.
- Added missing canonical/social URL metadata to Northline Advisory, Steel City Detail, Platinum Salon, Bistro, Moss & Muzzle and Catering public pages. Preserved already-static HTML.
- Sudor's existing SSG already produced its pages. Fixed hosting so /dump-rentals, /our-work, /family and /quote return their own HTML instead of 404. The quote page heading is corrected in source.
- All seven relevant local builds passed. Initial production deployments of the six conversions, six metadata fixes and Sudor hosting were READY and verified by HTTP.
- Browser checks on the six conversions covered initial content, client navigation, mobile menus, contact/order validation and desktop/mobile document widths. Fitness and cake local demo confirmations passed; creator, travel, photography and bakery empty submissions were stopped by validation. No messages, bookings, orders or payments were sent. No application hydration failure was observed; browser-extension errors were excluded.
- Mobile verification found intrinsic-width overflow in both creator link grids. CSS fixes are committed and their final deployments require the final status/readback noted below.

## Separate Fireworks storefront change

Preserved existing pre-rendering and extended its source to 15 public routes, including the Home alias, WebsiteCollection and both declared service pages. Its public catalog is fetched at build time and used in the HTML; empty/unavailable catalog or failed rendering now fails the build. Added one-per-route metadata checks and a matching sitemap. Local build passed 15/15. Service pages also needed the missing-upsell guard and path/slug correction. Commit ad6742c94cd6e5d5a86a9763b0417e799e81c4ce is on main. Live Render deployment verification is tracked separately below.

## Before client launch

- Three existing public /api/links endpoints returned HTTP 500; builds retain their existing demo seed fallback. Repair/configure the public feed if live editable links are required; rebuild after published content changes.
- Fireworks' legacy Portfolio content still queries Base44 in the browser. Its heading, introduction and CTA render, but a safe published-project feed is needed for project cards at build time if that page is used. Do not substitute template demos for actual client projects.
- Live delivery integrations were preserved, not exercised with valid submissions. Configure each client's approved destination, test delivery with approval, replace placeholder business/social details, and recheck final domains and content before launch.
- This is a rendering and interaction audit, not a claim that every production email, purchase or booking integration is connected.

## Final deployment status

Initial HTML/metadata releases for all 13 changed catalog projects were verified READY and live. Follow-up deployments for Maya Lane (75ed1b998c2fa28af723b849b7d7aff9bb1e0831), Travel (15c9e0a3090cd1736864967e963ce0f107e6b990), and Sudor (a4fe311876149fefd8b806ae36bb9484eb68485f) remained QUEUED at the last check. The first two fix mobile link-card overflow; Sudor adds the quote H1. These follow-up changes must be checked when the queue clears.

The storefront commit is on main and builds successfully locally. Render's public domain still served the prior page at the last check. The Render dashboard requires sign-in, so the deployment is not claimed live. The browser disconnected during the initial hosting check and then recovered. No hosting settings or credentials were changed.
