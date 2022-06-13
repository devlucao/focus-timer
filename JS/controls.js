import Sounds from "./sounds.js";

const sound = Sounds();

export default function Controls({
  BTN_PLAY,
}) {


function showSelectedBtn(selectedBtn, selectedAudio) {

  selectedBtn.classList.replace('sound-controls', 'btn-selected');
  selectedAudio.play();

}

function showUnselectedBtns(btn1, btn2, btn3) {
  btn1.classList.replace('btn-selected', 'sound-controls');
  btn2.classList.replace('btn-selected', 'sound-controls');
  btn3.classList.replace('btn-selected', 'sound-controls');
}

function muteUnselectedSongs(song1, song2, song3) {
  song1.pause();
  song2.pause();
  song3.pause();
}

function play() {
    sound.pressButton();
    BTN_PLAY.classList.add('hide');
}

return {
  showSelectedBtn,
  showUnselectedBtns,
  play,
  muteUnselectedSongs
}

}
