var currentbg = -1;
var currentSounds = -1;
var check = true;
var body = document.getElementsByTagName("body")[0];
var secretsounds = document.getElementById("secretSounds");
var bg = 
[
    "url('https://i.pinimg.com/originals/52/a2/62/52a262d0944bcf487bf6c323c7c64c67.jpg')",
    "url('https://i.pinimg.com/originals/94/51/b8/9451b81a7c6e07d63ad7d26d7fc38e0a.jpg')",
    "url('https://i.pinimg.com/originals/28/61/fe/2861fe7c95b8124208fecdf63f818572.jpg')",
    "url('https://i.pinimg.com/originals/5f/32/73/5f32731ab2f9e18ce9509913c05eac4b.jpg')",
    "url('https://i.pinimg.com/originals/07/ca/ae/07caae2cd643c3f2f4db40b1917f4f8f.jpg')",
    "url('https://i.pinimg.com/originals/ec/82/a2/ec82a258956c9f4ad923c115454aaf10.jpg')",
    "url('https://i.pinimg.com/originals/bb/37/a6/bb37a6037cce5fc895a8450914a07458.jpg')",
    "url('https://i.pinimg.com/originals/1b/27/86/1b2786f1cee290a4b548c46d2b78b37d.jpg')",
    "url('https://i.pinimg.com/originals/b3/a7/99/b3a79923cb5dc7add78054d5d005801a.jpg')",
    "url('https://i.pinimg.com/originals/26/59/93/2659934c11ee4ca9305de593b8c1e401.jpg')"
];
var sounds = 
[
    "https://feeds.soundcloud.com/stream/1493606950-corona-689894639-kaguya-noise-3.mp3",
    "https://feeds.soundcloud.com/stream/1493606947-corona-689894639-kaguya-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
    "https://feeds.soundcloud.com/stream/1493606929-corona-689894639-chika-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
    "https://feeds.soundcloud.com/stream/1493606914-corona-689894639-rikka-noise-2.mp3",
    "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3"
];
//load current theme
var background = parseInt(localStorage.getItem('background'));
var cherryblossom = localStorage.getItem('cherryblossom');
var titlecolor = localStorage.getItem('titlecolor');
var color1 = localStorage.getItem('color1');
var color2 = localStorage.getItem('color2');
var color3 = localStorage.getItem('color3');
var color4 = localStorage.getItem('color4');
if(background == -1) {body.style.backgroundImage = "none";}
else{body.style.backgroundImage = bg[background];}
document.documentElement.style.setProperty('--cherryblossom', cherryblossom);
document.documentElement.style.setProperty('--titlecolor', titlecolor);
document.documentElement.style.setProperty('--color1', color1);
document.documentElement.style.setProperty('--color2', color2);
document.documentElement.style.setProperty('--color3', color3);
document.documentElement.style.setProperty('--color4', color4);
function runSecret(){
    if(check) {
        check = false;
        randombg(); 
        randomSounds(); 
        setTimeout(function(){check = true;}, 3000);
    }
    else {alert("Too fast!");}
}
function randombg(){
    var random = Math.floor(Math.random() * 10);
    if(currentbg == random){randombg();}
    else{
        currentbg = random;
        body.style.backgroundImage = bg[currentbg];
        localStorage.setItem('background', currentbg);
    }
}
function randomSounds(){
    var random = Math.floor(Math.random() * 7);
    if(currentSounds == random){randomSounds();}
    else{
        currentSounds = random;
        secretsounds.src = sounds[currentSounds];
        secretsounds.play();
    }
}
