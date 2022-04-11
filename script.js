function playSound(e) {
  // selects the audio element where data-key="e.keyCode"
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
}

window.addEventListener('keydown', playSound);
