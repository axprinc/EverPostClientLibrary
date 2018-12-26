import ThumbnailNavigation from './thumbnail_navigation.js';
import RewardNavigation from './reward_navigation.js';

window.EverPostClient = class {
  constructor(payload) {
    const thumbnailNabigation = new ThumbnailNavigation(payload.meta.navigation.thumbnails);
    thumbnailNabigation.applyVisibility();
    const rewardNavigation = new RewardNavigation(payload.meta.navigation.show_reward);
    rewardNavigation.applyVisibility();
  }
}

// export { EverPostClient };
// module.exports = EverPostClient;