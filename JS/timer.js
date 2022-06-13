import Sounds from "./sounds.js";

export default function Timer({
  timerTimeout,
  minutesDisplay,
  secondsDisplay,
  BTN_PLAY,
}) {

  function countdown() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    timerTimeout = setTimeout(() => {
  
      if (!minutes && !seconds) {
        Sounds().timeOver();
        resetTimer();
        return
      }
  
      if (seconds <= 0) {
        seconds = 60;
        minutesDisplay.textContent = String(--minutes).padStart(2, '0');
      }
  
      secondsDisplay.textContent = String(--seconds).padStart(2, '0');
  
      countdown()
    }, 1000)
  
  }
  
  function resetTimer() {
    clearTimeout(timerTimeout);
    BTN_PLAY.classList.remove('hide');
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
  }

  function increaseMinutes() {
  
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0');
  }
  
  function decreaseMinutes() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0');
  
    minutesDisplay.textContent <= 0 ? minutesDisplay.textContent = '00' : minutesDisplay.textContent;
  }

  return {

    countdown,
    resetTimer,
    increaseMinutes,
    decreaseMinutes,
    
  }

}