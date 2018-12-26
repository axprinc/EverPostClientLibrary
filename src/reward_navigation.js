export default class RewardNavigation {
  constructor(show_reward) {
    this.showReward = show_reward;
    this.applyVisibility();
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
}