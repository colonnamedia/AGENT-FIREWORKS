const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{let open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
const form=document.querySelector('#estimate-form');
if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;document.querySelector('#form-result').textContent='Demo preview complete. No request was sent, stored or booked.';form.reset()})}
