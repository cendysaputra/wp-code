if (window.matchMedia('(min-width: 921px)').matches) {
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
        
        if (el.querySelector('.copied-label')) return;
        await navigator.clipboard.writeText(window.location.href);
        
        const label = Object.assign(document.createElement('span'), {
          className: 'copied-label',
          textContent: 'Copied Link!'
        });
        
        label.style.cssText = 'position:absolute; top:-12px; right:-120px; padding:8px 12px; background:#000; color:#fff; border-radius:4px; z-index:100;';
        el.style.position = 'relative';
        el.appendChild(label);
        
        setTimeout(() => label.remove(), 500);
      });
    });
  }
}