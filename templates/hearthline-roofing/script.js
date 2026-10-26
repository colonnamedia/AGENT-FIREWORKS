(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open menu');
        nav.classList.remove('open');
      }
    });
  }

  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const track = slider.querySelector('.slides');
    const dots = [...slider.querySelectorAll('[data-slide]')];
    let current = 0;
    const show = index => {
      current = (index + dots.length) % dots.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === current)));
    };
    slider.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
    slider.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    slider.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        show(current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    let touchX = null;
    slider.addEventListener('touchstart', event => { touchX = event.changedTouches[0]?.screenX ?? null; }, { passive: true });
    slider.addEventListener('touchend', event => {
      if (touchX === null) return;
      const delta = touchX - (event.changedTouches[0]?.screenX ?? touchX);
      if (Math.abs(delta) > 45) show(current + (delta > 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }

  const form = document.querySelector('#request-form');
  if (form) {
    const summary = document.querySelector('#request-summary');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const values = document.querySelector('#summary-values');
      values.replaceChildren();
      for (const [label, key] of [['Name', 'name'], ['Email', 'email'], ['Project', 'project'], ['Concern', 'concern'], ['Window', 'window']]) {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = label;
        dd.textContent = String(data.get(key) || '');
        values.append(dt, dd);
      }
      form.hidden = true;
      summary.hidden = false;
      summary.querySelector('h2').setAttribute('tabindex', '-1');
      summary.querySelector('h2').focus();
    });
    document.querySelector('#edit-request').addEventListener('click', () => {
      summary.hidden = true;
      form.hidden = false;
      form.querySelector('input').focus();
    });
  }
})();
