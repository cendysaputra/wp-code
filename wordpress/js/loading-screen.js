<style>
html.preloader-active,
html.preloader-active body {
  overflow: hidden !important;
  scrollbar-gutter: stable;
}

#site-preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dua panel yang membuka ke kiri & kanan */
#site-preloader .preloader-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50.5%;
  background: #ffffff;
  transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
  will-change: transform;
}

#site-preloader .preloader-left  { left: 0; }
#site-preloader .preloader-right { right: 0; }

#site-preloader .preloader-logo {
  position: relative;
  z-index: 1;
  width: clamp(140px, 22vw, 240px);
  height: auto;
  opacity: 0;
  transform: translateY(12px);
  animation: preloader-logo-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  transition: opacity 0.4s ease, transform 0.4s ease;
  will-change: opacity, transform;
}

@keyframes preloader-logo-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* State: preloader dibuka */
#site-preloader.is-revealing {
  pointer-events: none;
}

#site-preloader.is-revealing .preloader-left  { transform: translateX(-100%); }
#site-preloader.is-revealing .preloader-right { transform: translateX(100%); }

#site-preloader.is-revealing .preloader-logo {
  opacity: 0;
  transform: translateY(-12px);
  transition-duration: 0.35s;
}

/* Preloader disembunyikan (halaman non-target / sudah pernah dikunjungi) */
#site-preloader[hidden] {
  display: none;
}

/* Aksesibilitas: hormati prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  #site-preloader .preloader-panel,
  #site-preloader .preloader-logo {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }

  #site-preloader .preloader-logo {
    opacity: 1;
    transform: none;
  }
}
</style>

<div id="site-preloader" role="status" aria-live="polite" aria-label="Memuat halaman" hidden>
  <div class="preloader-panel preloader-left"></div>
  <div class="preloader-panel preloader-right"></div>
  <img
    class="preloader-logo"
    src="/wp-content/uploads/2026/04/Murova-Logo.png"
    alt=""
    width="240"
    height="80"
    fetchpriority="high"
    decoding="async">
</div>

<script>
(function () {
  'use strict';

  var CONFIG = {
    minDuration: 1500,   // durasi minimal preloader tampil (ms)
    revealDuration: 900, // durasi animasi buka — samakan dgn transition panel di <style>
    safetyTimeout: 8000, // paksa tutup kalau event `load` tidak pernah datang
    homeOnly: true,      // false = tampil di semua halaman
    oncePerSession: true // false = tampil tiap kali buka halaman
  };

  var STORAGE_KEY = 'site_preloader_visited';

  var start = Date.now();
  var root = document.documentElement;
  var preloader = document.getElementById('site-preloader');
  if (!preloader) return;

  function readVisited() {
    try {
      return window.sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function markVisited() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
    }
  }

  function isEditor() {
    return (
      window.self !== window.top ||
      /(^|[?&])(elementor-preview|preview|customize_changeset_uuid)=/.test(window.location.search) ||
      root.classList.contains('elementor-editor-active')
    );
  }

  function isHomepage() {
    var path = window.location.pathname.replace(/\/+$/, '');
    return (
      path === '' ||
      path === '/index.php' ||
      path === '/index.html' ||
      document.body.classList.contains('home')
    );
  }

  var skip =
    isEditor() ||
    (CONFIG.homeOnly && !isHomepage()) ||
    (CONFIG.oncePerSession && readVisited());

  if (skip) {
    preloader.remove();
    return;
  }

  preloader.hidden = false;
  root.classList.add('preloader-active');
  markVisited();

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  var done = false;

  function reveal() {
    if (done) return;
    done = true;

    preloader.classList.add('is-revealing');
    root.classList.remove('preloader-active');
    window.scrollTo(0, 0);

    setTimeout(function () {
      if (preloader.parentNode) preloader.remove();
      document.dispatchEvent(new CustomEvent('preloader:done'));
    }, CONFIG.revealDuration);
  }

  function scheduleReveal() {
    var remaining = Math.max(0, CONFIG.minDuration - (Date.now() - start));
    setTimeout(reveal, remaining);
  }

  if (document.readyState === 'complete') {
    scheduleReveal();
  } else {
    window.addEventListener('load', scheduleReveal, { once: true });
  }

  // Jaring pengaman: gambar/font yang gagal load tidak boleh mengunci halaman.
  setTimeout(reveal, CONFIG.safetyTimeout);
})();
</script>
