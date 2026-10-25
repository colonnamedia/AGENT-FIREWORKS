from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import argparse,re,hashlib
p=argparse.ArgumentParser();p.add_argument('--dist',default=str(Path(__file__).parent/'dist'));p.add_argument('--prefix',default='');a=p.parse_args();root=Path(a.dist);prefix=a.prefix.rstrip('/')
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[]
 def handle_starttag(self,t,v):self.tags.append((t,dict(v)))
titles=set()
for page in root.rglob('index.html'):
 s=page.read_text();d=Doc();d.feed(s)
 assert not re.search(r'Lynn|Sambuco|Bella|teambellabody',s,re.I),page
 title=re.findall(r'<title>(.*?)</title>',s);assert len(title)==1;assert title[0] not in titles; titles.add(title[0])
 assert len([x for t,x in d.tags if t=='h1'])==1,page
 assert len([x for t,x in d.tags if t=='meta' and x.get('name')=='description'])==1,page
 assert len([x for t,x in d.tags if t=='link' and x.get('rel')=='canonical'])==1,page
 assert 'noindex,follow' in s,page
 for t,x in d.tags:
  for attr in ('href','src'):
   url=x.get(attr,'');u=urlsplit(url)
   if not url.startswith('/') or url.startswith('//'):continue
   assert u.path.startswith(prefix+'/'),url
   f=root/u.path[len(prefix):].lstrip('/')
   assert f.is_file() or (f/'index.html').is_file(),(page,url)
assert len(titles)==8,len(titles)
assets=list((root/'assets').glob('*.webp'));assert len(assets)==4
assert len({hashlib.sha256(f.read_bytes()).hexdigest() for f in assets})==4
js=(root/'site.js').read_text();assert not any(x in js for x in ['fetch(','sendBeacon','XMLHttpRequest','localStorage'])
print('PASS: 8 static pages, route metadata, internal links, four distinct assets, name replacement, local-only forms')
