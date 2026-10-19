# Public HTML

Strategy: dependency-free static generation with Python, not a JavaScript app shell. All five public routes are generated from site.json and build.py. Metadata and sitemap share the same route manifest. The JS-enhanced form and menus do not produce the page content.

Routes: `/`, `/services/`, `/process/`, `/our-approach/`, `/discovery/`. Each has one H1, title, description, canonical and matching social metadata. `404.html` is a dedicated error document. Unknown URLs must retain HTTP 404 on the final host. No fallback-to-home rewrite is configured.

Build/check: `python3 build.py && python3 check.py`. Check asserts page content, route metadata, internal link targets, image dimensions/alt/loading, five distinct photo files, sitemap and absence of form network/storage code. Demo pages are noindex. Set SITE_URL and confirm indexing before a client launch.

Form: local validation, text-only summary, edit/retry, no transmission or persistence. No delivery endpoint or booking integration. Per-client delivery must be separately configured and tested. None selected for this demo.
