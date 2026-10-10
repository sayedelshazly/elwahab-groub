(() => {
  const preloader = document.getElementById('page-preloader');
  if (preloader) {
    const startedAt = performance.now();
    let dismissed = false;

    const dismissPreloader = () => {
      if (dismissed) return;
      dismissed = true;

      window.setTimeout(() => {
        preloader.classList.add('is-done');
        window.setTimeout(() => {
          document.documentElement.classList.remove('has-preloader');
          preloader.remove();
        }, 420);
      }, Math.max(0, 520 - (performance.now() - startedAt)));
    };

    window.addEventListener('load', dismissPreloader, { once: true });
    window.setTimeout(dismissPreloader, 22200);
    if (document.readyState === 'complete') dismissPreloader();
  }

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const navLinks = [...document.querySelectorAll('.main-nav a')];

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });

  navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navLinks.forEach(item => item.classList.toggle('active', item === link));
  }));

  const track = document.getElementById('gallery-track');
  const cards = track ? [...track.querySelectorAll('.gallery-card')] : [];
  const current = document.getElementById('current-slide');
  const progress = document.getElementById('gallery-progress');
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');

  function stepSize() {
    const first = cards[0];
    if (!first) return 0;
    const styles = getComputedStyle(track);
    return first.getBoundingClientRect().width + (parseFloat(styles.columnGap) || 0);
  }
  function updateGallery() {
    if (!track) return;
    const step = stepSize();
    const index = step ? Math.round(track.scrollLeft / step) : 0;
    const visible = Math.max(1, Math.floor(track.clientWidth / (step || 1)));
    const maxIndex = Math.max(0, cards.length - visible);
    const safeIndex = Math.min(index, maxIndex);
    current.textContent = String(safeIndex + 1).padStart(2, '0');
    progress.style.width = `${Math.min(100, ((safeIndex + visible) / cards.length) * 100)}%`;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    prev.style.opacity = prev.disabled ? '.45' : '1';
    next.style.opacity = next.disabled ? '.45' : '1';
  }
  function moveGallery(direction) {
    track.scrollBy({ left: stepSize() * direction, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  if (track) {
    prev.addEventListener('click', () => moveGallery(-1));
    next.addEventListener('click', () => moveGallery(1));
    track.addEventListener('scroll', updateGallery, { passive: true });
    window.addEventListener('resize', updateGallery);
    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); moveGallery(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); moveGallery(-1); }
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  updateGallery();
})();
