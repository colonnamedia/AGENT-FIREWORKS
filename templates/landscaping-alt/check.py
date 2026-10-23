"""Verify complete public HTML, unique local photos, route metadata and safe demo controls."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import argparse,json,hashlib,subprocess
R=Path(__file__).resolve().parent
ap=argparse.ArgumentParser();ap.add_argument('--dist',default=str(R/'dist'));ap.add_argument('--prefix',default='');a=ap.parse_args();D=Path(a.dist);prefix=a.prefix.rstrip('/')
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.text=[]
 def handle_starttag(self,t,attrs):self.tags.append((t,dict(attrs)))
 def handle_data(self,d):self.text.append(d)
m=json.loads((D/'rendering-manifest.json').read_text());assert len(m)==5
seen_titles=set();seen_desc=set()
for row in m:
 raw=(D/row['path'].strip('/')/'index.html').read_text();doc=Doc();doc.feed(raw)
 find=lambda t,**attrs:[v for tag,v in doc.tags if tag==t and all(v.get(k)==value for k,value in attrs.items())]
 assert len(find('h1'))==1 and len(find('title'))==1
 assert len(find('meta',name='description'))==1
 assert find('meta',name='description')[0]['content']==row['description']
 assert find('link',rel='canonical')[0]['href']==row['canonical']
 assert find('meta',property='og:url')[0]['content']==row['canonical']
 assert find('meta',property='og:title')[0]['content']==row['title']
 assert find('meta',name='robots')[0]['content']=='noindex,follow'
 assert row['title'] not in seen_titles and row['description'] not in seen_desc
 seen_titles.add(row['title']);seen_desc.add(row['description']);assert len(' '.join(doc.text))>700
 for tag,v in doc.tags:
  for key in ['href','src']:
   value=v.get(key,'');u=urlsplit(value)
   if u.scheme or not u.path:continue
   assert u.path.startswith(prefix+'/'),value
   path=D/unquote(u.path[len(prefix):]).lstrip('/')
   assert path.is_file() or (path/'index.html').is_file(),value
  if tag=='img':assert v.get('alt') and v.get('width') and v.get('height')
  if tag=='form':assert not v.get('action') and not v.get('method')
 if row['path']=='/':
  images=find('img');assert len(images)==5
  hashes={hashlib.sha256((D/v['src'][len(prefix):].lstrip('/')).read_bytes()).hexdigest() for v in images};assert len(hashes)==5
 if find('form'):assert 'disabled' in find('fieldset',id='preview-fields')[0]
assert len(seen_titles)==5 and (D/'404.html').is_file()
assert (D/'sitemap.xml').read_text().count('<loc>')==5
js=(R/'script.js').read_text();assert not any(x in js for x in ['fetch(', 'XMLHttpRequest', 'sendBeacon', 'localStorage', 'sessionStorage', '.innerHTML'])
assert 'URL.revokeObjectURL' in js
subprocess.run(['node','--check',str(R/'script.js')],check=True)
print('PASS 5 complete HTML routes, metadata, links, 5 distinct local photos, sitemap/404 and local-only script')
