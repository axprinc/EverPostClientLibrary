export default class ThumbnailNavigation {
  constructor(thumbnails) {
    this.slugs = thumbnails.map((thumbnail) => {
      return (thumbnail.slug);
    });
    this.applyVisibility();
    this.applyHrefValue();
    this.applySrcValue();
  }

  applyVisibility() {
    document.querySelectorAll('.ever-thumbnail').forEach((wrapper) => {
      const slug = wrapper.dataset.everPost;

      if (slug === undefined) {
        console.log('[EVER error] A DOM element with' +
          'ever-thumbnail class is missing data-ever-post attribute');
      }

      wrapper.querySelectorAll('.ever-thumbnail-on').forEach((dom) => {
        if (this.slugs.includes(slug)) {
          dom.style.display = 'inline-block';
        } else {
          dom.style.display = 'none';
        }
      });
      wrapper.querySelectorAll('.ever-thumbnail-off').forEach((dom) => {
        if (this.slugs.includes(slug)) {
          dom.style.display = 'none';
        } else {
          dom.style.display = 'inline-block';
        }
      });
    });
  }

  applyHrefValue() {
    document.querySelectorAll('.ever-thumbnail').forEach((wrapper) => {
      const slug = wrapper.dataset.everPost;

      wrapper.querySelectorAll('a').forEach((dom) => {
        if (dom.dataset.everHrefOn !== undefined) {
          if (this.slugs.includes(slug)) {
            dom.href = dom.dataset.everHrefOn;
          }
        }
        if (dom.dataset.everHrefOff !== undefined) {
          if (!this.slugs.includes(slug)) {
            dom.href = dom.dataset.everHrefOff;
          }
        }
      });
    });
  }

  applySrcValue() {
    document.querySelectorAll('.ever-thumbnail').forEach((wrapper) => {
      const slug = wrapper.dataset.everPost;

      wrapper.querySelectorAll('img').forEach((dom) => {
        if (dom.dataset.everSrcOn !== undefined) {
          if (this.slugs.includes(slug)) {
            dom.src = dom.dataset.everSrcOn;
          }
        }
        if (dom.dataset.everSrcOff !== undefined) {
          if (!this.slugs.includes(slug)) {
            dom.src = dom.dataset.everSrcOff;
          }
        }
      });
    });
  }
}
