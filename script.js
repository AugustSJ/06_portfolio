document.querySelector(".center-ul").addEventListener("click", function () {
  var audio = document.querySelector("#portfolie-lyd");
  audio.volume = 0.4;
  audio.currentTime = 0;
  audio.play();
});
