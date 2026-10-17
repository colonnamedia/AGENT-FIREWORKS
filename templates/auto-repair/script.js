const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const nav=document.querySelector('#nav');const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
const form=document.querySelector('#service-form');
if(form){
 const params=new URLSearchParams(location.search);const service=params.get('service');
 if(service&&Array.from(form.elements.service.options).some(o=>o.value===service))form.elements.service.value=service;
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const values=new FormData(form);const result=document.querySelector('#form-result');
  const name=String(values.get('name')||'').trim();const vehicle=String(values.get('vehicle')||'').trim();
  result.textContent=`Demo preview for ${name}: ${values.get('year')} ${vehicle}, ${values.get('service')}. This request stayed in your browser. It was not sent, stored, booked or monitored. A real shop must confirm availability and next steps.`;
  result.focus();
 });
}
