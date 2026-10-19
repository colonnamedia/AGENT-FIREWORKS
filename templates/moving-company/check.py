"""Assert static route delivery, metadata, link targets and photo invariants."""
from pathlib import Path
from html.parser import HTMLParser
from html import escape
import json,hashlib,sys
R=Path(__file__).parent;D=R/'dist'
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.text=[]
 def handle_starttag(self,t,a):self.tags.append((t,dict(a)))
 def handle_data(self,d):self.text.append(d)
manifest=json.loads((D/'rendering-manifest.json').read_text())
assert len(manifest)==5
for row in manifest:
 p=D/row['path'].strip('/')/'index.html';doc=Doc();raw=p.read_text();doc.feed(raw)
 sel=lambda t,**attrs:[a for tag,a in doc.tags if tag==t and all(a.get(k)==v for k,v in attrs.items())]
 assert len(sel('title'))==1 and escape(row['title']) in raw
 assert len(sel('h1'))==1
 assert len(sel('meta',name='description'))==1
 assert sel('link',rel='canonical')[0]['href']==row['canonical']
 assert sel('meta',property='og:title')[0]['content']==row['title']
 assert sel('meta',property='og:description')[0]['content']==row['description']
 assert len(sel('meta',name='robots'))==1 and 'noindex' in sel('meta',name='robots')[0]['content']
 assert len(' '.join(doc.text))>500
 for tag,a in doc.tags:
  for attr in ['href','src']:
   v=a.get(attr,'')
   if v.startswith('/'):
    target=v.split('?')[0].split('#')[0]
    f=D/target.lstrip('/')
    assert f.is_file() or (f/'index.html').is_file(),(p,v)
    if '#' in v: assert f'id="{v.split("#",1)[1]}"' in ((f/'index.html').read_text() if f.is_dir() else f.read_text())
  if tag=='img':assert a.get('alt') and a.get('width') and a.get('height') and a.get('loading')
 assert all('action' not in a for a in sel('form'))
 if sel('form'):assert len([a for a in sel('fieldset') if 'disabled' in a])==1
 print('PASS HTML, metadata, assets and internal links:',row['path'])
doc=Doc();doc.feed((D/'index.html').read_text());images=[a['src'] for t,a in doc.tags if t=='img'];assert len(images)==5 and len(set(images))==5
assert len({hashlib.sha256((D/x.lstrip('/')).read_bytes()).hexdigest() for x in images})==5
assert (D/'404.html').is_file() and len((D/'sitemap.xml').read_text().split('<loc>'))==6
js=(R/'script.js').read_text();assert not any(x in js for x in ['fetch(', 'XMLHttpRequest','localStorage','sessionStorage','sendBeacon'])
assert 'textContent' in js and '.innerHTML' not in js
print('PASS five distinct local homepage photos; 404; sitemap; no transmitting or persistent form code')
