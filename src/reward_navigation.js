export default class RewardNavigation {
  constructor(show_reward, effective_reward_url) {
    this.showReward = show_reward;
    this.effectiveRewardUrl = effective_reward_url;
    this.applyVisibility();
    this.applyHrefValue();
  }

  applyVisibility() {
    document.querySelectorAll('.ever-reward-on').forEach((dom) => {
      if (this.showReward) {
        dom.style.display = 'inline-block';
      } else {
        dom.style.display = 'none';
      }
    });
    document.querySelectorAll('.ever-reward-off').forEach((dom) => {
      if (this.showReward) {
        dom.style.display = 'none';
      } else {
        dom.style.display = 'inline-block';
      }
    });
  }

  applyHrefValue() {
    document.querySelectorAll('a.ever-reward').forEach((dom) => {
      dom.href = this.effectiveRewardUrl;
    });
  }
}