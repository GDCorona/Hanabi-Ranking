let d = new Date();
document.getElementById("date").innerHTML = d;
const char = [
{
    personality: 1,
    appearance: 4,
    voice: 4,
    name: "Nishimiya Shouko",
    pic: 'https://i.pinimg.com/originals/81/c1/c6/81c1c6eaf82af8c8be2e2b27d9370ac2.jpg',
    info: "Koe no Katachi <br> VA: Hayami Saori"
},
{
    personality: 2,
    appearance: 1,
    voice: 3,
    name: "Nishimori Yusa",
    pic: 'https://i.pinimg.com/originals/1e/de/7d/1ede7d1a1d3c754892acb8c973a44858.jpg',
    info: "Charlotte <br> VA: Uchida Maaya"
},
{
    personality: 3,
    appearance: 2,
    voice: 1,
    name: "Shiina Mashiro",
    pic: 'https://i.pinimg.com/originals/7c/e3/c8/7ce3c89c6530b9b61b9deec77a39a2f5.jpg',
    info: "Sakurasou no Pet na Kanojo <br> VA: Kayano Ai"
},
{
    personality: 4,
    appearance: 3,
    voice: 2,
    name: "Illyasviel von Eizbern",
    pic: 'https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg',
    info: "Fate/ Stay Night <br> VA: Kadowaki Mai"
}
]
const names = [];
const pics = [];
const infos = [];
//load current status
const storedNames = JSON.parse(localStorage.getItem('names'));
const storedPics = JSON.parse(localStorage.getItem('pics'));
const storedInfos = JSON.parse(localStorage.getItem('infos'));
for (var i = 0; i < storedNames.length; i++){
    document.getElementsByTagName("h3")[i].innerHTML = storedNames[i];
    document.getElementsByTagName("img")[i].src = storedPics[i];
    document.getElementsByTagName("p")[i].innerHTML = storedInfos[i];
}
//sort type
var type = '';
function Personality(){type = 'personality'; Sort();}
function Appearance(){type = 'appearance'; Sort();}
function Voice(){type = 'voice'; Sort();}
function Sort(){
    document.documentElement.style.setProperty('--display', 'block');
    setInterval(function(){document.getElementById("wait").innerHTML += '.';}, 300);
    setTimeout(function(){location.reload(); document.documentElement.style.setProperty('--display', 'none');}, 1000);
    setInterval(function(){
        if(type == 'personality'){char.sort(function(a, b){return (a.personality - b.personality)});}
        else if (type == 'appearance'){char.sort(function(a, b){return (a.appearance - b.appearance)});}
        else if (type == 'voice'){char.sort(function(a, b){return (a.voice - b.voice)});}
        for (var i = 0; i < 4; i++){
            document.getElementsByTagName("h3")[i].innerHTML = char[i].name;
            names.push(char[i].name);
            document.getElementsByTagName("img")[i].src = char[i].pic;
            pics.push(char[i].pic);
            document.getElementsByTagName("p")[i].innerHTML = char[i].info;
            infos.push(char[i].info);
        }
        localStorage.setItem('names', JSON.stringify(names));
        localStorage.setItem('pics', JSON.stringify(pics));
        localStorage.setItem('infos', JSON.stringify(infos));
    }, 1000);
}
