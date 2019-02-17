const YOUTUBE_DOM_ID = 'ever-youtube-player';

export default class YoutubePlayer {
  constructor(youtubeId, setting) {
    this.ytPlayerDom = document.getElementById(YOUTUBE_DOM_ID);
    this.youtubeId = youtubeId;
    this.setting = setting;

    this.autoplay = this.autoplay.bind(this);
  }

  autoplay() {
    return(this.setting.use_autoplay)
  }

  start(){
    if(typeof(this.ytPlayerDom) === 'undefined') { return; }

    if(typeof(this.youtubeId) === 'undefined' || this.youtubeId === ''){
      console.log(Error('[EVER] Failed to find a valid Youtube ID. Ensure that it is set on EVER console.'));
    }

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player(YOUTUBE_DOM_ID, {
        videoId: this.youtubeId,
        playerVars: {
          modestbranding: 1,
          autohide: 1,
          rel: 0,
          autoplay: this.autoplay() ? 1 : 0,
          controls: 1,
          showinfo: 1,
          fs: 0,
          frameborder: 0
        },
        events: {
          onReady: (event => {
            if(this.autoplay()){
              event.target.playVideo();
            }
          }),
          onStateChange: (event => {
            switch(event.data){
              case YT.PlayerState.ENDED:
                event.target.seekTo(0, true);
                event.target.stopVideo();
                break;
            }
          })
        }
      })
    }
  }
}
