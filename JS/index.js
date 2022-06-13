import Timer from "./timer.js"
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import { 
  BTN_PLAY,
  BTN_STOP,
  BTN_INCREASE,
  BTN_DECREASE,
  BTN_COFFEE_SHOP,
  BTN_FOREST,
  BTN_FIRE,
  BTN_RAIN,
  BTN_DARK,
  BTN_LIGHT,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

let timerTimeout;

const sound = Sounds();

const controls = Controls({
  BTN_PLAY,
})

const timer = Timer({
  timerTimeout,
  minutesDisplay,
  secondsDisplay,
  BTN_PLAY,
});

BTN_PLAY.addEventListener('click', function () {
  timer.countdown();
  controls.play();
});

BTN_STOP.addEventListener('click', function () {
  timer.resetTimer();
  sound.pressButton();
});

BTN_INCREASE.addEventListener('click', function () {
  timer.increaseMinutes();
  sound.pressButton();
});

BTN_DECREASE.addEventListener('click', function () {
  timer.decreaseMinutes();
  sound.pressButton();
});

BTN_LIGHT.addEventListener('click', function() {
  console.log('chegou o light')
  BTN_DARK.classList.remove('hide');
  BTN_LIGHT.classList.add('hide');
})

BTN_DARK.addEventListener('click', function() {
  BTN_DARK.classList.add('hide');
  BTN_LIGHT.classList.remove('hide');
  console.log('chegou o dark')
})

BTN_FOREST.addEventListener('click', function () {
  controls.showSelectedBtn(BTN_FOREST, sound.FOREST_AUDIO);
  controls.showUnselectedBtns(BTN_COFFEE_SHOP, BTN_FIRE, BTN_RAIN);
  controls.muteUnselectedSongs(sound.RAIN_AUDIO, sound.FIRE_AUDIO, sound.COFFEE_SHOP_AUDIO);
})

BTN_RAIN.addEventListener('click', function () {
  controls.showSelectedBtn(BTN_RAIN, sound.RAIN_AUDIO);
  controls.showUnselectedBtns(BTN_COFFEE_SHOP, BTN_FIRE, BTN_FOREST);
  controls.muteUnselectedSongs(sound.FOREST_AUDIO, sound.FIRE_AUDIO, sound.COFFEE_SHOP_AUDIO);
})

BTN_FIRE.addEventListener('click', function () {
  controls.showSelectedBtn(BTN_FIRE, sound.FIRE_AUDIO);
  controls.showUnselectedBtns(BTN_COFFEE_SHOP, BTN_RAIN, BTN_FOREST);
  controls.muteUnselectedSongs(sound.FOREST_AUDIO, sound.RAIN_AUDIO, sound.COFFEE_SHOP_AUDIO);
})

BTN_COFFEE_SHOP.addEventListener('click', function () {
  controls.showSelectedBtn(BTN_COFFEE_SHOP, sound.FIRE_AUDIO);
  controls.showUnselectedBtns(BTN_FIRE, BTN_RAIN, BTN_FOREST);
  controls.muteUnselectedSongs(sound.FOREST_AUDIO, sound.FIRE_AUDIO, sound.RAIN_AUDIO);
})
