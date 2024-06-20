const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

let audioElement = document.querySelector("#track_1");
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

function trackOn() {
  if (audioContext.state == 'suspended') {
    audioContext.resume().then(()=>{
      console.log("context ready.");
    });
  }

  if ($('#p_p').data("playing") == false) {
    audioElement.play();
    $('#p_p').data("playing", true);
  }
  else if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    $('#p_p').data("playing", false);
  }
  else {
    alert($('#p_p').data("playing"));
  } 
}

$('#p_p').on('click', () => {
  trackOn();
});

audioElement.addEventListener("ended", () => {
  $('#p_p').data("playing") = 'true';
});

$('#popipo').on('click', () => {
  $("#track_1").attr('src', './audio/pop.mp3');
  audioElement.volume = 1;
  audioElement = document.querySelector("#track_1");
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#coi').on('click', () => {
  $("#track_1").attr('src', './audio/coi.mp3');
  audioElement = document.querySelector("#track_1");
  audioElement.volume = 1;
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#prestol').on('click', () => {
  $("#track_1").attr('src', './audio/prestol.mp3');
  audioElement.volume = 1;
  audioElement = document.querySelector("#track_1");
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#phonk').on('click', () => {
  $("#track_1").attr('src', './audio/dvrst.mp3');
  audioElement.volume = 0.7;
  audioElement = document.querySelector("#track_1");
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#billi').on('click', () => {
  $("#track_1").attr('src', './audio/bulli.mp3');
  audioElement = document.querySelector("#track_1");
  audioElement.volume = 0.7;
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#strekoza').on('click', () => {
  $("#track_1").attr('src', './audio/strekoza.mp3');
  audioElement = document.querySelector("#track_1");
  audioElement.volume = 0.8;
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#forest').on('click', () => {
  $("#track_1").attr('src', './audio/forest.mp3');
  audioElement.volume = 1;
  audioElement = document.querySelector("#track_1");
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 
$('#snoop').on('click', () => {
  $("#track_1").attr('src', './audio/snoop.mp3');
  audioElement = document.querySelector("#track_1");
  audioElement.volume = 0.8;
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}); 