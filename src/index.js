// import Cat from './cat.js';
// import Dog from './dog.js';
import NavigationThumbnails from './navigation_thumbnails.js';

window.EverPostClient = class {
  constructor(payload) {
    const thumbnails = new NavigationThumbnails(payload.meta.navigation.thumbnails);
    thumbnails.applyVisibility();    
  }
}

// export { EverPostClient };
// module.exports = EverPostClient;