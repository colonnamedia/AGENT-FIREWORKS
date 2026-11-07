# Lattice Commercial Electric — FireWorks project handoff

## Identity and source
Fictional commercial electrical contracting website demo. Source: `colonnamedia/AGENT-FIREWORKS/templates/lattice-commercial-electric` on the working branch for this project. Built independently from the Keystone Current site; no client data, destination, analytics or credentials are copied.

## Hosting and status
Proposed Vercel project: `lattice-commercial-electric`, canonical `https://lattice-commercial-electric.vercel.app/`. Public status and commit to be updated after deployment checks. Demo pages are `noindex,nofollow`.

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
Run `python build.py`, static route/asset checks and `node --check script.js`. Confirm direct production routes, 404, keyboard/touch slider, form validation, desktop/mobile image crop and menu. A real electrical provider must supply identity, service area, licensing, insurance, hours, emergency availability, service terms, approved photographs and source-backed reviews; then configure and test the approved inquiry destination.

## Next chat
Read this handoff, inspect the latest source commit and deployment, preserve the hosting and local-only integration decisions, work on a branch and preview changes, and do not publish a real client site without Anthony's approval.
