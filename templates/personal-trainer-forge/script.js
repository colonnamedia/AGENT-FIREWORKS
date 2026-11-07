const navToggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#site-nav');if(navToggle&&nav){navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open))})}
const dialog=document.querySelector('#inquiry-dialog');document.querySelectorAll('.js-open-form').forEach(button=>button.addEventListener('click',()=>{if(!dialog)return;const plan=button.dataset.plan;if(plan){const select=dialog.querySelector('.plan-select');if(select)select.value=plan}dialog.showModal()}));document.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
document.querySelectorAll('.demo-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const result=form.querySelector('.form-result');if(result)result.textContent='Demo complete: your entries were checked only in this browser. Nothing was transmitted, stored, booked, or charged.';form.querySelector('button[type="submit"]').disabled=true}));

const forgeTrack=document.querySelector('.forge-track');
if(forgeTrack){
  const slides=[...forgeTrack.querySelectorAll('.forge-slide')];
  const prev=document.querySelector('.forge-prev');
  const next=document.querySelector('.forge-next');
  const count=document.querySelector('.forge-count');
  let current=0;
  const render=()=>{count.textContent=`${current+1} of ${slides.length}`;prev.disabled=current===0;next.disabled=current===slides.length-1};
  const goTo=index=>{current=Math.max(0,Math.min(slides.length-1,index));forgeTrack.scrollTo({left:current*forgeTrack.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});render()};
  prev.addEventListener('click',()=>goTo(current-1));next.addEventListener('click',()=>goTo(current+1));
  forgeTrack.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();goTo(current+(event.key==='ArrowRight'?1:-1))}});
  let scrollTimer;forgeTrack.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{current=Math.max(0,Math.min(slides.length-1,Math.round(forgeTrack.scrollLeft/forgeTrack.clientWidth)));render()},90)},{passive:true});
  render();
}
