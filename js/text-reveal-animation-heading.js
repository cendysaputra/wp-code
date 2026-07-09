class TextRevealAnimation {
  constructor(selector, options = {}) {
    this.headings = [...document.querySelectorAll(`${selector}.text-reveal-anim`)];
    this.options = {
      minOpacity: options.minOpacity ?? 0.1,
      maxOpacity: options.maxOpacity ?? 1,
      verticalFactor: options.verticalFactor ?? 0.01,
      horizontalFactor: options.horizontalFactor ?? 0.001
    };
    this.halfHeight = window.innerHeight / 2;
    this.init();
  }

  init() {
    this.headings.forEach(h => this.prepareHeading(h));
    this.handleScroll();

    const onScroll = () => this.handleScroll();
    const onResize = this.debounce(() => {
      this.halfHeight = window.innerHeight / 2;
      this.handleScroll();
    }, 100);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
  }

  prepareHeading(heading) {
    heading.innerHTML = heading.textContent
      .split(' ')
      .map(word => `<span class="reveal-word">${word} </span>`)
      .join('');
    heading.style.opacity = 1;
  }

  handleScroll() {
    const { minOpacity, maxOpacity, verticalFactor, horizontalFactor } = this.options;
    const ih = window.innerHeight;
    const half = this.halfHeight;

    this.headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top >= ih || rect.bottom <= 0) return;

      heading.querySelectorAll('.reveal-word').forEach(word => {
        const wr = word.getBoundingClientRect();
        const opacity = Math.max(minOpacity, Math.min(maxOpacity,
          1 - (verticalFactor * (wr.top - half) + horizontalFactor * wr.left)
        ));
        word.style.opacity = opacity.toFixed(3);
      });
    });
  }

  debounce(func, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => func(...args), wait);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TextRevealAnimation('.heading-with-reveal', {
    minOpacity: 0.1,
    maxOpacity: 1,
    verticalFactor: 0.01,
    horizontalFactor: 0.001
  });
});
