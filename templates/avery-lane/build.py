"""Build the name-and-photography derivative of the approved trainer layout."""
from pathlib import Path
import argparse,re,shutil
ROOT=Path(__file__).resolve().parent
p=argparse.ArgumentParser();p.add_argument('--output',default=str(ROOT/'dist'));p.add_argument('--prefix',default='');p.add_argument('--origin',default='https://avery-lane.fireworks-demo.example');a=p.parse_args()
out=Path(a.output);out.mkdir(parents=True,exist_ok=True);prefix=a.prefix.rstrip('/');origin=a.origin.rstrip('/')
for f in (ROOT/'source').rglob('*'):
 if not f.is_file():continue
 target=out/f.relative_to(ROOT/'source');target.parent.mkdir(parents=True,exist_ok=True)
 if f.suffix in ('.html','.css','.js','.xml','.txt'):
  s=f.read_text().replace('https://avery-lane.fireworks-demo.example',origin)
  if f.suffix=='.html':s=re.sub(r'((?:href|src|action)=["\'])/(?!/)',lambda m:m.group(1)+prefix+'/',s)
  if f.suffix=='.css':s=re.sub(r'(url\(["\']?)/(?!/)',lambda m:m.group(1)+prefix+'/',s)
  target.write_text(s)
 else:shutil.copy2(f,target)
(out/'404.html').write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | Avery Lane Training</title><meta name="description" content="This demo page could not be found."><link rel="stylesheet" href="'+prefix+'/style.css"></head><body><main class="wrap section"><p class="eyebrow">AVERY LANE TRAINING</p><h1>Page not found.</h1><a href="'+prefix+'/">Return to the home page</a></main></body></html>')
print('Built 8 static pages and 404')
