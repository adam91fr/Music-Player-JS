const audio=document.querySelector("audio");
const track= document.querySelector("#track");
const elapsed= document.querySelector("#elapsed");
const trackTime= document.querySelector("#track-time");
const playButton= document.querySelector("#play-button");
const pauseButton= document.querySelector("#pause-button");
const stopButton= document.querySelector("#stop-button");
const volume= document.querySelector("#volume");
const volumeValue= document.querySelector("#volume-value");


let duration;

//audio.onloadedmetadata = function(){
//  duration=audio.duration;
//  trackTime.textContent=buildDuration(duration);
//};

audio.addEventListener("loadedmetadata", 
function(){
  duration=audio.duration;
    trackTime.textContent=buildDuration(duration);
});

playButton.addEventListener("click", function(){
    audio.play();
    audio.volume=volume.value;
    pauseButton.style.display="initial";
    stopButton.style.display="initial";
    this.style.display="none";
});

pauseButton.addEventListener("click", function(){
    audio.pause();
    playButton.style.display="initial";
    this.style.display="none";
});

stopButton.addEventListener("click", function(){
    audio.pause;
    audio.currentTime=0;
    playButton.style.display="initial";
    pauseButton.style.display="initial";
    this.style.display="none";
});

audio.addEventListener("timeupdate", function (){
    track.value=this.currentTime/duration;
    elapsed.textContent=buildDuration(this.currentTime);
});

track.addEventListener("input", function(){
    elapsed.textContent=buildDuration(this.value*duration);
    audio.currentTime=this.value*duration;
});

volume.addEventListener("input", function(){
    audio.volume=this.value;
    volumeValue.textContent=this.value*100+"%";
});

function buildDuration(duration){
    let minutes=Math.floor(duration/60);
    let reste=duration%60;
    let secondes=Math.floor(reste);
    return minutes + ":" + String(secondes).padStart(2, "0");
}
