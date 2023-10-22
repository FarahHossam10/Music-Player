audioList = [
    {
        songName : "Wind Chimes",
        artistName : "SoundsForYou",
        songSrc : "audio/wind-chimes-bells-115747.mp3",
        imgSrc : "images/flower.jpg",
        loved : false
    },
    {
        songName : "Singing Birds",
        artistName : "SoundsForYou",
        songSrc : "audio/birds-singing-calm-river-nature-ambient-sound-127411.mp3",
        imgSrc : "images/flower2.jfif",
        loved : false
    },
    {
        songName : "Calm River",
        artistName : "SoundsForYou",
        songSrc : "audio/calm-river-ambience-loop-125071.mp3",
        imgSrc : "images/flower4.jpg",
        loved : false
    }
];

let container = document.getElementById("container");
let playBtn = document.getElementById("playBtn");
let audio = document.getElementById("audio");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let restart = document.getElementById("restart");
let progress = document.getElementById("progress");
let img = document.getElementById("img");


// play/pause Button
playBtn.addEventListener("click", ()=>{
    if(playBtn.classList.contains("fa-play")){
        audio.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
        img.style.animationPlayState = "running";
    }else{
        audio.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
        img.style.animationPlayState = "paused";
    }
});

function playSong(){
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    img.style.animationPlayState = "running";
}
function setContent(){
    container.querySelector("#songName").textContent = audioList[index].songName;
    container.querySelector("#artist").textContent = audioList[index].artistName;
    container.querySelector("#audio").src = audioList[index].songSrc;
    container.querySelector("#img").src = audioList[index].imgSrc;
    if(audioList[index].loved == true){
        heart.style.color = "red";
    }else{
        heart.style.color = "#FFF";
    }
}


// next Button
let index = 0;
function nextSong(){
    index++;
    if(index == audioList.length)  index = 0; 
    setContent();
    playSong();
}
next.addEventListener("click", nextSong);

// prev Button
prev.addEventListener("click", ()=>{
    index--;
    if(index < 0) index = audioList.length - 1;
    setContent();
    playSong();
});

// restart Button
restart.addEventListener("click", ()=>{
    audio.currentTime = 0;
    playSong();
})

// progress bar 
audio.onloadedmetadata = function(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}
if(audio.play){   
    setInterval(()=>{
        progress.value = audio.currentTime;
    },500)
}
audio.addEventListener("ended", nextSong);
progress.onchange = function(){
    playSong();
    audio.currentTime = progress.value;
}

// love button
let heart = document.getElementById("heart");
heart.addEventListener("click", ()=>{   
    if(audioList[index].loved == false){
        audioList[index].loved = true;
        heart.style.color = "red";
    }else{
        audioList[index].loved = false;
        heart.style.color = "#FFF";
    }
});







