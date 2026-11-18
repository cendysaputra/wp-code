<script>
if (document.querySelector('.share-link')) {
  document.querySelectorAll('.share-link').forEach(el => {
    el.style.pointerEvents = 'auto';
    el.style.cursor = 'pointer';

    let parent = el.parentElement;
    while (parent) {
      parent.style.pointerEvents = 'auto';
      parent = parent.parentElement;
    }

    el.addEventListener('click', async e => {
      e.preventDefault();

      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = window.location.href;
        ta.style.cssText = 'position:fixed; opacity:0;';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }

      if (!window.matchMedia('(min-width: 921px)').matches) return;

      if (document.querySelector('.copied-label')) return;

      const label = Object.assign(document.createElement('span'), {
        className: 'copied-label',
        textContent: 'Copied Link!'
      });

      label.style.cssText = 'position:fixed; bottom:40px; left:50%; transform:translateX(-50%); padding:10px 16px; background:#000; color:#fff; border-radius:4px; white-space:nowrap; z-index:9999;';
      document.body.appendChild(label);

      setTimeout(() => label.remove(), 2000);
    });
  });
}
</script>