export default function Sounds() {

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

const FOREST_AUDIO = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download");
const RAIN_AUDIO = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view");
const FIRE_AUDIO = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view");
const COFFEE_SHOP_AUDIO = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view");

function pressButton() {
  buttonPressAudio.play();
}

function timeOver() {
  kitchenTimer.play();
}


  return {
    pressButton,
    timeOver,
    FOREST_AUDIO,
    RAIN_AUDIO,
    FIRE_AUDIO,
    COFFEE_SHOP_AUDIO,
    bgAudio
  }

}
