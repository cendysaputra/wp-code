if (window.matchMedia('(min-width: 921px)').matches) {
  if (document.querySelector('.share-link')) {
    const copyToClipboard = async text => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }

      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand('copy');
      textarea.remove();

      if (!copied) {
        throw new Error('Unable to copy the link');
      }
    };

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

        try {
          await copyToClipboard(window.location.href);
        } catch (error) {
          return;
        }
        
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