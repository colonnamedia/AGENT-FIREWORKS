#!/usr/bin/env python3
from pathlib import Path
import re

root=Path(__file__).parent
pages=["index.html","coaching.html","about.html","pricing.html","results.html","faq.html","start.html"]
for page in pages:
    text=(root/page).read_text()
    assert '<title>' in text and 'meta name="description"' in text and 'rel="canonical"' in text, page
    assert 'FICTIONAL' in text and 'FORMS DO NOT TRANSMIT' in text, page
    for href in re.findall(r'href="([^"#]+\.html)"',text):
        assert (root/href).exists(), f"{page}: missing {href}"
assert (root/'assets/forge-hero.webp').stat().st_size > 20000
assert 'Nothing was transmitted, stored, booked, or charged' in (root/'script.js').read_text()
assert 'grid-template-columns:minmax(0,1fr) 180px 210px' in (root/'styles.css').read_text()
print(f"Verified {len(pages)} pages, routes, SEO, demo safety, stacked pricing layout, and original hero asset.")
