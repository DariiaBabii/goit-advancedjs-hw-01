import throttle from "lodash/throttle";
import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const updatePlaybackTime = (data) => {
  localStorage.setItem("videoplayer-current-time", data.seconds);
};

const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 1000);

player.on("timeupdate", throttledUpdatePlaybackTime);

const savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
  player
    .setCurrentTime(parseFloat(savedTime))
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});
