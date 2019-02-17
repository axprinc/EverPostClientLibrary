import ThumbnailNavigation from './thumbnail_navigation.js';
import RewardNavigation from './reward_navigation.js';
import YoutubePlayer from './youtube_player.js';

window.EverPostClient = class {
  constructor(payload) {
    const thumbnailNabigation = new ThumbnailNavigation(payload.meta.navigation.thumbnails);
    thumbnailNabigation.applyVisibility();

    const rewardNavigation = new RewardNavigation(
      payload.meta.navigation.show_reward, payload.body.effective_reward_url);
    rewardNavigation.applyVisibility();

    const youtubePlayer = new YoutubePlayer(payload.body.youtube_id, payload.body.setting);
    youtubePlayer.start();
  }
}

// export { EverPostClient };
// module.exports = EverPostClient;