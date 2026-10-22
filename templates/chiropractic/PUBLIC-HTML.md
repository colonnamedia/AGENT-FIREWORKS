# Public HTML delivery

The Python standard-library build renders each page completely at build time. No rendering layer or hydration is needed. Essential page text, links, service detail and one H1 are in response HTML. Titles, descriptions, canonical and social metadata derive from the same route builder; sitemap derives from the rendering manifest. Five public routes plus a dedicated 404.html. Demos use noindex,follow.

Forms have disabled controls until the local script attaches its submit handler. Validation and the summary use local DOM state only; no transmitting or persistent storage. Optional local photos use object URLs, file count/type/size checks and revocation. Example calendars use browser-local future date preferences, never actual availability.

Production host: existing FireWorks Render storefront static middleware serves published output under /demos/chiropractic/. Its /demos/ catch-all sends the dedicated 404 with HTTP 404. Verify direct response HTML, assets, metadata and nested refreshes after any domain, prefix, route or content change.
