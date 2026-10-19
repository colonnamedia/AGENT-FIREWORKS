'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){if(!menu||!nav)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open');}
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('is-open',!open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();menu.focus();}});window.matchMedia('(min-width: 851px)').addEventListener('change',closeMenu);}
const form=document.querySelector('#request-form');
if(form){
 const service=form.querySelector('[name=service]');
 const value=new URLSearchParams(location.search).get('service');
 if(service&&value!==null&&/^\d+$/.test(value)){const index=Number(value)+1;if(index>0&&index<service.options.length)service.selectedIndex=index;}
 const summary=document.querySelector('#request-summary');const entries=document.querySelector('#summary-values');const status=document.querySelector('#form-status');
 form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;entries.replaceChildren();for(const field of form.querySelectorAll('select,input:not([type=checkbox])')){const label=form.querySelector(`label[for="${field.id}"]`);const dt=document.createElement('dt');const dd=document.createElement('dd');dt.textContent=(label?.childNodes[0]?.textContent||field.name).replace('*','').trim();dd.textContent=field.tagName==='SELECT'?field.options[field.selectedIndex].text:field.value;entries.append(dt,dd);}form.hidden=true;summary.hidden=false;status.textContent='Preview complete. Nothing was sent, stored or booked.';document.querySelector('#summary-title').focus();});
 form.querySelector('#preview-fields').disabled=false;
 document.querySelector('#edit-request').addEventListener('click',()=>{summary.hidden=true;form.hidden=false;status.textContent='Edit your preferences and preview again.';form.querySelector('input').focus();});
}
const checks=[...document.querySelectorAll('[data-checklist]')];if(checks.length){checks.forEach(input=>input.addEventListener('change',()=>{document.querySelector('#checklist-status').textContent=`${checks.filter(x=>x.checked).length} of ${checks.length} planning items considered.`;}));}
