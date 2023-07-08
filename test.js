let d = new Date();
document.getElementById("date").innerHTML = d;
const arr = new Int16Array(30);
document.getElementById("test").innerHTML = arr;
const char = [
{
    personality: 1,
    appearance: 4,
    voice: 4,
    name: "Nishimiya Shouko",
    anime: "Koe no katachi",
    avt: [
        "url('https://i.pinimg.com/originals/81/c1/c6/81c1c6eaf82af8c8be2e2b27d9370ac2.jpg')",
        "url('https://i.pinimg.com/originals/2b/bc/5e/2bbc5e714ca5291b8c6959a90d4385d9.jpg')",
        "url('https://i.pinimg.com/originals/b0/72/47/b072476c24c76403a6a5fab373e2b1da.jpg')",
        "url('https://i.pinimg.com/originals/90/ea/83/90ea832d6107d0729ad5565e5db0a70c.gif')"
    ],
    info: "VA: Hayami Saori"
},
{
    personality: 2,
    appearance: 1,
    voice: 3,
    name: "Kurobane Yusa",
    anime: "Charlotte",
    avt: [
        "url('https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg')",
        "url('https://i.pinimg.com/originals/b3/7f/43/b37f43dccdd6aaf7a0f338984fda679c.jpg')",
        "url('https://i.pinimg.com/originals/1b/3a/1e/1b3a1e13e1f3c380134b2232399fd0db.jpg')",
        "url('https://i.pinimg.com/originals/d6/b3/5e/d6b35eea6a63a56c4fd2774f042cceb8.gif')"
    ],
    info: "VA: Uchida Maaya"
},
{
    personality: 3,
    appearance: 2,
    voice: 1,
    name: "Shiina Mashiro",
    anime: "Sakurasou no Pet na Kanojo",
    avt: [
        "url('https://i.pinimg.com/originals/7c/e3/c8/7ce3c89c6530b9b61b9deec77a39a2f5.jpg')",
        "url('https://i.pinimg.com/originals/aa/b1/76/aab17609d0152435602d8163c49205fd.jpg')",
        "url('https://i.pinimg.com/originals/3f/6b/db/3f6bdba68792ebe2e4aac00e5fe7e70b.jpg')",
        "url('https://i.pinimg.com/originals/3e/ad/63/3ead636da3c80a59bb3de91d94b6d96d.gif')"
    ],
    info: "VA: Kayano Ai"
},
{
    personality: 4,
    appearance: 3,
    voice: 2,
    name: "Illyasviel von Eizbern",
    anime: "Fate/Stay Night",
    avt: [
        "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
        "url('https://i.pinimg.com/originals/a4/17/17/a41717e430f20a2cdfa05896f99d8906.jpg')",
        "url('https://i.pinimg.com/originals/1b/79/58/1b79587baaa9870253042eef9f10d9f7.jpg')",
        "url('https://i.pinimg.com/originals/9f/cb/91/9fcb91a61d72810af6597c9c136022b4.gif')"
    ],
    info: "VA: Kadowaki Mai"
}
]
const names = [];
const animes = [];
const avts = [];
const infos = [];
//load current status
const storedNames = JSON.parse(localStorage.getItem('names'));
const storedAnimes = JSON.parse(localStorage.getItem('animes'));
const storedAvts = JSON.parse(localStorage.getItem('avts'));
const storedInfos = JSON.parse(localStorage.getItem('infos'));
for (var i = 0; i < storedNames.length; i++){
    document.getElementsByTagName("h3")[i].innerHTML = storedNames[i];
    document.getElementsByClassName("h4")[i].innerHTML = storedAnimes[i];
    document.getElementsByClassName("avt")[i].style.backgroundImage = storedAvts[i];
    document.getElementsByTagName("p")[i].innerHTML = storedInfos[i];
}
alert(storedNames.length);
//sort type
var type = '';
function Personality(){type = 'personality'; Sort();}
function Appearance(){type = 'appearance'; Sort();}
function Voice(){type = 'voice'; Sort();}
function Sort(){
    document.documentElement.style.setProperty('--display', 'block');
    setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
    setTimeout(function(){
        location.reload();
        document.documentElement.style.setProperty('--display', 'none');
        if(type == 'personality'){char.sort(function(a, b){return (a.personality - b.personality)});}
        else if (type == 'appearance'){char.sort(function(a, b){return (a.appearance - b.appearance)});}
        else if (type == 'voice'){char.sort(function(a, b){return (a.voice - b.voice)});}
        for (var i = 0; i < 4; i++){
            document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
            names.push(char[i].name);
            document.getElementsByTagName("h4")[i].innerHTML = char[i].anime;
            animes.push(char[i].anime);
            document.getElementsByClassName("avt")[i].style.backgroundImage = char[i].avt[0];
            avts.push(char[i].avt[0]);
            document.getElementsByTagName("p")[i].innerHTML = char[i].info;
            infos.push(char[i].info);
        }
        localStorage.setItem('names', JSON.stringify(names));
        localStorage.setItem('animes', JSON.stringify(animes));
        localStorage.setItem('pics', JSON.stringify(avts));
        localStorage.setItem('infos', JSON.stringify(infos));
    }, 1000);
}
function changeAvt(index){
    document.getElementsByClassName("avt")[index].classList.remove("changeavt");
    void document.getElementsByClassName("avt")[index].offsetWidth; //trigger reflow
    document.getElementsByClassName("avt")[index].classList.add("changeavt");
    if(arr[index] == 3) {arr[index] = -1;}
    arr[index]++;
    setTimeout(function(){document.getElementsByClassName("avt")[index].style.backgroundImage = char[index].avt[arr[index]];}, 900);
    localStorage.setItem('arr', JSON.stringify(arr));
}
