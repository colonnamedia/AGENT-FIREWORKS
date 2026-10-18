(function(){
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.nav');
  if(toggle&&menu){
    toggle.addEventListener('click',()=>{
      const isOpen=toggle.getAttribute('aria-expanded')!=='true';
      toggle.setAttribute('aria-expanded',String(isOpen));
      menu.classList.toggle('open',isOpen);
      document.body.classList.toggle('menu-open',isOpen);
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      toggle.setAttribute('aria-expanded','false'); menu.classList.remove('open');document.body.classList.remove('menu-open');
    }));
  }
  const form=document.querySelector('#consultation-form');
  if(!form) return;
  const dateField=form.querySelector('input[type="date"]');
  const status=form.querySelector('#form-status');
  function todayLocal(){ const n=new Date();n.setMinutes(n.getMinutes()-n.getTimezoneOffset());return n.toISOString().slice(0,10); }
  dateField.min=todayLocal();
  form.addEventListener('submit',event=>{
    event.preventDefault();
    status.classList.remove('visible');status.textContent='';
    if(!form.checkValidity()) { form.reportValidity();return; }
    if(dateField.value<todayLocal()){
      dateField.setCustomValidity('Choose today or a future date.');dateField.reportValidity();dateField.setCustomValidity('');return;
    }
    // Only browser validation. Do not transmit, store, book, or echo user inputs.
    form.reset();
    status.textContent='Demo validated successfully. Nothing was sent, saved, booked, shared or paid for. The sample fields have been cleared.';
    status.classList.add('visible');
    status.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
})();
