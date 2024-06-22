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
  audioElement.volume = $('#volume').val() / 100;
  trackOn();
});

audioElement.addEventListener("ended", () => {
  $('#p_p').data("playing") = 'true';
});

$('#popipo').on('click', () => {
  getMusic('pop', $('#volume').val() / 100);
}); 
$('#coi').on('click', () => {
  getMusic('coi', $('#volume').val() / 100);
}); 
$('#prestol').on('click', () => {
  getMusic('prestol', $('#volume').val() / 100);
}); 
$('#phonk').on('click', () => {
  getMusic('dvrst', $('#volume').val() / 100);
}); 
$('#billi').on('click', () => {
  getMusic('bulli', $('#volume').val() / 100);
}); 
$('#strekoza').on('click', () => {
  getMusic('strekoza', $('#volume').val() / 100);
}); 
$('#forest').on('click', () => {
  getMusic('forest', $('#volume').val() / 100);
}); 
$('#snoop').on('click', () => {
  getMusic('snoop', $('#volume').val() / 100);
}); 

$('#random').on('click', ()=> {
let rand = Math.floor(((Math.random() * 100000) % 8));
switch (rand) {
  case 0:
    getMusic('pop', $('#volume').val() / 100);   
    break;
    case 1:
      getMusic('coi', $('#volume').val() / 100);
      break;
    case 2:
      getMusic('prestol', $('#volume').val() / 100);
      break;
    case 3:
      getMusic('dvrst', $('#volume').val() / 100);
      break;
    case 4:
      getMusic('bulli', $('#volume').val() / 100);
      break;
    case 5:
      getMusic('strekoza', $('#volume').val() / 100);
      break;
    case 6:
      getMusic('forest', $('#volume').val() / 100);
      break;
    case 7:
      getMusic('snoop', $('#volume').val() / 100);
      break;
  default:
    console.log('not working random');
    break;
}
});

function getMusic(name, vol) {
  $("#track_1").attr('src', `./audio/${name}.mp3`);
  audioElement = document.querySelector("#track_1");
  audioElement.volume = vol;
  if ($('#p_p').data("playing") == true) {
    audioElement.pause();
    audioElement.play();
  }
}

$('#volume').on('input', () => {
  const volume = ($('#volume').val());
  $('#volume').css({'background': `linear-gradient(to right, #ff96f6cc ${volume}%, #af96ffcc ${volume}%)`});  
  audioElement.volume = $('#volume').val() / 100;
  $('#vol_text').text(`Volume: ${($('#volume').val())}%`);
});