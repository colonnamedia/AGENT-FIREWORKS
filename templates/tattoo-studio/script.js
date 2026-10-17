const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const nav=document.querySelector('#nav');const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
const form=document.querySelector('#consult');
if(form){
 const artist=new URLSearchParams(location.search).get('artist');
 if(artist&&Array.from(form.elements.artist.options).some(o=>o.value===artist))form.elements.artist.value=artist;
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const v=new FormData(form),result=document.querySelector('#result');
  result.textContent=`Demo preview for ${String(v.get('name')).trim()}: ${v.get('style')} concept on the ${v.get('placement')} with ${v.get('artist')}. This stayed in your browser. No artist was contacted, no information stored, and no appointment or deposit created.`;
  result.focus();
 });
}
