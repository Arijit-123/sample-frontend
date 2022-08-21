console.log('Welcome to Spotify');
let songIndex=0;
let audioElement= new Audio('prject/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongname=document.getElementById('masterSongName')
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName: "let me love you", filePath: "prject/songs/1.mp3", coverPath:"prject/covers/1.jpg"},
    {songName: "hero legion", filePath: "prject/songs/2.mp3", coverPath:"prject/covers/2.jpg"},
    {songName: "baulevard of broken dreams", filePath: "prject/songs/3.mp3", coverPath:"prject/covers/3.jpg"},
    {songName: "musicaaaa", filePath: "prject/songs/4.mp3", coverPath:"prject/covers/4.jpg"},
    {songName: "legends never die", filePath: "prject/songs/5.mp3", coverPath:"prject/covers/5.jpg"},
    {songName: "power song", filePath: "prject/songs/6.mp3", coverPath:"prject/covers/6.jpg"},
    {songName: "geetpyas", filePath: "prject/songs/7.mp3", coverPath:"prject/covers/7.jpg"},
    {songName: "linkin park", filePath: "prject/songs/8.mp3", coverPath:"prject/covers/8.jpg"},
    {songName: "dreams", filePath: "prject/songs/9.mp3", coverPath:"prject/covers/9.jpg"},
    {songName: "dreams", filePath: "prject/songs/5.mp3", coverPath:"prject/covers/10.jpg"}, 
]
songItem.forEach((element, i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

//audioelement.play

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//LISTEN TO EVENTS
audioElement.addEventListener( 'timeupdate' , () =>
{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100; 
})
const MakeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        MakeAllPlay();
       
     songIndex=parseInt(e.target.id);
     console.log(e.target);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src='prject/songs/9.mp3';
     masterSongname.innerText=songs[songIndex].songName;

     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
      songIndex+=1;
    }
    audioElement.src='prject/songs/9.mp3';
    masterSongname.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
      songIndex-=1;
    }
    audioElement.src='prject/songs/9.mp3';
    masterSongname.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})