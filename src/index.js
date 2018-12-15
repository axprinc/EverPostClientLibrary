// import Cat from './cat.js';
// import Dog from './dog.js';
import NavigationThumbnails from './navigation_thumbnails.js';

class EverPostClient {
  constructor(payload) {
    NavigationThumbnails(payload.meta.navigation.thumbnails);
  }
}

export { EverPostClient };
