'use strict';
const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('#main-nav');
function closeMenu(){if(!menu||!nav)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open');}
if(menu&&nav){
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('is-open',!open);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus();}});
 window.matchMedia('(min-width: 851px)').addEventListener('change',closeMenu);
}
const heroChoice=document.querySelector('#hero-service'),heroAction=document.querySelector('#hero-action');
if(heroChoice&&heroAction){const base=heroAction.href.split('?')[0];heroChoice.addEventListener('change',()=>{heroAction.href=base+'?service='+encodeURIComponent(heroChoice.value);});}
const form=document.querySelector('#request-form'),summary=document.querySelector('#request-summary'),entries=document.querySelector('#summary-values'),status=document.querySelector('#form-status');
if(form){
 const choice=form.querySelector('select[name=service]'),value=new URLSearchParams(location.search).get('service');
 if(choice&&value!==null&&/^\d+$/.test(value)){const i=Number(value)+1;if(i>0&&i<choice.options.length)choice.selectedIndex=i;}
 form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  entries.replaceChildren();
  for(const field of form.querySelectorAll('select,input:not([type=checkbox])')){
   const label=form.querySelector('label[for="'+field.id+'"]'),dt=document.createElement('dt'),dd=document.createElement('dd');
   dt.textContent=(label?.childNodes[0]?.textContent||field.name).replace('*','').trim();
   dd.textContent=field.tagName==='SELECT'?field.options[field.selectedIndex].text:field.value;
   entries.append(dt,dd);
  }
  const files=document.querySelector('#local-photos');
  if(files){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent='Example photos';dd.textContent=files.files.length+' local preview(s); nothing uploaded';entries.append(dt,dd);}
  form.hidden=true;summary.hidden=false;status.textContent='Preview complete. Nothing was sent, stored or booked.';document.querySelector('#summary-title').focus();
 });
 form.querySelector('#preview-fields').disabled=false;
 document.querySelector('#edit-request').addEventListener('click',()=>{summary.hidden=true;form.hidden=false;status.textContent='Edit your preferences and preview again.';form.querySelector('input').focus();});
}
const dateMin=(()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');})();
document.querySelectorAll('input[type=date]').forEach(el=>el.min=dateMin);
function sync(name,value){const field=form?.querySelector('[name="'+name+'"]');if(field)field.value=value;}
const pathButtons=[...document.querySelectorAll('[data-path]')],timeChoice=document.querySelector('#time-choice');
if(pathButtons.length){
 pathButtons.forEach(button=>button.addEventListener('click',()=>{pathButtons.forEach(b=>b.setAttribute('aria-pressed','false'));button.setAttribute('aria-pressed','true');sync('service',button.textContent);document.querySelector('#tool-output').textContent=button.textContent+' · '+(timeChoice?.value||'Flexible')+'. A real provider confirms scope and time.';}));
 timeChoice?.addEventListener('change',()=>{sync('time',timeChoice.value);const selected=pathButtons.find(x=>x.getAttribute('aria-pressed')==='true');if(selected)document.querySelector('#tool-output').textContent=selected.textContent+' · '+timeChoice.value+'. A real provider confirms scope and time.';});
}
for(const [id,name] of [['rooms-choice','rooms'],['frequency-choice','frequency'],['project-choice','service'],['budget-choice','budget'],['stylist-service','service'],['stylist-choice','stylist'],['patient-service','service']]){
 const control=document.getElementById(id);if(control)control.addEventListener('change',()=>{sync(name,control.value);const out=document.querySelector('#tool-output');if(out){const a=document.querySelector('#rooms-choice'),f=document.querySelector('#frequency-choice'),p=document.querySelector('#project-choice'),b=document.querySelector('#budget-choice');out.textContent=a? a.value+', '+f.value.toLowerCase()+'. A provider confirms scope and price.':p? p.value+', '+b.value.toLowerCase()+'. A site visit shapes the proposal.':'';}});
}
const dates=document.querySelector('#sample-dates');
if(dates){
 dates.replaceChildren();const now=new Date();now.setHours(12,0,0,0);
 for(let i=1;i<=5;i++){
  const d=new Date(now);d.setDate(d.getDate()+i);
  const iso=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  const label=d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});
  const button=document.createElement('button');button.type='button';button.textContent=label;button.setAttribute('aria-label','Example preference: '+label);button.setAttribute('aria-pressed','false');
  button.addEventListener('click',()=>{dates.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));button.setAttribute('aria-pressed','true');sync('date',iso);document.querySelector('#appointment-output').textContent='Example preference: '+label+'. No appointment is available or booked through this demo.';});
  dates.append(button);
 }
}
const upload=document.querySelector('#local-photos');let photoUrls=[];
function clearLocalPhotos(){photoUrls.forEach(url=>URL.revokeObjectURL(url));photoUrls=[];if(upload)upload.value='';document.querySelector('#local-photo-preview')?.replaceChildren();}
if(upload){
 upload.addEventListener('change',()=>{
  photoUrls.forEach(url=>URL.revokeObjectURL(url));photoUrls=[];
  const box=document.querySelector('#local-photo-preview');box.replaceChildren();const files=[...upload.files];
  if(files.length>3||files.some(f=>!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>5*1024*1024)){box.textContent='Choose up to three JPG, PNG or WebP images, each under 5 MB. Nothing was uploaded.';upload.value='';return;}
  for(const file of files){const figure=document.createElement('figure'),img=document.createElement('img'),caption=document.createElement('figcaption'),src=URL.createObjectURL(file);photoUrls.push(src);img.src=src;img.alt='Local example photograph, not uploaded';caption.textContent=file.name;figure.append(img,caption);box.append(figure);}
 });
 document.querySelector('#clear-photos').addEventListener('click',clearLocalPhotos);
 window.addEventListener('pagehide',clearLocalPhotos);
}
