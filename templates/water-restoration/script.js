const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const nav=document.querySelector('#nav');const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
const form=document.querySelector('#inquiry');
if(form){
 const requested=new URLSearchParams(location.search).get('service');
 if(requested&&Array.from(form.elements.service.options).some(o=>o.value===requested))form.elements.service.value=requested;
 form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const v=new FormData(form),result=document.querySelector('#result');
  result.textContent=`Demo preview for ${String(v.get('name')).trim()}: ${v.get('service')} at a ${v.get('property')} property in ZIP ${v.get('zip')}. No request was sent or stored. No emergency response, appointment or claim was created.`;
  result.focus();
 });
}
