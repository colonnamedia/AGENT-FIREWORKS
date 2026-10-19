# Alder & Stone — FireWorks Law firm template

Fictional five-page static demo. Five distinct local Pexels photos on the homepage; no made-up reviews, credentials or business results. JavaScript enhances navigation and locally validates the request preview; content and SEO metadata are complete HTML.

Build: `python3 build.py && python3 check.py` (Python 3.10+, standard library only). Or `npm run build`. Output: `dist/`.

Set `SITE_URL` to the approved client origin when building. The default `.example` canonical is intentionally a placeholder. Demos carry `noindex,follow`; approve the actual domain and public indexing policy before launch. Deploy the static `dist` directory. Vercel clean URLs are configured; no catchall rewrite.

Source content: `site.json`. Styles and scripts are local. Photography sources: `PHOTO-SOURCES.md`. No external fonts, trackers, APIs, cookies, storage, accounts, payments, email providers or booking tools are included.

The root template is reusable independently. `build.py --output /absolute/path --prefix /preview-prefix` supports internal preview only. Production uses no prefix.

See FIREWORKS-PROJECT.md for setup, verified status and client launch requirements.
