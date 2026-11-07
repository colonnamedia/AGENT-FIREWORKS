# Lattice Commercial Electric — FireWorks project handoff

## Identity and source
Fictional commercial electrical contracting website demo. Source: `colonnamedia/AGENT-FIREWORKS/templates/lattice-commercial-electric` on branch `templates/lattice-commercial-electric-20261107`. Built independently from the Keystone Current site; no client data, destination, analytics or credentials are copied. Tested implementation commit `878032a509d4a977a6d4ea1497c20f6d11a3c0d2` (includes hero crop refinement).

## Hosting and status
Vercel project `prj_72fZlmf21Lx4ESPQrm8qtL7FHiFA`, production deployment `dpl_D1gFbv5gevg71vqQixgP8v7oUneK`, canonical `https://lattice-commercial-electric.vercel.app/`. Deployment is READY, but Vercel Authentication is enabled for all non-custom domains. Public visitor access and catalog listing are therefore blocked. Demo pages are `noindex,nofollow`.

## Stack and build
Python 3 standard library static generator: `python build.py`; output `dist/`. Complete route HTML, per-route metadata and sitemap are generated from the `PAGES` route list. Vercel serves static files. No runtime data fetch or hydration.

## Public routes
`/`, `/services/`, `/our-process/`, `/project-preview/`; unknown paths use `404.html`.

## Images and claims
Five original generated WebP photos in `assets/`, with alt text, dimensions and below-fold lazy loading. They are illustrative. Sample case-study and review slots contain no invented review, rating, credential, job or statistic.

## Integrations
| Integration | State | Notes |
| --- | --- | --- |
| Inquiry delivery | Not selected | The browser-only form validates and displays a local result. |
| Booking, payments, analytics, CRM | Not selected | No external destinations or keys. |

## Verification and launch requirements
`python build.py` and `node --check script.js` passed. Local checks passed for four static routes, route metadata, five distinct image hashes, image alt/dimensions, sitemap and 404. Authenticated production fetch returned the four distinct route documents and five image assets with HTTP 200; an unknown path returned HTTP 404. Desktop hero crop was visually inspected. Browser confirmed the next-slide control and required form validation followed by local-only confirmation. Mobile viewport and touch/keyboard slider visual interaction remain to be checked before public catalog publication. A real electrical provider must supply identity, service area, licensing, insurance, hours, emergency availability, service terms, approved photographs and source-backed reviews; then configure and test the approved inquiry destination.

## Next chat
Read this handoff, inspect the latest source commit and deployment, preserve the hosting and local-only integration decisions, work on a branch and preview changes, and do not publish a real client site without Anthony's approval.
