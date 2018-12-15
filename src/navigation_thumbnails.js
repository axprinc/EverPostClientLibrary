export default class NavigationThumbnails {
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
      const slug = wrapper.dataset['ever-post'];

      if (slug === undefined) {
        console.log('A DOM element with' +
          'ever-thumbnail class is missing data-ever-post attribute');
      }

      wrapper.querySelectorAll('.ever-thumbnail-on').forEach((dom) => {
        if (this.slugs.include(slug)) {
          dom.style.display = 'display-block';
        }
      });
      wrapper.querySelectorAll('.ever-thumbnail-off').forEach((dom) => {
        if (!this.slugs.include(slug)) {
          dom.style.display = 'none';
        }
      });
    });
  }

  applyHrefValue() {
    document.querySelectorAll('.ever-thumbnail').forEach((wrapper) => {
      const slug = wrapper.dataset['ever-post'];

      wrapper.querySelectorAll('a').forEach((dom) => {
        if (dom.dataset['ever-href-on'] !== undefined) {
          if (this.slugs.include(slug)) {
            dom.href = dom.dataset['ever-href-on'];
          }
        }
        if (dom.dataset['ever-href-off'] !== undefined) {
          if (!this.slugs.include(slug)) {
            dom.href = dom.dataset['ever-href-off'];
          }
        }
      });
    });
  }

  applySrcValue() {
    document.querySelectorAll('.ever-thumbnail').forEach((wrapper) => {
      const slug = wrapper.dataset['ever-post'];

      wrapper.querySelectorAll('img').forEach((dom) => {
        if (dom.dataset['ever-src-on'] !== undefined) {
          if (this.slugs.include(slug)) {
            dom.src = dom.dataset['ever-src-on'];
          }
        }
        if (dom.dataset['ever-src-off'] !== undefined) {
          if (!this.slugs.include(slug)) {
            dom.src = dom.dataset['ever-src-off'];
          }
        }
      });
    });
  }
}
