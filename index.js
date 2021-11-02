let songs = [];

let currentSong = 0;

const colors = [
  "Aqua",
  "Aquamarine",
  "Blue",
  "BlueViolet",
  "Chartreuse",
  "Coral",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkMagenta",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DeepPink",
  "FireBrick",
  "Fuchsia",
  "GreenYellow",
  "Lime",
];

const title = document.querySelector("h1");
const input = document.querySelector("input");
const label = document.querySelector("label");
const previous = document.querySelector("#previous");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const player = document.querySelector("audio");
player.volume = 0.3;

// Event listeners when the user upload something
input.onchange = getSongs;
next.onclick = nextSong;
previous.onclick = previousSong;

function getSongs(event) {
  // Save all the files to the songs arr
  songs = event.target.files;
  // Play the first song
  playSong();
  // Change label to the name of the song
  label.innerText = songs[currentSong].name.slice(0, -4);
  // Change title
  title.innerText = "Music Player";
}

function playSong() {
  // Get temporary URL for mp3 file
  let song = URL.createObjectURL(songs[currentSong]);
  // Change label to the name of the song
  label.innerText = songs[currentSong].name.slice(0, -4);

  //Change the background when the song plays
  label.style.color = colors[Math.floor(Math.random() * songs.length)];
  label.style.backgroundColor =
    colors[Math.floor(Math.random() * songs.length)];

  player.setAttribute("src", song);
  player.play();
  play.querySelector("i.fas").classList.remove("fa-play");
  play.querySelector("i.fas").classList.add("fa-pause");
  play.onclick = pause;
}

function pause() {
  play.querySelector("i.fas").classList.add("fa-play");
  play.querySelector("i.fas").classList.remove("fa-pause");
  player.pause();
  play.onclick = playCurrent;
}

function playCurrent() {
  play.querySelector("i.fas").classList.remove("fa-play");
  play.querySelector("i.fas").classList.add("fa-pause");
  player.play();
  play.onclick = pause;
}

function nextSong() {
  if (currentSong + 1 < songs.length) {
    currentSong++;
    playSong();
  }
}

function previousSong() {
  if (currentSong - 1 >= 0) {
    currentSong--;
    playSong();
  }
}
