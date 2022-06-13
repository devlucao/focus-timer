export default function Sounds() {

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

const FOREST_AUDIO = new Audio('./Audios/Floresta.wav');
const RAIN_AUDIO = new Audio('./Audios/Chuva.wav');
const FIRE_AUDIO = new Audio('./Audios/Lareira.wav');
const COFFEE_SHOP_AUDIO = new Audio('./Audios/Cafeteria.wav');

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
  }

}
